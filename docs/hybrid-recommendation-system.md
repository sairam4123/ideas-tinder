# Hybrid idea recommendation system

## Current codebase baseline

The app already has the right primitives for a first-stage recommender:

- `User.preferenceVector` stores a latent vector.
- `FieldCatalog` + `UserFieldSelection` store explicit onboarding interests.
- `Idea.vector` + `IdeaChunkEmbedding` store idea embeddings.
- `SwipeEvent`, `Favorite`, and `PreferenceUpdateLog` store reinforcement signals.
- `src/server/services/idea/engine.ts` currently ranks freshly generated ideas by cosine similarity between `User.preferenceVector` and `Idea.vector`.

That baseline is useful, but it has three scaling limits:

1. explicit preferences are only flat fields, not semantic tags
2. implicit learning updates only a single vector and loses explainability
3. there is no mechanism to normalize duplicate tags or control taxonomy growth

This design extends the current model without breaking the existing flow.

---

## Target architecture

Use a **hybrid recommender** with two persistent user signals:

1. **Explicit signal**: weighted user-tag preferences
2. **Implicit signal**: latent interest embedding updated from interactions

Candidate ideas are ranked with a hybrid score:

$$
\text{score}(u, i) = w_e \cdot E(u, i) + w_l \cdot L(u, i) + w_x \cdot X(u, i)
$$

Where:

- $E(u, i)$ = explicit tag affinity
- $L(u, i)$ = latent embedding similarity
- $X(u, i)$ = exploration bonus
- $w_e, w_l, w_x$ are bounded weights, for example $0.45, 0.45, 0.10$

Use explicit preferences for transparency and cold start, and latent similarity for adaptation and semantic generalization.

---

## Core entities

### 1. Users

Keep the current `User` model, but split the profile into two distinct layers:

- explicit tag preferences
- latent interest profile

### 2. Ideas

Each idea should have:

- content: title + description
- canonical tags
- content embedding
- optional cluster/novelty metadata

The existing `Idea.vector` can remain the primary content embedding.

### 3. Tags

Tags become first-class semantic objects.

Each tag should have:

- canonical label
- normalized slug
- embedding in shared semantic space
- optional parent tag
- status fields for aliasing/merging
- usage statistics

`FieldCatalog` can be treated as the initial root tag set during migration.

---

## Recommended schema evolution

Add the following models to `prisma/main/models.prisma`.

### Tag layer

- `Tag`
  - `id`
  - `slug` unique
  - `label`
  - `embedding` Json?
  - `parentTagId` nullable
  - `status` enum: `ACTIVE | ALIAS | MERGED`
  - `canonicalTagId` nullable
  - `source` enum: `SYSTEM | USER | MODEL`
  - `createdAt`, `updatedAt`

- `TagAlias`
  - alias text or slug
  - `tagId`
  - used to redirect duplicate labels to the canonical tag

- `TagSimilarity`
  - `tagAId`, `tagBId`
  - `similarity`
  - optional materialized neighbor table for fast propagation

### Idea-tag layer

- `IdeaTag`
  - `ideaId`
  - `tagId`
  - `weight` float
  - `sourceConfidence` float
  - unique on `[ideaId, tagId]`

### User profile layer

- `UserTagPreference`
  - `userId`
  - `tagId`
  - `weight`
  - `explicitWeight`
  - `implicitWeight`
  - `lastReinforcedAt`
  - unique on `[userId, tagId]`

- `UserInterestProfile`
  - `userId` unique
  - `latentVector` Json
  - `positiveCentroid` Json?
  - `negativeCentroid` Json?
  - `updatedAt`

### Interaction layer

- `IdeaInteraction`
  - `id`
  - `userId`
  - `ideaId`
  - `interactionType` enum:
    - `VIEW`
    - `LIKE`
    - `SAVE`
    - `SHARE`
    - `SKIP`
    - `GENERATE_RELATED`
  - `reward` float
  - `dwellTimeMs` nullable
  - `context` Json?
  - `createdAt`

### Recommendation telemetry

- `RecommendationImpression`
  - `userId`
  - `ideaId`
  - `rank`
  - `explicitScore`
  - `latentScore`
  - `explorationScore`
  - `finalScore`
  - `createdAt`

This lets the system learn from served-but-skipped ideas and measure drift.

---

## Migration from current models

Use the existing structures as seed data.

### Existing-to-new mapping

- `FieldCatalog` -> seed canonical root `Tag` records
- `UserFieldSelection` -> initialize `UserTagPreference.explicitWeight`
- `User.preferenceVector` -> initialize `UserInterestProfile.latentVector`
- `SwipeEvent` and `Favorite` -> backfill `IdeaInteraction`
- `Idea.fieldId` -> initial `IdeaTag`
- `PreferenceUpdateLog` -> keep as audit trail

### Backward compatibility

Do **not** remove the current field-based schema in the first rollout.

Instead:

1. keep onboarding writing `UserFieldSelection`
2. mirror onboarding selections into `UserTagPreference`
3. keep `Idea.fieldId` as a coarse category
4. attach many tags through `IdeaTag`
5. read hybrid profile first, then fall back to current vector flow if needed

---

## Tag normalization and taxonomy control

This is the main defense against uncontrolled tag proliferation.

### Canonicalization pipeline

When a new tag candidate appears:

1. normalize text: lowercase, trim, singularize if needed
2. check exact slug match
3. embed the tag label
4. search nearest existing tags
5. if cosine similarity exceeds threshold, reuse canonical tag
6. otherwise create a new tag, but attach it under a parent or cluster

Recommended thresholds:

- exact slug match: direct reuse
- cosine $\ge 0.92$: treat as duplicate or alias
- cosine $0.82$ to $0.92$: same neighborhood, suggest parent/merge review
- cosine $< 0.82$: keep separate

### Taxonomy rules

Use a shallow taxonomy:

- root domains: `AI`, `Health`, `Climate`, `Developer Tools`, etc.
- child tags: `AI Agents`, `Remote Patient Monitoring`, `Grid Analytics`
- avoid deep trees beyond 2 to 3 levels

Store `parentTagId` on `Tag` for low operational complexity.

### Periodic maintenance job

Run a scheduled normalization job that:

- finds low-frequency tags with very high similarity to canonical tags
- converts them to aliases
- migrates `IdeaTag` and `UserTagPreference` rows to canonical tags
- preserves merge history for explainability

---

## User profile model

### Explicit user tag profile

For each user, maintain weighted tag preferences.

Suggested decomposition:

$$
\text{tagWeight}(u, t) = \text{explicitWeight}(u, t) + \text{implicitWeight}(u, t)
$$

- `explicitWeight` starts from onboarding
- `implicitWeight` changes through reinforcement

Treat onboarding values as **initial seeds only**:

- seed explicit weights should decay faster than learned implicit weights
- onboarding-only tags without reinforcement should fade quickly (for example, over a few weeks)
- repeated interactions can still re-amplify those tags through `implicitWeight`

Initialize onboarding tags with a bounded prior, for example:

- selected root tags: `0.8`
- selected custom or inferred child tags: `0.5`

### Latent interest profile

Maintain a user latent vector using an exponential moving average:

$$
\mathbf{z}_{u}^{new} = (1 - \alpha)\mathbf{z}_{u}^{old} + \alpha r \mathbf{z}_{i}
$$

Where:

- $\mathbf{z}_{u}$ is the user latent vector
- $\mathbf{z}_{i}$ is the idea embedding
- $r$ is a bounded reward in $[-1, 1.5]$
- $\alpha$ is a learning rate, e.g. `0.05` to `0.15`

Keep vectors normalized after updates.

Track optional positive and negative centroids separately:

- positive centroid for liked/saved/shared ideas
- negative centroid for skipped/disliked ideas

This supports “recommended because similar to what you liked” and “avoid too much of what you skip”.

---

## Reinforcement update rules

### Interaction reward table

Use a stable, bounded reward map:

- `LIKE`: `+1.0`
- `DISLIKE`: `-1.0`
- `LIKE+FAV`: `+1.5`

Optional dwell-time contribution should stay minimal (small bounded adjustment only, e.g. `±0.05` to `±0.10` at most) so interaction intent dominates.

This should replace the current narrow left/right/top-only interpretation over time.

### Tag reinforcement

For an interacted idea with tags $T_i$ and reward $r$:

1. update direct tags strongly
2. update neighboring tags weakly by embedding similarity
3. update parent tags weakly through taxonomy

Direct update:

$$
\Delta_{direct}(t) = \eta \cdot r \cdot w_{ideaTag}(i, t)
$$

Neighbor propagation:

$$
\Delta_{neighbor}(n) = \eta \cdot r \cdot w_{ideaTag}(i, t) \cdot \max(0, \cos(t, n)) \cdot \lambda_n
$$

Parent propagation:

$$
\Delta_{parent}(p) = \eta \cdot r \cdot \lambda_p
$$

Recommended coefficients:

- learning rate $\eta = 0.08$
- neighbor attenuation $\lambda_n = 0.15$ to `0.35`
- parent attenuation $\lambda_p = 0.20$

Cap each tag weight to a bounded range such as `[-2.5, 3.0]`.

### Decay

Apply gradual decay so early behavior does not dominate forever:

$$
\text{weight}_{t+1} = \gamma^{\Delta d} \cdot \text{weight}_t + \Delta
$$

Where:

- $\gamma$ is daily decay, e.g. `0.995`
- $\Delta d$ is elapsed days since last reinforcement

This can be applied lazily on read/write using `lastReinforcedAt`, which scales better than batch-updating every row daily.

---

## Hybrid ranking strategy

### Candidate generation

For small scale, the current stack-generation approach can stay, but candidates should come from both:

1. newly generated ideas
2. previously generated ideas not yet seen by the user

As the corpus grows, use a two-stage flow:

1. **retrieval**
   - nearest ideas by latent similarity
   - ideas attached to strong user tags
   - trending or fresh ideas
2. **re-ranking**
   - compute full hybrid score

### Explicit score

Compute explicit affinity from matched idea tags:

$$
E(u, i) = \frac{\sum_{t \in T_i} w(u,t) \cdot w(i,t)}{\sum_{t \in T_i} w(i,t) + \epsilon}
$$

### Latent score

$$
L(u, i) = \cos(\mathbf{z}_u, \mathbf{z}_i)
$$

### Exploration score

Use a small exploration term:

$$
X(u, i) = \beta_1 \cdot \text{novelty}(u, i) + \beta_2 \cdot \text{trend}(i)
$$

Where novelty favors:

- unseen tags adjacent to strong interests
- newer ideas
- ideas from underrepresented clusters

A practical production rule is:

- `85%` exploit from top hybrid scores
- `15%` explore from novelty or trend pool

Keep exploration bounded so feed quality remains stable.

---

## Recommendation serving flow in this codebase

### 1. Onboarding

Current file: `src/app/onboarding/page.tsx`

- keep the current field selection UX
- map selected fields to canonical tags
- initialize `UserTagPreference`
- initialize `UserInterestProfile` from selected tag embeddings

### 2. Idea creation and enrichment

Current file: `src/server/services/idea/engine.ts`

When persisting a generated idea:

1. generate idea embedding using the existing Gemini embedding flow
2. extract 2 to 5 candidate tags from title + description
3. normalize candidate tags against canonical tags
4. write `IdeaTag` rows
5. optionally attach a coarse `fieldId` for backward compatibility

### 3. Interaction handling

Current file: `src/server/services/idea/engine.ts`

Extend the current `registerSwipe()` flow into a generic interaction updater:

1. record `IdeaInteraction`
2. lazily decay the affected user tag weights
3. reinforce direct tags
4. propagate to similar and parent tags
5. update `UserInterestProfile.latentVector`
6. log before/after state in `PreferenceUpdateLog`

### 4. Recommendation generation

Replace single-vector ranking in `generateFreshStack()` with:

1. collect candidate ideas
2. score each candidate with explicit + latent + exploration components
3. persist score breakdown in `RecommendationImpression`
4. return ranked stack

---

## Explainability in the UI

The user should be able to inspect and adjust both preference layers.

### User-visible profile page

Current file: `src/app/user/page.tsx`

Add:

- top reinforced tags with weights
- recently rising tags
- suppressed tags from repeated skips
- latent summary generated from top positive idea neighbors
- “why this idea” chips:
  - matching tags
  - semantic similarity explanation
  - exploration reason, if applicable

Suggested display sections:

- `Top interests`
- `Emerging interests`
- `Less interested recently`
- `Latent profile summary`
- `Recommendation controls`

Allow direct actions:

- boost a tag
- mute a tag
- remove an onboarding tag
- reset recent learning

---

## Stability and scale considerations

### 1. Keep the taxonomy shallow

Do not allow arbitrary free-form tags to become canonical immediately.

New user-entered tags should first become:

- aliases to existing tags, or
- low-trust candidate tags requiring repeated evidence

### 2. Limit tag fanout

For each idea:

- keep only top `3` to `6` canonical tags
- store weights
- discard weak tags

For each user:

- keep top `100` to `300` active tag preferences
- archive or prune weak decayed tags

### 3. Precompute nearest tags

Do not compute tag-to-tag similarity against the full tag set on every interaction.

Instead:

- materialize top `k` neighbors per tag, e.g. `k = 10`
- update neighbor tables during normalization jobs

### 4. Separate write path from ranking path

- writes: append interaction + update profile incrementally
- reads: rank from profile snapshot

Avoid recomputing a user’s full history on every request.

### 5. Add telemetry early

Persist score components so you can answer:

- which signal drove the recommendation
- whether exploration hurts or helps engagement
- which tags are over-fragmenting

---

## Suggested rollout plan

### Phase 1: low-risk hybrid foundation

- add `Tag`, `IdeaTag`, `UserTagPreference`, `UserInterestProfile`, `IdeaInteraction`
- seed tags from `FieldCatalog`
- keep current UI and stack flow
- rank by `0.5 * explicit + 0.5 * latent`

### Phase 2: semantic propagation

- add tag embeddings
- add nearest-neighbor propagation
- add parent tag propagation
- add profile decay

### Phase 3: normalization and exploration

- alias duplicate tags
- run periodic clustering job
- add novelty/trend exploration pool
- store recommendation impressions

### Phase 4: advanced retrieval

- introduce ANN retrieval for idea embeddings
- retrieve candidates by tag and vector separately
- re-rank with telemetry-driven weight tuning

---

## Concrete implementation guidance for this repo

### Files to change first

- `prisma/main/models.prisma`
  - add new profile, tag, and interaction tables
- `src/server/services/idea/engine.ts`
  - replace single-vector updates with hybrid profile updates
- `src/server/services/idea/vector.ts`
  - add normalization, decay, centroid, and bounded update helpers
- `src/server/api/routers/idea.ts`
  - expose tag profile, explanation data, and generic interactions
- `src/app/user/page.tsx`
  - show explicit tags and latent summary together

### Recommended new modules

- `src/server/services/idea/tags.ts`
  - canonicalization, aliasing, taxonomy helpers
- `src/server/services/idea/profile.ts`
  - user profile decay and reinforcement logic
- `src/server/services/idea/ranking.ts`
  - explicit, latent, exploration score calculation
- `src/server/services/idea/interactions.ts`
  - generic reward mapping and logging

---

## Default scoring configuration

A stable default configuration for this app:

```ts
{
  rankingWeights: {
    explicit: 0.45,
    latent: 0.45,
    exploration: 0.10,
  },
  reinforcement: {
    learningRate: 0.08,
    neighborPropagation: 0.20,
    parentPropagation: 0.20,
    dailyDecay: 0.995,
  },
  tagControl: {
    maxTagsPerIdea: 5,
    maxActiveTagsPerUser: 200,
    duplicateThreshold: 0.92,
    relatedThreshold: 0.82,
  },
  exploration: {
    exploitPercent: 0.85,
    explorePercent: 0.15,
  },
}
```

---

## Summary

For this codebase, the right design is:

- keep the current vector-based backbone
- promote `FieldCatalog` into a seed taxonomy for richer semantic tags
- store user preferences as both explicit tag weights and a latent embedding profile
- update both layers incrementally from interactions
- propagate reinforcement to nearby and parent tags
- decay preferences over time
- rank ideas with explicit + latent + exploration signals
- normalize tags regularly to stop duplication and fragmentation

This gives the app a recommender that is explainable, adaptive, and stable as users, tags, and ideas grow.
