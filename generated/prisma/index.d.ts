
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FieldCatalog
 * 
 */
export type FieldCatalog = $Result.DefaultSelection<Prisma.$FieldCatalogPayload>
/**
 * Model UserFieldSelection
 * 
 */
export type UserFieldSelection = $Result.DefaultSelection<Prisma.$UserFieldSelectionPayload>
/**
 * Model Idea
 * 
 */
export type Idea = $Result.DefaultSelection<Prisma.$IdeaPayload>
/**
 * Model IdeaChunkEmbedding
 * 
 */
export type IdeaChunkEmbedding = $Result.DefaultSelection<Prisma.$IdeaChunkEmbeddingPayload>
/**
 * Model IdeaStack
 * 
 */
export type IdeaStack = $Result.DefaultSelection<Prisma.$IdeaStackPayload>
/**
 * Model IdeaStackItem
 * 
 */
export type IdeaStackItem = $Result.DefaultSelection<Prisma.$IdeaStackItemPayload>
/**
 * Model SwipeEvent
 * 
 */
export type SwipeEvent = $Result.DefaultSelection<Prisma.$SwipeEventPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model PreferenceUpdateLog
 * 
 */
export type PreferenceUpdateLog = $Result.DefaultSelection<Prisma.$PreferenceUpdateLogPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SwipeAction: {
  DISLIKE: 'DISLIKE',
  LIKE_AND_FAVE: 'LIKE_AND_FAVE',
  FAVE_ONLY: 'FAVE_ONLY'
};

export type SwipeAction = (typeof SwipeAction)[keyof typeof SwipeAction]

}

export type SwipeAction = $Enums.SwipeAction

export const SwipeAction: typeof $Enums.SwipeAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fieldCatalog`: Exposes CRUD operations for the **FieldCatalog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FieldCatalogs
    * const fieldCatalogs = await prisma.fieldCatalog.findMany()
    * ```
    */
  get fieldCatalog(): Prisma.FieldCatalogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFieldSelection`: Exposes CRUD operations for the **UserFieldSelection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFieldSelections
    * const userFieldSelections = await prisma.userFieldSelection.findMany()
    * ```
    */
  get userFieldSelection(): Prisma.UserFieldSelectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idea`: Exposes CRUD operations for the **Idea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ideas
    * const ideas = await prisma.idea.findMany()
    * ```
    */
  get idea(): Prisma.IdeaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ideaChunkEmbedding`: Exposes CRUD operations for the **IdeaChunkEmbedding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdeaChunkEmbeddings
    * const ideaChunkEmbeddings = await prisma.ideaChunkEmbedding.findMany()
    * ```
    */
  get ideaChunkEmbedding(): Prisma.IdeaChunkEmbeddingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ideaStack`: Exposes CRUD operations for the **IdeaStack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdeaStacks
    * const ideaStacks = await prisma.ideaStack.findMany()
    * ```
    */
  get ideaStack(): Prisma.IdeaStackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ideaStackItem`: Exposes CRUD operations for the **IdeaStackItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdeaStackItems
    * const ideaStackItems = await prisma.ideaStackItem.findMany()
    * ```
    */
  get ideaStackItem(): Prisma.IdeaStackItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.swipeEvent`: Exposes CRUD operations for the **SwipeEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SwipeEvents
    * const swipeEvents = await prisma.swipeEvent.findMany()
    * ```
    */
  get swipeEvent(): Prisma.SwipeEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preferenceUpdateLog`: Exposes CRUD operations for the **PreferenceUpdateLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreferenceUpdateLogs
    * const preferenceUpdateLogs = await prisma.preferenceUpdateLog.findMany()
    * ```
    */
  get preferenceUpdateLog(): Prisma.PreferenceUpdateLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    User: 'User',
    FieldCatalog: 'FieldCatalog',
    UserFieldSelection: 'UserFieldSelection',
    Idea: 'Idea',
    IdeaChunkEmbedding: 'IdeaChunkEmbedding',
    IdeaStack: 'IdeaStack',
    IdeaStackItem: 'IdeaStackItem',
    SwipeEvent: 'SwipeEvent',
    Favorite: 'Favorite',
    PreferenceUpdateLog: 'PreferenceUpdateLog',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "user" | "fieldCatalog" | "userFieldSelection" | "idea" | "ideaChunkEmbedding" | "ideaStack" | "ideaStackItem" | "swipeEvent" | "favorite" | "preferenceUpdateLog" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FieldCatalog: {
        payload: Prisma.$FieldCatalogPayload<ExtArgs>
        fields: Prisma.FieldCatalogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldCatalogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldCatalogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload>
          }
          findFirst: {
            args: Prisma.FieldCatalogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldCatalogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload>
          }
          findMany: {
            args: Prisma.FieldCatalogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload>[]
          }
          create: {
            args: Prisma.FieldCatalogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload>
          }
          createMany: {
            args: Prisma.FieldCatalogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FieldCatalogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload>[]
          }
          delete: {
            args: Prisma.FieldCatalogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload>
          }
          update: {
            args: Prisma.FieldCatalogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload>
          }
          deleteMany: {
            args: Prisma.FieldCatalogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldCatalogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FieldCatalogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload>[]
          }
          upsert: {
            args: Prisma.FieldCatalogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldCatalogPayload>
          }
          aggregate: {
            args: Prisma.FieldCatalogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFieldCatalog>
          }
          groupBy: {
            args: Prisma.FieldCatalogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldCatalogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldCatalogCountArgs<ExtArgs>
            result: $Utils.Optional<FieldCatalogCountAggregateOutputType> | number
          }
        }
      }
      UserFieldSelection: {
        payload: Prisma.$UserFieldSelectionPayload<ExtArgs>
        fields: Prisma.UserFieldSelectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFieldSelectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFieldSelectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload>
          }
          findFirst: {
            args: Prisma.UserFieldSelectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFieldSelectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload>
          }
          findMany: {
            args: Prisma.UserFieldSelectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload>[]
          }
          create: {
            args: Prisma.UserFieldSelectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload>
          }
          createMany: {
            args: Prisma.UserFieldSelectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFieldSelectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload>[]
          }
          delete: {
            args: Prisma.UserFieldSelectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload>
          }
          update: {
            args: Prisma.UserFieldSelectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload>
          }
          deleteMany: {
            args: Prisma.UserFieldSelectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFieldSelectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFieldSelectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload>[]
          }
          upsert: {
            args: Prisma.UserFieldSelectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldSelectionPayload>
          }
          aggregate: {
            args: Prisma.UserFieldSelectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFieldSelection>
          }
          groupBy: {
            args: Prisma.UserFieldSelectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFieldSelectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFieldSelectionCountArgs<ExtArgs>
            result: $Utils.Optional<UserFieldSelectionCountAggregateOutputType> | number
          }
        }
      }
      Idea: {
        payload: Prisma.$IdeaPayload<ExtArgs>
        fields: Prisma.IdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdeaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdeaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          findFirst: {
            args: Prisma.IdeaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdeaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          findMany: {
            args: Prisma.IdeaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>[]
          }
          create: {
            args: Prisma.IdeaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          createMany: {
            args: Prisma.IdeaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdeaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>[]
          }
          delete: {
            args: Prisma.IdeaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          update: {
            args: Prisma.IdeaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          deleteMany: {
            args: Prisma.IdeaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdeaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdeaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>[]
          }
          upsert: {
            args: Prisma.IdeaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          aggregate: {
            args: Prisma.IdeaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdea>
          }
          groupBy: {
            args: Prisma.IdeaGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdeaGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdeaCountArgs<ExtArgs>
            result: $Utils.Optional<IdeaCountAggregateOutputType> | number
          }
        }
      }
      IdeaChunkEmbedding: {
        payload: Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>
        fields: Prisma.IdeaChunkEmbeddingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdeaChunkEmbeddingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdeaChunkEmbeddingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload>
          }
          findFirst: {
            args: Prisma.IdeaChunkEmbeddingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdeaChunkEmbeddingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload>
          }
          findMany: {
            args: Prisma.IdeaChunkEmbeddingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload>[]
          }
          create: {
            args: Prisma.IdeaChunkEmbeddingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload>
          }
          createMany: {
            args: Prisma.IdeaChunkEmbeddingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdeaChunkEmbeddingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload>[]
          }
          delete: {
            args: Prisma.IdeaChunkEmbeddingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload>
          }
          update: {
            args: Prisma.IdeaChunkEmbeddingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload>
          }
          deleteMany: {
            args: Prisma.IdeaChunkEmbeddingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdeaChunkEmbeddingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdeaChunkEmbeddingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload>[]
          }
          upsert: {
            args: Prisma.IdeaChunkEmbeddingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChunkEmbeddingPayload>
          }
          aggregate: {
            args: Prisma.IdeaChunkEmbeddingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdeaChunkEmbedding>
          }
          groupBy: {
            args: Prisma.IdeaChunkEmbeddingGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdeaChunkEmbeddingGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdeaChunkEmbeddingCountArgs<ExtArgs>
            result: $Utils.Optional<IdeaChunkEmbeddingCountAggregateOutputType> | number
          }
        }
      }
      IdeaStack: {
        payload: Prisma.$IdeaStackPayload<ExtArgs>
        fields: Prisma.IdeaStackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdeaStackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdeaStackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload>
          }
          findFirst: {
            args: Prisma.IdeaStackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdeaStackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload>
          }
          findMany: {
            args: Prisma.IdeaStackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload>[]
          }
          create: {
            args: Prisma.IdeaStackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload>
          }
          createMany: {
            args: Prisma.IdeaStackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdeaStackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload>[]
          }
          delete: {
            args: Prisma.IdeaStackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload>
          }
          update: {
            args: Prisma.IdeaStackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload>
          }
          deleteMany: {
            args: Prisma.IdeaStackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdeaStackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdeaStackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload>[]
          }
          upsert: {
            args: Prisma.IdeaStackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackPayload>
          }
          aggregate: {
            args: Prisma.IdeaStackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdeaStack>
          }
          groupBy: {
            args: Prisma.IdeaStackGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdeaStackGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdeaStackCountArgs<ExtArgs>
            result: $Utils.Optional<IdeaStackCountAggregateOutputType> | number
          }
        }
      }
      IdeaStackItem: {
        payload: Prisma.$IdeaStackItemPayload<ExtArgs>
        fields: Prisma.IdeaStackItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdeaStackItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdeaStackItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload>
          }
          findFirst: {
            args: Prisma.IdeaStackItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdeaStackItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload>
          }
          findMany: {
            args: Prisma.IdeaStackItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload>[]
          }
          create: {
            args: Prisma.IdeaStackItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload>
          }
          createMany: {
            args: Prisma.IdeaStackItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdeaStackItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload>[]
          }
          delete: {
            args: Prisma.IdeaStackItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload>
          }
          update: {
            args: Prisma.IdeaStackItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload>
          }
          deleteMany: {
            args: Prisma.IdeaStackItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdeaStackItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdeaStackItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload>[]
          }
          upsert: {
            args: Prisma.IdeaStackItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaStackItemPayload>
          }
          aggregate: {
            args: Prisma.IdeaStackItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdeaStackItem>
          }
          groupBy: {
            args: Prisma.IdeaStackItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdeaStackItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdeaStackItemCountArgs<ExtArgs>
            result: $Utils.Optional<IdeaStackItemCountAggregateOutputType> | number
          }
        }
      }
      SwipeEvent: {
        payload: Prisma.$SwipeEventPayload<ExtArgs>
        fields: Prisma.SwipeEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwipeEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwipeEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          findFirst: {
            args: Prisma.SwipeEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwipeEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          findMany: {
            args: Prisma.SwipeEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>[]
          }
          create: {
            args: Prisma.SwipeEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          createMany: {
            args: Prisma.SwipeEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SwipeEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>[]
          }
          delete: {
            args: Prisma.SwipeEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          update: {
            args: Prisma.SwipeEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          deleteMany: {
            args: Prisma.SwipeEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwipeEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SwipeEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>[]
          }
          upsert: {
            args: Prisma.SwipeEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          aggregate: {
            args: Prisma.SwipeEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwipeEvent>
          }
          groupBy: {
            args: Prisma.SwipeEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwipeEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SwipeEventCountArgs<ExtArgs>
            result: $Utils.Optional<SwipeEventCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      PreferenceUpdateLog: {
        payload: Prisma.$PreferenceUpdateLogPayload<ExtArgs>
        fields: Prisma.PreferenceUpdateLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferenceUpdateLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferenceUpdateLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload>
          }
          findFirst: {
            args: Prisma.PreferenceUpdateLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferenceUpdateLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload>
          }
          findMany: {
            args: Prisma.PreferenceUpdateLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload>[]
          }
          create: {
            args: Prisma.PreferenceUpdateLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload>
          }
          createMany: {
            args: Prisma.PreferenceUpdateLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferenceUpdateLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload>[]
          }
          delete: {
            args: Prisma.PreferenceUpdateLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload>
          }
          update: {
            args: Prisma.PreferenceUpdateLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload>
          }
          deleteMany: {
            args: Prisma.PreferenceUpdateLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferenceUpdateLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferenceUpdateLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload>[]
          }
          upsert: {
            args: Prisma.PreferenceUpdateLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferenceUpdateLogPayload>
          }
          aggregate: {
            args: Prisma.PreferenceUpdateLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreferenceUpdateLog>
          }
          groupBy: {
            args: Prisma.PreferenceUpdateLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferenceUpdateLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferenceUpdateLogCountArgs<ExtArgs>
            result: $Utils.Optional<PreferenceUpdateLogCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    user?: UserOmit
    fieldCatalog?: FieldCatalogOmit
    userFieldSelection?: UserFieldSelectionOmit
    idea?: IdeaOmit
    ideaChunkEmbedding?: IdeaChunkEmbeddingOmit
    ideaStack?: IdeaStackOmit
    ideaStackItem?: IdeaStackItemOmit
    swipeEvent?: SwipeEventOmit
    favorite?: FavoriteOmit
    preferenceUpdateLog?: PreferenceUpdateLogOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    posts: number
    fieldSelections: number
    stacks: number
    swipeEvents: number
    favorites: number
    preferenceLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    fieldSelections?: boolean | UserCountOutputTypeCountFieldSelectionsArgs
    stacks?: boolean | UserCountOutputTypeCountStacksArgs
    swipeEvents?: boolean | UserCountOutputTypeCountSwipeEventsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    preferenceLogs?: boolean | UserCountOutputTypeCountPreferenceLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFieldSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFieldSelectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaStackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSwipeEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreferenceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferenceUpdateLogWhereInput
  }


  /**
   * Count Type FieldCatalogCountOutputType
   */

  export type FieldCatalogCountOutputType = {
    userSelections: number
    ideas: number
  }

  export type FieldCatalogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSelections?: boolean | FieldCatalogCountOutputTypeCountUserSelectionsArgs
    ideas?: boolean | FieldCatalogCountOutputTypeCountIdeasArgs
  }

  // Custom InputTypes
  /**
   * FieldCatalogCountOutputType without action
   */
  export type FieldCatalogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalogCountOutputType
     */
    select?: FieldCatalogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FieldCatalogCountOutputType without action
   */
  export type FieldCatalogCountOutputTypeCountUserSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFieldSelectionWhereInput
  }

  /**
   * FieldCatalogCountOutputType without action
   */
  export type FieldCatalogCountOutputTypeCountIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaWhereInput
  }


  /**
   * Count Type IdeaCountOutputType
   */

  export type IdeaCountOutputType = {
    chunks: number
    stackItems: number
    swipeEvents: number
    favorites: number
  }

  export type IdeaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | IdeaCountOutputTypeCountChunksArgs
    stackItems?: boolean | IdeaCountOutputTypeCountStackItemsArgs
    swipeEvents?: boolean | IdeaCountOutputTypeCountSwipeEventsArgs
    favorites?: boolean | IdeaCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * IdeaCountOutputType without action
   */
  export type IdeaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaCountOutputType
     */
    select?: IdeaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IdeaCountOutputType without action
   */
  export type IdeaCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaChunkEmbeddingWhereInput
  }

  /**
   * IdeaCountOutputType without action
   */
  export type IdeaCountOutputTypeCountStackItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaStackItemWhereInput
  }

  /**
   * IdeaCountOutputType without action
   */
  export type IdeaCountOutputTypeCountSwipeEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeEventWhereInput
  }

  /**
   * IdeaCountOutputType without action
   */
  export type IdeaCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type IdeaStackCountOutputType
   */

  export type IdeaStackCountOutputType = {
    items: number
    swipeEvents: number
  }

  export type IdeaStackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | IdeaStackCountOutputTypeCountItemsArgs
    swipeEvents?: boolean | IdeaStackCountOutputTypeCountSwipeEventsArgs
  }

  // Custom InputTypes
  /**
   * IdeaStackCountOutputType without action
   */
  export type IdeaStackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackCountOutputType
     */
    select?: IdeaStackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IdeaStackCountOutputType without action
   */
  export type IdeaStackCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaStackItemWhereInput
  }

  /**
   * IdeaStackCountOutputType without action
   */
  export type IdeaStackCountOutputTypeCountSwipeEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    onboardingCompleted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    onboardingCompleted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    onboardingCompleted: number
    preferenceVector: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    onboardingCompleted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    onboardingCompleted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    onboardingCompleted?: true
    preferenceVector?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    onboardingCompleted: boolean
    preferenceVector: JsonValue | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    onboardingCompleted?: boolean
    preferenceVector?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    fieldSelections?: boolean | User$fieldSelectionsArgs<ExtArgs>
    stacks?: boolean | User$stacksArgs<ExtArgs>
    swipeEvents?: boolean | User$swipeEventsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    preferenceLogs?: boolean | User$preferenceLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    onboardingCompleted?: boolean
    preferenceVector?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    onboardingCompleted?: boolean
    preferenceVector?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    onboardingCompleted?: boolean
    preferenceVector?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "onboardingCompleted" | "preferenceVector", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    fieldSelections?: boolean | User$fieldSelectionsArgs<ExtArgs>
    stacks?: boolean | User$stacksArgs<ExtArgs>
    swipeEvents?: boolean | User$swipeEventsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    preferenceLogs?: boolean | User$preferenceLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      fieldSelections: Prisma.$UserFieldSelectionPayload<ExtArgs>[]
      stacks: Prisma.$IdeaStackPayload<ExtArgs>[]
      swipeEvents: Prisma.$SwipeEventPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      preferenceLogs: Prisma.$PreferenceUpdateLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      onboardingCompleted: boolean
      preferenceVector: Prisma.JsonValue | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fieldSelections<T extends User$fieldSelectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$fieldSelectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stacks<T extends User$stacksArgs<ExtArgs> = {}>(args?: Subset<T, User$stacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swipeEvents<T extends User$swipeEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$swipeEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferenceLogs<T extends User$preferenceLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$preferenceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly onboardingCompleted: FieldRef<"User", 'Boolean'>
    readonly preferenceVector: FieldRef<"User", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.fieldSelections
   */
  export type User$fieldSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    where?: UserFieldSelectionWhereInput
    orderBy?: UserFieldSelectionOrderByWithRelationInput | UserFieldSelectionOrderByWithRelationInput[]
    cursor?: UserFieldSelectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFieldSelectionScalarFieldEnum | UserFieldSelectionScalarFieldEnum[]
  }

  /**
   * User.stacks
   */
  export type User$stacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    where?: IdeaStackWhereInput
    orderBy?: IdeaStackOrderByWithRelationInput | IdeaStackOrderByWithRelationInput[]
    cursor?: IdeaStackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaStackScalarFieldEnum | IdeaStackScalarFieldEnum[]
  }

  /**
   * User.swipeEvents
   */
  export type User$swipeEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    where?: SwipeEventWhereInput
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    cursor?: SwipeEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwipeEventScalarFieldEnum | SwipeEventScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.preferenceLogs
   */
  export type User$preferenceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
    where?: PreferenceUpdateLogWhereInput
    orderBy?: PreferenceUpdateLogOrderByWithRelationInput | PreferenceUpdateLogOrderByWithRelationInput[]
    cursor?: PreferenceUpdateLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreferenceUpdateLogScalarFieldEnum | PreferenceUpdateLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FieldCatalog
   */

  export type AggregateFieldCatalog = {
    _count: FieldCatalogCountAggregateOutputType | null
    _min: FieldCatalogMinAggregateOutputType | null
    _max: FieldCatalogMaxAggregateOutputType | null
  }

  export type FieldCatalogMinAggregateOutputType = {
    id: string | null
    slug: string | null
    label: string | null
    isCustom: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FieldCatalogMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    label: string | null
    isCustom: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FieldCatalogCountAggregateOutputType = {
    id: number
    slug: number
    label: number
    isCustom: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FieldCatalogMinAggregateInputType = {
    id?: true
    slug?: true
    label?: true
    isCustom?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FieldCatalogMaxAggregateInputType = {
    id?: true
    slug?: true
    label?: true
    isCustom?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FieldCatalogCountAggregateInputType = {
    id?: true
    slug?: true
    label?: true
    isCustom?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FieldCatalogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldCatalog to aggregate.
     */
    where?: FieldCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldCatalogs to fetch.
     */
    orderBy?: FieldCatalogOrderByWithRelationInput | FieldCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FieldCatalogs
    **/
    _count?: true | FieldCatalogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldCatalogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldCatalogMaxAggregateInputType
  }

  export type GetFieldCatalogAggregateType<T extends FieldCatalogAggregateArgs> = {
        [P in keyof T & keyof AggregateFieldCatalog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFieldCatalog[P]>
      : GetScalarType<T[P], AggregateFieldCatalog[P]>
  }




  export type FieldCatalogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldCatalogWhereInput
    orderBy?: FieldCatalogOrderByWithAggregationInput | FieldCatalogOrderByWithAggregationInput[]
    by: FieldCatalogScalarFieldEnum[] | FieldCatalogScalarFieldEnum
    having?: FieldCatalogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldCatalogCountAggregateInputType | true
    _min?: FieldCatalogMinAggregateInputType
    _max?: FieldCatalogMaxAggregateInputType
  }

  export type FieldCatalogGroupByOutputType = {
    id: string
    slug: string
    label: string
    isCustom: boolean
    createdAt: Date
    updatedAt: Date
    _count: FieldCatalogCountAggregateOutputType | null
    _min: FieldCatalogMinAggregateOutputType | null
    _max: FieldCatalogMaxAggregateOutputType | null
  }

  type GetFieldCatalogGroupByPayload<T extends FieldCatalogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldCatalogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldCatalogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldCatalogGroupByOutputType[P]>
            : GetScalarType<T[P], FieldCatalogGroupByOutputType[P]>
        }
      >
    >


  export type FieldCatalogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    label?: boolean
    isCustom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSelections?: boolean | FieldCatalog$userSelectionsArgs<ExtArgs>
    ideas?: boolean | FieldCatalog$ideasArgs<ExtArgs>
    _count?: boolean | FieldCatalogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldCatalog"]>

  export type FieldCatalogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    label?: boolean
    isCustom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fieldCatalog"]>

  export type FieldCatalogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    label?: boolean
    isCustom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fieldCatalog"]>

  export type FieldCatalogSelectScalar = {
    id?: boolean
    slug?: boolean
    label?: boolean
    isCustom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FieldCatalogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "label" | "isCustom" | "createdAt" | "updatedAt", ExtArgs["result"]["fieldCatalog"]>
  export type FieldCatalogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSelections?: boolean | FieldCatalog$userSelectionsArgs<ExtArgs>
    ideas?: boolean | FieldCatalog$ideasArgs<ExtArgs>
    _count?: boolean | FieldCatalogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FieldCatalogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FieldCatalogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FieldCatalogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FieldCatalog"
    objects: {
      userSelections: Prisma.$UserFieldSelectionPayload<ExtArgs>[]
      ideas: Prisma.$IdeaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      label: string
      isCustom: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fieldCatalog"]>
    composites: {}
  }

  type FieldCatalogGetPayload<S extends boolean | null | undefined | FieldCatalogDefaultArgs> = $Result.GetResult<Prisma.$FieldCatalogPayload, S>

  type FieldCatalogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldCatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldCatalogCountAggregateInputType | true
    }

  export interface FieldCatalogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FieldCatalog'], meta: { name: 'FieldCatalog' } }
    /**
     * Find zero or one FieldCatalog that matches the filter.
     * @param {FieldCatalogFindUniqueArgs} args - Arguments to find a FieldCatalog
     * @example
     * // Get one FieldCatalog
     * const fieldCatalog = await prisma.fieldCatalog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldCatalogFindUniqueArgs>(args: SelectSubset<T, FieldCatalogFindUniqueArgs<ExtArgs>>): Prisma__FieldCatalogClient<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FieldCatalog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldCatalogFindUniqueOrThrowArgs} args - Arguments to find a FieldCatalog
     * @example
     * // Get one FieldCatalog
     * const fieldCatalog = await prisma.fieldCatalog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldCatalogFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldCatalogClient<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldCatalog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCatalogFindFirstArgs} args - Arguments to find a FieldCatalog
     * @example
     * // Get one FieldCatalog
     * const fieldCatalog = await prisma.fieldCatalog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldCatalogFindFirstArgs>(args?: SelectSubset<T, FieldCatalogFindFirstArgs<ExtArgs>>): Prisma__FieldCatalogClient<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldCatalog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCatalogFindFirstOrThrowArgs} args - Arguments to find a FieldCatalog
     * @example
     * // Get one FieldCatalog
     * const fieldCatalog = await prisma.fieldCatalog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldCatalogFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldCatalogClient<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FieldCatalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCatalogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FieldCatalogs
     * const fieldCatalogs = await prisma.fieldCatalog.findMany()
     * 
     * // Get first 10 FieldCatalogs
     * const fieldCatalogs = await prisma.fieldCatalog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldCatalogWithIdOnly = await prisma.fieldCatalog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FieldCatalogFindManyArgs>(args?: SelectSubset<T, FieldCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FieldCatalog.
     * @param {FieldCatalogCreateArgs} args - Arguments to create a FieldCatalog.
     * @example
     * // Create one FieldCatalog
     * const FieldCatalog = await prisma.fieldCatalog.create({
     *   data: {
     *     // ... data to create a FieldCatalog
     *   }
     * })
     * 
     */
    create<T extends FieldCatalogCreateArgs>(args: SelectSubset<T, FieldCatalogCreateArgs<ExtArgs>>): Prisma__FieldCatalogClient<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FieldCatalogs.
     * @param {FieldCatalogCreateManyArgs} args - Arguments to create many FieldCatalogs.
     * @example
     * // Create many FieldCatalogs
     * const fieldCatalog = await prisma.fieldCatalog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldCatalogCreateManyArgs>(args?: SelectSubset<T, FieldCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FieldCatalogs and returns the data saved in the database.
     * @param {FieldCatalogCreateManyAndReturnArgs} args - Arguments to create many FieldCatalogs.
     * @example
     * // Create many FieldCatalogs
     * const fieldCatalog = await prisma.fieldCatalog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FieldCatalogs and only return the `id`
     * const fieldCatalogWithIdOnly = await prisma.fieldCatalog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FieldCatalogCreateManyAndReturnArgs>(args?: SelectSubset<T, FieldCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FieldCatalog.
     * @param {FieldCatalogDeleteArgs} args - Arguments to delete one FieldCatalog.
     * @example
     * // Delete one FieldCatalog
     * const FieldCatalog = await prisma.fieldCatalog.delete({
     *   where: {
     *     // ... filter to delete one FieldCatalog
     *   }
     * })
     * 
     */
    delete<T extends FieldCatalogDeleteArgs>(args: SelectSubset<T, FieldCatalogDeleteArgs<ExtArgs>>): Prisma__FieldCatalogClient<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FieldCatalog.
     * @param {FieldCatalogUpdateArgs} args - Arguments to update one FieldCatalog.
     * @example
     * // Update one FieldCatalog
     * const fieldCatalog = await prisma.fieldCatalog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldCatalogUpdateArgs>(args: SelectSubset<T, FieldCatalogUpdateArgs<ExtArgs>>): Prisma__FieldCatalogClient<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FieldCatalogs.
     * @param {FieldCatalogDeleteManyArgs} args - Arguments to filter FieldCatalogs to delete.
     * @example
     * // Delete a few FieldCatalogs
     * const { count } = await prisma.fieldCatalog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldCatalogDeleteManyArgs>(args?: SelectSubset<T, FieldCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCatalogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FieldCatalogs
     * const fieldCatalog = await prisma.fieldCatalog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldCatalogUpdateManyArgs>(args: SelectSubset<T, FieldCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldCatalogs and returns the data updated in the database.
     * @param {FieldCatalogUpdateManyAndReturnArgs} args - Arguments to update many FieldCatalogs.
     * @example
     * // Update many FieldCatalogs
     * const fieldCatalog = await prisma.fieldCatalog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FieldCatalogs and only return the `id`
     * const fieldCatalogWithIdOnly = await prisma.fieldCatalog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FieldCatalogUpdateManyAndReturnArgs>(args: SelectSubset<T, FieldCatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FieldCatalog.
     * @param {FieldCatalogUpsertArgs} args - Arguments to update or create a FieldCatalog.
     * @example
     * // Update or create a FieldCatalog
     * const fieldCatalog = await prisma.fieldCatalog.upsert({
     *   create: {
     *     // ... data to create a FieldCatalog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FieldCatalog we want to update
     *   }
     * })
     */
    upsert<T extends FieldCatalogUpsertArgs>(args: SelectSubset<T, FieldCatalogUpsertArgs<ExtArgs>>): Prisma__FieldCatalogClient<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FieldCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCatalogCountArgs} args - Arguments to filter FieldCatalogs to count.
     * @example
     * // Count the number of FieldCatalogs
     * const count = await prisma.fieldCatalog.count({
     *   where: {
     *     // ... the filter for the FieldCatalogs we want to count
     *   }
     * })
    **/
    count<T extends FieldCatalogCountArgs>(
      args?: Subset<T, FieldCatalogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldCatalogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FieldCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCatalogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FieldCatalogAggregateArgs>(args: Subset<T, FieldCatalogAggregateArgs>): Prisma.PrismaPromise<GetFieldCatalogAggregateType<T>>

    /**
     * Group by FieldCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCatalogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FieldCatalogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldCatalogGroupByArgs['orderBy'] }
        : { orderBy?: FieldCatalogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FieldCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FieldCatalog model
   */
  readonly fields: FieldCatalogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FieldCatalog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldCatalogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSelections<T extends FieldCatalog$userSelectionsArgs<ExtArgs> = {}>(args?: Subset<T, FieldCatalog$userSelectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ideas<T extends FieldCatalog$ideasArgs<ExtArgs> = {}>(args?: Subset<T, FieldCatalog$ideasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FieldCatalog model
   */
  interface FieldCatalogFieldRefs {
    readonly id: FieldRef<"FieldCatalog", 'String'>
    readonly slug: FieldRef<"FieldCatalog", 'String'>
    readonly label: FieldRef<"FieldCatalog", 'String'>
    readonly isCustom: FieldRef<"FieldCatalog", 'Boolean'>
    readonly createdAt: FieldRef<"FieldCatalog", 'DateTime'>
    readonly updatedAt: FieldRef<"FieldCatalog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FieldCatalog findUnique
   */
  export type FieldCatalogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
    /**
     * Filter, which FieldCatalog to fetch.
     */
    where: FieldCatalogWhereUniqueInput
  }

  /**
   * FieldCatalog findUniqueOrThrow
   */
  export type FieldCatalogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
    /**
     * Filter, which FieldCatalog to fetch.
     */
    where: FieldCatalogWhereUniqueInput
  }

  /**
   * FieldCatalog findFirst
   */
  export type FieldCatalogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
    /**
     * Filter, which FieldCatalog to fetch.
     */
    where?: FieldCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldCatalogs to fetch.
     */
    orderBy?: FieldCatalogOrderByWithRelationInput | FieldCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldCatalogs.
     */
    cursor?: FieldCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldCatalogs.
     */
    distinct?: FieldCatalogScalarFieldEnum | FieldCatalogScalarFieldEnum[]
  }

  /**
   * FieldCatalog findFirstOrThrow
   */
  export type FieldCatalogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
    /**
     * Filter, which FieldCatalog to fetch.
     */
    where?: FieldCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldCatalogs to fetch.
     */
    orderBy?: FieldCatalogOrderByWithRelationInput | FieldCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldCatalogs.
     */
    cursor?: FieldCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldCatalogs.
     */
    distinct?: FieldCatalogScalarFieldEnum | FieldCatalogScalarFieldEnum[]
  }

  /**
   * FieldCatalog findMany
   */
  export type FieldCatalogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
    /**
     * Filter, which FieldCatalogs to fetch.
     */
    where?: FieldCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldCatalogs to fetch.
     */
    orderBy?: FieldCatalogOrderByWithRelationInput | FieldCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FieldCatalogs.
     */
    cursor?: FieldCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldCatalogs.
     */
    skip?: number
    distinct?: FieldCatalogScalarFieldEnum | FieldCatalogScalarFieldEnum[]
  }

  /**
   * FieldCatalog create
   */
  export type FieldCatalogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
    /**
     * The data needed to create a FieldCatalog.
     */
    data: XOR<FieldCatalogCreateInput, FieldCatalogUncheckedCreateInput>
  }

  /**
   * FieldCatalog createMany
   */
  export type FieldCatalogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FieldCatalogs.
     */
    data: FieldCatalogCreateManyInput | FieldCatalogCreateManyInput[]
  }

  /**
   * FieldCatalog createManyAndReturn
   */
  export type FieldCatalogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * The data used to create many FieldCatalogs.
     */
    data: FieldCatalogCreateManyInput | FieldCatalogCreateManyInput[]
  }

  /**
   * FieldCatalog update
   */
  export type FieldCatalogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
    /**
     * The data needed to update a FieldCatalog.
     */
    data: XOR<FieldCatalogUpdateInput, FieldCatalogUncheckedUpdateInput>
    /**
     * Choose, which FieldCatalog to update.
     */
    where: FieldCatalogWhereUniqueInput
  }

  /**
   * FieldCatalog updateMany
   */
  export type FieldCatalogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FieldCatalogs.
     */
    data: XOR<FieldCatalogUpdateManyMutationInput, FieldCatalogUncheckedUpdateManyInput>
    /**
     * Filter which FieldCatalogs to update
     */
    where?: FieldCatalogWhereInput
    /**
     * Limit how many FieldCatalogs to update.
     */
    limit?: number
  }

  /**
   * FieldCatalog updateManyAndReturn
   */
  export type FieldCatalogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * The data used to update FieldCatalogs.
     */
    data: XOR<FieldCatalogUpdateManyMutationInput, FieldCatalogUncheckedUpdateManyInput>
    /**
     * Filter which FieldCatalogs to update
     */
    where?: FieldCatalogWhereInput
    /**
     * Limit how many FieldCatalogs to update.
     */
    limit?: number
  }

  /**
   * FieldCatalog upsert
   */
  export type FieldCatalogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
    /**
     * The filter to search for the FieldCatalog to update in case it exists.
     */
    where: FieldCatalogWhereUniqueInput
    /**
     * In case the FieldCatalog found by the `where` argument doesn't exist, create a new FieldCatalog with this data.
     */
    create: XOR<FieldCatalogCreateInput, FieldCatalogUncheckedCreateInput>
    /**
     * In case the FieldCatalog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldCatalogUpdateInput, FieldCatalogUncheckedUpdateInput>
  }

  /**
   * FieldCatalog delete
   */
  export type FieldCatalogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
    /**
     * Filter which FieldCatalog to delete.
     */
    where: FieldCatalogWhereUniqueInput
  }

  /**
   * FieldCatalog deleteMany
   */
  export type FieldCatalogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldCatalogs to delete
     */
    where?: FieldCatalogWhereInput
    /**
     * Limit how many FieldCatalogs to delete.
     */
    limit?: number
  }

  /**
   * FieldCatalog.userSelections
   */
  export type FieldCatalog$userSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    where?: UserFieldSelectionWhereInput
    orderBy?: UserFieldSelectionOrderByWithRelationInput | UserFieldSelectionOrderByWithRelationInput[]
    cursor?: UserFieldSelectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFieldSelectionScalarFieldEnum | UserFieldSelectionScalarFieldEnum[]
  }

  /**
   * FieldCatalog.ideas
   */
  export type FieldCatalog$ideasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    where?: IdeaWhereInput
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    cursor?: IdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * FieldCatalog without action
   */
  export type FieldCatalogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
  }


  /**
   * Model UserFieldSelection
   */

  export type AggregateUserFieldSelection = {
    _count: UserFieldSelectionCountAggregateOutputType | null
    _min: UserFieldSelectionMinAggregateOutputType | null
    _max: UserFieldSelectionMaxAggregateOutputType | null
  }

  export type UserFieldSelectionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fieldId: string | null
    createdAt: Date | null
  }

  export type UserFieldSelectionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fieldId: string | null
    createdAt: Date | null
  }

  export type UserFieldSelectionCountAggregateOutputType = {
    id: number
    userId: number
    fieldId: number
    createdAt: number
    _all: number
  }


  export type UserFieldSelectionMinAggregateInputType = {
    id?: true
    userId?: true
    fieldId?: true
    createdAt?: true
  }

  export type UserFieldSelectionMaxAggregateInputType = {
    id?: true
    userId?: true
    fieldId?: true
    createdAt?: true
  }

  export type UserFieldSelectionCountAggregateInputType = {
    id?: true
    userId?: true
    fieldId?: true
    createdAt?: true
    _all?: true
  }

  export type UserFieldSelectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFieldSelection to aggregate.
     */
    where?: UserFieldSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFieldSelections to fetch.
     */
    orderBy?: UserFieldSelectionOrderByWithRelationInput | UserFieldSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFieldSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFieldSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFieldSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFieldSelections
    **/
    _count?: true | UserFieldSelectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFieldSelectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFieldSelectionMaxAggregateInputType
  }

  export type GetUserFieldSelectionAggregateType<T extends UserFieldSelectionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFieldSelection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFieldSelection[P]>
      : GetScalarType<T[P], AggregateUserFieldSelection[P]>
  }




  export type UserFieldSelectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFieldSelectionWhereInput
    orderBy?: UserFieldSelectionOrderByWithAggregationInput | UserFieldSelectionOrderByWithAggregationInput[]
    by: UserFieldSelectionScalarFieldEnum[] | UserFieldSelectionScalarFieldEnum
    having?: UserFieldSelectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFieldSelectionCountAggregateInputType | true
    _min?: UserFieldSelectionMinAggregateInputType
    _max?: UserFieldSelectionMaxAggregateInputType
  }

  export type UserFieldSelectionGroupByOutputType = {
    id: string
    userId: string
    fieldId: string
    createdAt: Date
    _count: UserFieldSelectionCountAggregateOutputType | null
    _min: UserFieldSelectionMinAggregateOutputType | null
    _max: UserFieldSelectionMaxAggregateOutputType | null
  }

  type GetUserFieldSelectionGroupByPayload<T extends UserFieldSelectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFieldSelectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFieldSelectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFieldSelectionGroupByOutputType[P]>
            : GetScalarType<T[P], UserFieldSelectionGroupByOutputType[P]>
        }
      >
    >


  export type UserFieldSelectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fieldId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldCatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFieldSelection"]>

  export type UserFieldSelectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fieldId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldCatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFieldSelection"]>

  export type UserFieldSelectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fieldId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldCatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFieldSelection"]>

  export type UserFieldSelectionSelectScalar = {
    id?: boolean
    userId?: boolean
    fieldId?: boolean
    createdAt?: boolean
  }

  export type UserFieldSelectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fieldId" | "createdAt", ExtArgs["result"]["userFieldSelection"]>
  export type UserFieldSelectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldCatalogDefaultArgs<ExtArgs>
  }
  export type UserFieldSelectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldCatalogDefaultArgs<ExtArgs>
  }
  export type UserFieldSelectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldCatalogDefaultArgs<ExtArgs>
  }

  export type $UserFieldSelectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFieldSelection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      field: Prisma.$FieldCatalogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fieldId: string
      createdAt: Date
    }, ExtArgs["result"]["userFieldSelection"]>
    composites: {}
  }

  type UserFieldSelectionGetPayload<S extends boolean | null | undefined | UserFieldSelectionDefaultArgs> = $Result.GetResult<Prisma.$UserFieldSelectionPayload, S>

  type UserFieldSelectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFieldSelectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFieldSelectionCountAggregateInputType | true
    }

  export interface UserFieldSelectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFieldSelection'], meta: { name: 'UserFieldSelection' } }
    /**
     * Find zero or one UserFieldSelection that matches the filter.
     * @param {UserFieldSelectionFindUniqueArgs} args - Arguments to find a UserFieldSelection
     * @example
     * // Get one UserFieldSelection
     * const userFieldSelection = await prisma.userFieldSelection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFieldSelectionFindUniqueArgs>(args: SelectSubset<T, UserFieldSelectionFindUniqueArgs<ExtArgs>>): Prisma__UserFieldSelectionClient<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFieldSelection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFieldSelectionFindUniqueOrThrowArgs} args - Arguments to find a UserFieldSelection
     * @example
     * // Get one UserFieldSelection
     * const userFieldSelection = await prisma.userFieldSelection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFieldSelectionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFieldSelectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFieldSelectionClient<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFieldSelection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldSelectionFindFirstArgs} args - Arguments to find a UserFieldSelection
     * @example
     * // Get one UserFieldSelection
     * const userFieldSelection = await prisma.userFieldSelection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFieldSelectionFindFirstArgs>(args?: SelectSubset<T, UserFieldSelectionFindFirstArgs<ExtArgs>>): Prisma__UserFieldSelectionClient<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFieldSelection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldSelectionFindFirstOrThrowArgs} args - Arguments to find a UserFieldSelection
     * @example
     * // Get one UserFieldSelection
     * const userFieldSelection = await prisma.userFieldSelection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFieldSelectionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFieldSelectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFieldSelectionClient<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFieldSelections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldSelectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFieldSelections
     * const userFieldSelections = await prisma.userFieldSelection.findMany()
     * 
     * // Get first 10 UserFieldSelections
     * const userFieldSelections = await prisma.userFieldSelection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFieldSelectionWithIdOnly = await prisma.userFieldSelection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFieldSelectionFindManyArgs>(args?: SelectSubset<T, UserFieldSelectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFieldSelection.
     * @param {UserFieldSelectionCreateArgs} args - Arguments to create a UserFieldSelection.
     * @example
     * // Create one UserFieldSelection
     * const UserFieldSelection = await prisma.userFieldSelection.create({
     *   data: {
     *     // ... data to create a UserFieldSelection
     *   }
     * })
     * 
     */
    create<T extends UserFieldSelectionCreateArgs>(args: SelectSubset<T, UserFieldSelectionCreateArgs<ExtArgs>>): Prisma__UserFieldSelectionClient<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFieldSelections.
     * @param {UserFieldSelectionCreateManyArgs} args - Arguments to create many UserFieldSelections.
     * @example
     * // Create many UserFieldSelections
     * const userFieldSelection = await prisma.userFieldSelection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFieldSelectionCreateManyArgs>(args?: SelectSubset<T, UserFieldSelectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFieldSelections and returns the data saved in the database.
     * @param {UserFieldSelectionCreateManyAndReturnArgs} args - Arguments to create many UserFieldSelections.
     * @example
     * // Create many UserFieldSelections
     * const userFieldSelection = await prisma.userFieldSelection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFieldSelections and only return the `id`
     * const userFieldSelectionWithIdOnly = await prisma.userFieldSelection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFieldSelectionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFieldSelectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFieldSelection.
     * @param {UserFieldSelectionDeleteArgs} args - Arguments to delete one UserFieldSelection.
     * @example
     * // Delete one UserFieldSelection
     * const UserFieldSelection = await prisma.userFieldSelection.delete({
     *   where: {
     *     // ... filter to delete one UserFieldSelection
     *   }
     * })
     * 
     */
    delete<T extends UserFieldSelectionDeleteArgs>(args: SelectSubset<T, UserFieldSelectionDeleteArgs<ExtArgs>>): Prisma__UserFieldSelectionClient<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFieldSelection.
     * @param {UserFieldSelectionUpdateArgs} args - Arguments to update one UserFieldSelection.
     * @example
     * // Update one UserFieldSelection
     * const userFieldSelection = await prisma.userFieldSelection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFieldSelectionUpdateArgs>(args: SelectSubset<T, UserFieldSelectionUpdateArgs<ExtArgs>>): Prisma__UserFieldSelectionClient<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFieldSelections.
     * @param {UserFieldSelectionDeleteManyArgs} args - Arguments to filter UserFieldSelections to delete.
     * @example
     * // Delete a few UserFieldSelections
     * const { count } = await prisma.userFieldSelection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFieldSelectionDeleteManyArgs>(args?: SelectSubset<T, UserFieldSelectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFieldSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldSelectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFieldSelections
     * const userFieldSelection = await prisma.userFieldSelection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFieldSelectionUpdateManyArgs>(args: SelectSubset<T, UserFieldSelectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFieldSelections and returns the data updated in the database.
     * @param {UserFieldSelectionUpdateManyAndReturnArgs} args - Arguments to update many UserFieldSelections.
     * @example
     * // Update many UserFieldSelections
     * const userFieldSelection = await prisma.userFieldSelection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFieldSelections and only return the `id`
     * const userFieldSelectionWithIdOnly = await prisma.userFieldSelection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFieldSelectionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFieldSelectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFieldSelection.
     * @param {UserFieldSelectionUpsertArgs} args - Arguments to update or create a UserFieldSelection.
     * @example
     * // Update or create a UserFieldSelection
     * const userFieldSelection = await prisma.userFieldSelection.upsert({
     *   create: {
     *     // ... data to create a UserFieldSelection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFieldSelection we want to update
     *   }
     * })
     */
    upsert<T extends UserFieldSelectionUpsertArgs>(args: SelectSubset<T, UserFieldSelectionUpsertArgs<ExtArgs>>): Prisma__UserFieldSelectionClient<$Result.GetResult<Prisma.$UserFieldSelectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFieldSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldSelectionCountArgs} args - Arguments to filter UserFieldSelections to count.
     * @example
     * // Count the number of UserFieldSelections
     * const count = await prisma.userFieldSelection.count({
     *   where: {
     *     // ... the filter for the UserFieldSelections we want to count
     *   }
     * })
    **/
    count<T extends UserFieldSelectionCountArgs>(
      args?: Subset<T, UserFieldSelectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFieldSelectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFieldSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldSelectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFieldSelectionAggregateArgs>(args: Subset<T, UserFieldSelectionAggregateArgs>): Prisma.PrismaPromise<GetUserFieldSelectionAggregateType<T>>

    /**
     * Group by UserFieldSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldSelectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFieldSelectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFieldSelectionGroupByArgs['orderBy'] }
        : { orderBy?: UserFieldSelectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFieldSelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFieldSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFieldSelection model
   */
  readonly fields: UserFieldSelectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFieldSelection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFieldSelectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends FieldCatalogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldCatalogDefaultArgs<ExtArgs>>): Prisma__FieldCatalogClient<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFieldSelection model
   */
  interface UserFieldSelectionFieldRefs {
    readonly id: FieldRef<"UserFieldSelection", 'String'>
    readonly userId: FieldRef<"UserFieldSelection", 'String'>
    readonly fieldId: FieldRef<"UserFieldSelection", 'String'>
    readonly createdAt: FieldRef<"UserFieldSelection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFieldSelection findUnique
   */
  export type UserFieldSelectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    /**
     * Filter, which UserFieldSelection to fetch.
     */
    where: UserFieldSelectionWhereUniqueInput
  }

  /**
   * UserFieldSelection findUniqueOrThrow
   */
  export type UserFieldSelectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    /**
     * Filter, which UserFieldSelection to fetch.
     */
    where: UserFieldSelectionWhereUniqueInput
  }

  /**
   * UserFieldSelection findFirst
   */
  export type UserFieldSelectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    /**
     * Filter, which UserFieldSelection to fetch.
     */
    where?: UserFieldSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFieldSelections to fetch.
     */
    orderBy?: UserFieldSelectionOrderByWithRelationInput | UserFieldSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFieldSelections.
     */
    cursor?: UserFieldSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFieldSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFieldSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFieldSelections.
     */
    distinct?: UserFieldSelectionScalarFieldEnum | UserFieldSelectionScalarFieldEnum[]
  }

  /**
   * UserFieldSelection findFirstOrThrow
   */
  export type UserFieldSelectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    /**
     * Filter, which UserFieldSelection to fetch.
     */
    where?: UserFieldSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFieldSelections to fetch.
     */
    orderBy?: UserFieldSelectionOrderByWithRelationInput | UserFieldSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFieldSelections.
     */
    cursor?: UserFieldSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFieldSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFieldSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFieldSelections.
     */
    distinct?: UserFieldSelectionScalarFieldEnum | UserFieldSelectionScalarFieldEnum[]
  }

  /**
   * UserFieldSelection findMany
   */
  export type UserFieldSelectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    /**
     * Filter, which UserFieldSelections to fetch.
     */
    where?: UserFieldSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFieldSelections to fetch.
     */
    orderBy?: UserFieldSelectionOrderByWithRelationInput | UserFieldSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFieldSelections.
     */
    cursor?: UserFieldSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFieldSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFieldSelections.
     */
    skip?: number
    distinct?: UserFieldSelectionScalarFieldEnum | UserFieldSelectionScalarFieldEnum[]
  }

  /**
   * UserFieldSelection create
   */
  export type UserFieldSelectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFieldSelection.
     */
    data: XOR<UserFieldSelectionCreateInput, UserFieldSelectionUncheckedCreateInput>
  }

  /**
   * UserFieldSelection createMany
   */
  export type UserFieldSelectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFieldSelections.
     */
    data: UserFieldSelectionCreateManyInput | UserFieldSelectionCreateManyInput[]
  }

  /**
   * UserFieldSelection createManyAndReturn
   */
  export type UserFieldSelectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * The data used to create many UserFieldSelections.
     */
    data: UserFieldSelectionCreateManyInput | UserFieldSelectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFieldSelection update
   */
  export type UserFieldSelectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFieldSelection.
     */
    data: XOR<UserFieldSelectionUpdateInput, UserFieldSelectionUncheckedUpdateInput>
    /**
     * Choose, which UserFieldSelection to update.
     */
    where: UserFieldSelectionWhereUniqueInput
  }

  /**
   * UserFieldSelection updateMany
   */
  export type UserFieldSelectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFieldSelections.
     */
    data: XOR<UserFieldSelectionUpdateManyMutationInput, UserFieldSelectionUncheckedUpdateManyInput>
    /**
     * Filter which UserFieldSelections to update
     */
    where?: UserFieldSelectionWhereInput
    /**
     * Limit how many UserFieldSelections to update.
     */
    limit?: number
  }

  /**
   * UserFieldSelection updateManyAndReturn
   */
  export type UserFieldSelectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * The data used to update UserFieldSelections.
     */
    data: XOR<UserFieldSelectionUpdateManyMutationInput, UserFieldSelectionUncheckedUpdateManyInput>
    /**
     * Filter which UserFieldSelections to update
     */
    where?: UserFieldSelectionWhereInput
    /**
     * Limit how many UserFieldSelections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFieldSelection upsert
   */
  export type UserFieldSelectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFieldSelection to update in case it exists.
     */
    where: UserFieldSelectionWhereUniqueInput
    /**
     * In case the UserFieldSelection found by the `where` argument doesn't exist, create a new UserFieldSelection with this data.
     */
    create: XOR<UserFieldSelectionCreateInput, UserFieldSelectionUncheckedCreateInput>
    /**
     * In case the UserFieldSelection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFieldSelectionUpdateInput, UserFieldSelectionUncheckedUpdateInput>
  }

  /**
   * UserFieldSelection delete
   */
  export type UserFieldSelectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
    /**
     * Filter which UserFieldSelection to delete.
     */
    where: UserFieldSelectionWhereUniqueInput
  }

  /**
   * UserFieldSelection deleteMany
   */
  export type UserFieldSelectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFieldSelections to delete
     */
    where?: UserFieldSelectionWhereInput
    /**
     * Limit how many UserFieldSelections to delete.
     */
    limit?: number
  }

  /**
   * UserFieldSelection without action
   */
  export type UserFieldSelectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldSelection
     */
    select?: UserFieldSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldSelection
     */
    omit?: UserFieldSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldSelectionInclude<ExtArgs> | null
  }


  /**
   * Model Idea
   */

  export type AggregateIdea = {
    _count: IdeaCountAggregateOutputType | null
    _min: IdeaMinAggregateOutputType | null
    _max: IdeaMaxAggregateOutputType | null
  }

  export type IdeaMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fieldId: string | null
  }

  export type IdeaMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fieldId: string | null
  }

  export type IdeaCountAggregateOutputType = {
    id: number
    title: number
    description: number
    vector: number
    createdAt: number
    updatedAt: number
    fieldId: number
    _all: number
  }


  export type IdeaMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    fieldId?: true
  }

  export type IdeaMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    fieldId?: true
  }

  export type IdeaCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    vector?: true
    createdAt?: true
    updatedAt?: true
    fieldId?: true
    _all?: true
  }

  export type IdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Idea to aggregate.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ideas
    **/
    _count?: true | IdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdeaMaxAggregateInputType
  }

  export type GetIdeaAggregateType<T extends IdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdea[P]>
      : GetScalarType<T[P], AggregateIdea[P]>
  }




  export type IdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaWhereInput
    orderBy?: IdeaOrderByWithAggregationInput | IdeaOrderByWithAggregationInput[]
    by: IdeaScalarFieldEnum[] | IdeaScalarFieldEnum
    having?: IdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdeaCountAggregateInputType | true
    _min?: IdeaMinAggregateInputType
    _max?: IdeaMaxAggregateInputType
  }

  export type IdeaGroupByOutputType = {
    id: string
    title: string
    description: string
    vector: JsonValue | null
    createdAt: Date
    updatedAt: Date
    fieldId: string | null
    _count: IdeaCountAggregateOutputType | null
    _min: IdeaMinAggregateOutputType | null
    _max: IdeaMaxAggregateOutputType | null
  }

  type GetIdeaGroupByPayload<T extends IdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdeaGroupByOutputType[P]>
            : GetScalarType<T[P], IdeaGroupByOutputType[P]>
        }
      >
    >


  export type IdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    vector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fieldId?: boolean
    field?: boolean | Idea$fieldArgs<ExtArgs>
    chunks?: boolean | Idea$chunksArgs<ExtArgs>
    stackItems?: boolean | Idea$stackItemsArgs<ExtArgs>
    swipeEvents?: boolean | Idea$swipeEventsArgs<ExtArgs>
    favorites?: boolean | Idea$favoritesArgs<ExtArgs>
    _count?: boolean | IdeaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idea"]>

  export type IdeaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    vector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fieldId?: boolean
    field?: boolean | Idea$fieldArgs<ExtArgs>
  }, ExtArgs["result"]["idea"]>

  export type IdeaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    vector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fieldId?: boolean
    field?: boolean | Idea$fieldArgs<ExtArgs>
  }, ExtArgs["result"]["idea"]>

  export type IdeaSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    vector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fieldId?: boolean
  }

  export type IdeaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "vector" | "createdAt" | "updatedAt" | "fieldId", ExtArgs["result"]["idea"]>
  export type IdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | Idea$fieldArgs<ExtArgs>
    chunks?: boolean | Idea$chunksArgs<ExtArgs>
    stackItems?: boolean | Idea$stackItemsArgs<ExtArgs>
    swipeEvents?: boolean | Idea$swipeEventsArgs<ExtArgs>
    favorites?: boolean | Idea$favoritesArgs<ExtArgs>
    _count?: boolean | IdeaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IdeaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | Idea$fieldArgs<ExtArgs>
  }
  export type IdeaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | Idea$fieldArgs<ExtArgs>
  }

  export type $IdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Idea"
    objects: {
      field: Prisma.$FieldCatalogPayload<ExtArgs> | null
      chunks: Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>[]
      stackItems: Prisma.$IdeaStackItemPayload<ExtArgs>[]
      swipeEvents: Prisma.$SwipeEventPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      vector: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      fieldId: string | null
    }, ExtArgs["result"]["idea"]>
    composites: {}
  }

  type IdeaGetPayload<S extends boolean | null | undefined | IdeaDefaultArgs> = $Result.GetResult<Prisma.$IdeaPayload, S>

  type IdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdeaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdeaCountAggregateInputType | true
    }

  export interface IdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Idea'], meta: { name: 'Idea' } }
    /**
     * Find zero or one Idea that matches the filter.
     * @param {IdeaFindUniqueArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdeaFindUniqueArgs>(args: SelectSubset<T, IdeaFindUniqueArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdeaFindUniqueOrThrowArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdeaFindUniqueOrThrowArgs>(args: SelectSubset<T, IdeaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindFirstArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdeaFindFirstArgs>(args?: SelectSubset<T, IdeaFindFirstArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindFirstOrThrowArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdeaFindFirstOrThrowArgs>(args?: SelectSubset<T, IdeaFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ideas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ideas
     * const ideas = await prisma.idea.findMany()
     * 
     * // Get first 10 Ideas
     * const ideas = await prisma.idea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ideaWithIdOnly = await prisma.idea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdeaFindManyArgs>(args?: SelectSubset<T, IdeaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idea.
     * @param {IdeaCreateArgs} args - Arguments to create a Idea.
     * @example
     * // Create one Idea
     * const Idea = await prisma.idea.create({
     *   data: {
     *     // ... data to create a Idea
     *   }
     * })
     * 
     */
    create<T extends IdeaCreateArgs>(args: SelectSubset<T, IdeaCreateArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ideas.
     * @param {IdeaCreateManyArgs} args - Arguments to create many Ideas.
     * @example
     * // Create many Ideas
     * const idea = await prisma.idea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdeaCreateManyArgs>(args?: SelectSubset<T, IdeaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ideas and returns the data saved in the database.
     * @param {IdeaCreateManyAndReturnArgs} args - Arguments to create many Ideas.
     * @example
     * // Create many Ideas
     * const idea = await prisma.idea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ideas and only return the `id`
     * const ideaWithIdOnly = await prisma.idea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdeaCreateManyAndReturnArgs>(args?: SelectSubset<T, IdeaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idea.
     * @param {IdeaDeleteArgs} args - Arguments to delete one Idea.
     * @example
     * // Delete one Idea
     * const Idea = await prisma.idea.delete({
     *   where: {
     *     // ... filter to delete one Idea
     *   }
     * })
     * 
     */
    delete<T extends IdeaDeleteArgs>(args: SelectSubset<T, IdeaDeleteArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idea.
     * @param {IdeaUpdateArgs} args - Arguments to update one Idea.
     * @example
     * // Update one Idea
     * const idea = await prisma.idea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdeaUpdateArgs>(args: SelectSubset<T, IdeaUpdateArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ideas.
     * @param {IdeaDeleteManyArgs} args - Arguments to filter Ideas to delete.
     * @example
     * // Delete a few Ideas
     * const { count } = await prisma.idea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdeaDeleteManyArgs>(args?: SelectSubset<T, IdeaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ideas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ideas
     * const idea = await prisma.idea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdeaUpdateManyArgs>(args: SelectSubset<T, IdeaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ideas and returns the data updated in the database.
     * @param {IdeaUpdateManyAndReturnArgs} args - Arguments to update many Ideas.
     * @example
     * // Update many Ideas
     * const idea = await prisma.idea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ideas and only return the `id`
     * const ideaWithIdOnly = await prisma.idea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdeaUpdateManyAndReturnArgs>(args: SelectSubset<T, IdeaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idea.
     * @param {IdeaUpsertArgs} args - Arguments to update or create a Idea.
     * @example
     * // Update or create a Idea
     * const idea = await prisma.idea.upsert({
     *   create: {
     *     // ... data to create a Idea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idea we want to update
     *   }
     * })
     */
    upsert<T extends IdeaUpsertArgs>(args: SelectSubset<T, IdeaUpsertArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ideas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaCountArgs} args - Arguments to filter Ideas to count.
     * @example
     * // Count the number of Ideas
     * const count = await prisma.idea.count({
     *   where: {
     *     // ... the filter for the Ideas we want to count
     *   }
     * })
    **/
    count<T extends IdeaCountArgs>(
      args?: Subset<T, IdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdeaAggregateArgs>(args: Subset<T, IdeaAggregateArgs>): Prisma.PrismaPromise<GetIdeaAggregateType<T>>

    /**
     * Group by Idea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdeaGroupByArgs['orderBy'] }
        : { orderBy?: IdeaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Idea model
   */
  readonly fields: IdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Idea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends Idea$fieldArgs<ExtArgs> = {}>(args?: Subset<T, Idea$fieldArgs<ExtArgs>>): Prisma__FieldCatalogClient<$Result.GetResult<Prisma.$FieldCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chunks<T extends Idea$chunksArgs<ExtArgs> = {}>(args?: Subset<T, Idea$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stackItems<T extends Idea$stackItemsArgs<ExtArgs> = {}>(args?: Subset<T, Idea$stackItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swipeEvents<T extends Idea$swipeEventsArgs<ExtArgs> = {}>(args?: Subset<T, Idea$swipeEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Idea$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Idea$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Idea model
   */
  interface IdeaFieldRefs {
    readonly id: FieldRef<"Idea", 'String'>
    readonly title: FieldRef<"Idea", 'String'>
    readonly description: FieldRef<"Idea", 'String'>
    readonly vector: FieldRef<"Idea", 'Json'>
    readonly createdAt: FieldRef<"Idea", 'DateTime'>
    readonly updatedAt: FieldRef<"Idea", 'DateTime'>
    readonly fieldId: FieldRef<"Idea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Idea findUnique
   */
  export type IdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea findUniqueOrThrow
   */
  export type IdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea findFirst
   */
  export type IdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ideas.
     */
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea findFirstOrThrow
   */
  export type IdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ideas.
     */
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea findMany
   */
  export type IdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Ideas to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea create
   */
  export type IdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a Idea.
     */
    data: XOR<IdeaCreateInput, IdeaUncheckedCreateInput>
  }

  /**
   * Idea createMany
   */
  export type IdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ideas.
     */
    data: IdeaCreateManyInput | IdeaCreateManyInput[]
  }

  /**
   * Idea createManyAndReturn
   */
  export type IdeaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * The data used to create many Ideas.
     */
    data: IdeaCreateManyInput | IdeaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Idea update
   */
  export type IdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a Idea.
     */
    data: XOR<IdeaUpdateInput, IdeaUncheckedUpdateInput>
    /**
     * Choose, which Idea to update.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea updateMany
   */
  export type IdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ideas.
     */
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyInput>
    /**
     * Filter which Ideas to update
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to update.
     */
    limit?: number
  }

  /**
   * Idea updateManyAndReturn
   */
  export type IdeaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * The data used to update Ideas.
     */
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyInput>
    /**
     * Filter which Ideas to update
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Idea upsert
   */
  export type IdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the Idea to update in case it exists.
     */
    where: IdeaWhereUniqueInput
    /**
     * In case the Idea found by the `where` argument doesn't exist, create a new Idea with this data.
     */
    create: XOR<IdeaCreateInput, IdeaUncheckedCreateInput>
    /**
     * In case the Idea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdeaUpdateInput, IdeaUncheckedUpdateInput>
  }

  /**
   * Idea delete
   */
  export type IdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter which Idea to delete.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea deleteMany
   */
  export type IdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ideas to delete
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to delete.
     */
    limit?: number
  }

  /**
   * Idea.field
   */
  export type Idea$fieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCatalog
     */
    select?: FieldCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldCatalog
     */
    omit?: FieldCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldCatalogInclude<ExtArgs> | null
    where?: FieldCatalogWhereInput
  }

  /**
   * Idea.chunks
   */
  export type Idea$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
    where?: IdeaChunkEmbeddingWhereInput
    orderBy?: IdeaChunkEmbeddingOrderByWithRelationInput | IdeaChunkEmbeddingOrderByWithRelationInput[]
    cursor?: IdeaChunkEmbeddingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaChunkEmbeddingScalarFieldEnum | IdeaChunkEmbeddingScalarFieldEnum[]
  }

  /**
   * Idea.stackItems
   */
  export type Idea$stackItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    where?: IdeaStackItemWhereInput
    orderBy?: IdeaStackItemOrderByWithRelationInput | IdeaStackItemOrderByWithRelationInput[]
    cursor?: IdeaStackItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaStackItemScalarFieldEnum | IdeaStackItemScalarFieldEnum[]
  }

  /**
   * Idea.swipeEvents
   */
  export type Idea$swipeEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    where?: SwipeEventWhereInput
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    cursor?: SwipeEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwipeEventScalarFieldEnum | SwipeEventScalarFieldEnum[]
  }

  /**
   * Idea.favorites
   */
  export type Idea$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Idea without action
   */
  export type IdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
  }


  /**
   * Model IdeaChunkEmbedding
   */

  export type AggregateIdeaChunkEmbedding = {
    _count: IdeaChunkEmbeddingCountAggregateOutputType | null
    _avg: IdeaChunkEmbeddingAvgAggregateOutputType | null
    _sum: IdeaChunkEmbeddingSumAggregateOutputType | null
    _min: IdeaChunkEmbeddingMinAggregateOutputType | null
    _max: IdeaChunkEmbeddingMaxAggregateOutputType | null
  }

  export type IdeaChunkEmbeddingAvgAggregateOutputType = {
    chunkIndex: number | null
  }

  export type IdeaChunkEmbeddingSumAggregateOutputType = {
    chunkIndex: number | null
  }

  export type IdeaChunkEmbeddingMinAggregateOutputType = {
    id: string | null
    ideaId: string | null
    chunkIndex: number | null
    content: string | null
    createdAt: Date | null
  }

  export type IdeaChunkEmbeddingMaxAggregateOutputType = {
    id: string | null
    ideaId: string | null
    chunkIndex: number | null
    content: string | null
    createdAt: Date | null
  }

  export type IdeaChunkEmbeddingCountAggregateOutputType = {
    id: number
    ideaId: number
    chunkIndex: number
    content: number
    vector: number
    createdAt: number
    _all: number
  }


  export type IdeaChunkEmbeddingAvgAggregateInputType = {
    chunkIndex?: true
  }

  export type IdeaChunkEmbeddingSumAggregateInputType = {
    chunkIndex?: true
  }

  export type IdeaChunkEmbeddingMinAggregateInputType = {
    id?: true
    ideaId?: true
    chunkIndex?: true
    content?: true
    createdAt?: true
  }

  export type IdeaChunkEmbeddingMaxAggregateInputType = {
    id?: true
    ideaId?: true
    chunkIndex?: true
    content?: true
    createdAt?: true
  }

  export type IdeaChunkEmbeddingCountAggregateInputType = {
    id?: true
    ideaId?: true
    chunkIndex?: true
    content?: true
    vector?: true
    createdAt?: true
    _all?: true
  }

  export type IdeaChunkEmbeddingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdeaChunkEmbedding to aggregate.
     */
    where?: IdeaChunkEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaChunkEmbeddings to fetch.
     */
    orderBy?: IdeaChunkEmbeddingOrderByWithRelationInput | IdeaChunkEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdeaChunkEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaChunkEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaChunkEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdeaChunkEmbeddings
    **/
    _count?: true | IdeaChunkEmbeddingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdeaChunkEmbeddingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdeaChunkEmbeddingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdeaChunkEmbeddingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdeaChunkEmbeddingMaxAggregateInputType
  }

  export type GetIdeaChunkEmbeddingAggregateType<T extends IdeaChunkEmbeddingAggregateArgs> = {
        [P in keyof T & keyof AggregateIdeaChunkEmbedding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdeaChunkEmbedding[P]>
      : GetScalarType<T[P], AggregateIdeaChunkEmbedding[P]>
  }




  export type IdeaChunkEmbeddingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaChunkEmbeddingWhereInput
    orderBy?: IdeaChunkEmbeddingOrderByWithAggregationInput | IdeaChunkEmbeddingOrderByWithAggregationInput[]
    by: IdeaChunkEmbeddingScalarFieldEnum[] | IdeaChunkEmbeddingScalarFieldEnum
    having?: IdeaChunkEmbeddingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdeaChunkEmbeddingCountAggregateInputType | true
    _avg?: IdeaChunkEmbeddingAvgAggregateInputType
    _sum?: IdeaChunkEmbeddingSumAggregateInputType
    _min?: IdeaChunkEmbeddingMinAggregateInputType
    _max?: IdeaChunkEmbeddingMaxAggregateInputType
  }

  export type IdeaChunkEmbeddingGroupByOutputType = {
    id: string
    ideaId: string
    chunkIndex: number
    content: string
    vector: JsonValue
    createdAt: Date
    _count: IdeaChunkEmbeddingCountAggregateOutputType | null
    _avg: IdeaChunkEmbeddingAvgAggregateOutputType | null
    _sum: IdeaChunkEmbeddingSumAggregateOutputType | null
    _min: IdeaChunkEmbeddingMinAggregateOutputType | null
    _max: IdeaChunkEmbeddingMaxAggregateOutputType | null
  }

  type GetIdeaChunkEmbeddingGroupByPayload<T extends IdeaChunkEmbeddingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdeaChunkEmbeddingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdeaChunkEmbeddingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdeaChunkEmbeddingGroupByOutputType[P]>
            : GetScalarType<T[P], IdeaChunkEmbeddingGroupByOutputType[P]>
        }
      >
    >


  export type IdeaChunkEmbeddingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ideaId?: boolean
    chunkIndex?: boolean
    content?: boolean
    vector?: boolean
    createdAt?: boolean
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaChunkEmbedding"]>

  export type IdeaChunkEmbeddingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ideaId?: boolean
    chunkIndex?: boolean
    content?: boolean
    vector?: boolean
    createdAt?: boolean
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaChunkEmbedding"]>

  export type IdeaChunkEmbeddingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ideaId?: boolean
    chunkIndex?: boolean
    content?: boolean
    vector?: boolean
    createdAt?: boolean
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaChunkEmbedding"]>

  export type IdeaChunkEmbeddingSelectScalar = {
    id?: boolean
    ideaId?: boolean
    chunkIndex?: boolean
    content?: boolean
    vector?: boolean
    createdAt?: boolean
  }

  export type IdeaChunkEmbeddingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ideaId" | "chunkIndex" | "content" | "vector" | "createdAt", ExtArgs["result"]["ideaChunkEmbedding"]>
  export type IdeaChunkEmbeddingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }
  export type IdeaChunkEmbeddingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }
  export type IdeaChunkEmbeddingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }

  export type $IdeaChunkEmbeddingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdeaChunkEmbedding"
    objects: {
      idea: Prisma.$IdeaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ideaId: string
      chunkIndex: number
      content: string
      vector: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["ideaChunkEmbedding"]>
    composites: {}
  }

  type IdeaChunkEmbeddingGetPayload<S extends boolean | null | undefined | IdeaChunkEmbeddingDefaultArgs> = $Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload, S>

  type IdeaChunkEmbeddingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdeaChunkEmbeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdeaChunkEmbeddingCountAggregateInputType | true
    }

  export interface IdeaChunkEmbeddingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdeaChunkEmbedding'], meta: { name: 'IdeaChunkEmbedding' } }
    /**
     * Find zero or one IdeaChunkEmbedding that matches the filter.
     * @param {IdeaChunkEmbeddingFindUniqueArgs} args - Arguments to find a IdeaChunkEmbedding
     * @example
     * // Get one IdeaChunkEmbedding
     * const ideaChunkEmbedding = await prisma.ideaChunkEmbedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdeaChunkEmbeddingFindUniqueArgs>(args: SelectSubset<T, IdeaChunkEmbeddingFindUniqueArgs<ExtArgs>>): Prisma__IdeaChunkEmbeddingClient<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdeaChunkEmbedding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdeaChunkEmbeddingFindUniqueOrThrowArgs} args - Arguments to find a IdeaChunkEmbedding
     * @example
     * // Get one IdeaChunkEmbedding
     * const ideaChunkEmbedding = await prisma.ideaChunkEmbedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdeaChunkEmbeddingFindUniqueOrThrowArgs>(args: SelectSubset<T, IdeaChunkEmbeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdeaChunkEmbeddingClient<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdeaChunkEmbedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChunkEmbeddingFindFirstArgs} args - Arguments to find a IdeaChunkEmbedding
     * @example
     * // Get one IdeaChunkEmbedding
     * const ideaChunkEmbedding = await prisma.ideaChunkEmbedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdeaChunkEmbeddingFindFirstArgs>(args?: SelectSubset<T, IdeaChunkEmbeddingFindFirstArgs<ExtArgs>>): Prisma__IdeaChunkEmbeddingClient<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdeaChunkEmbedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChunkEmbeddingFindFirstOrThrowArgs} args - Arguments to find a IdeaChunkEmbedding
     * @example
     * // Get one IdeaChunkEmbedding
     * const ideaChunkEmbedding = await prisma.ideaChunkEmbedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdeaChunkEmbeddingFindFirstOrThrowArgs>(args?: SelectSubset<T, IdeaChunkEmbeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdeaChunkEmbeddingClient<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdeaChunkEmbeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChunkEmbeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdeaChunkEmbeddings
     * const ideaChunkEmbeddings = await prisma.ideaChunkEmbedding.findMany()
     * 
     * // Get first 10 IdeaChunkEmbeddings
     * const ideaChunkEmbeddings = await prisma.ideaChunkEmbedding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ideaChunkEmbeddingWithIdOnly = await prisma.ideaChunkEmbedding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdeaChunkEmbeddingFindManyArgs>(args?: SelectSubset<T, IdeaChunkEmbeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdeaChunkEmbedding.
     * @param {IdeaChunkEmbeddingCreateArgs} args - Arguments to create a IdeaChunkEmbedding.
     * @example
     * // Create one IdeaChunkEmbedding
     * const IdeaChunkEmbedding = await prisma.ideaChunkEmbedding.create({
     *   data: {
     *     // ... data to create a IdeaChunkEmbedding
     *   }
     * })
     * 
     */
    create<T extends IdeaChunkEmbeddingCreateArgs>(args: SelectSubset<T, IdeaChunkEmbeddingCreateArgs<ExtArgs>>): Prisma__IdeaChunkEmbeddingClient<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdeaChunkEmbeddings.
     * @param {IdeaChunkEmbeddingCreateManyArgs} args - Arguments to create many IdeaChunkEmbeddings.
     * @example
     * // Create many IdeaChunkEmbeddings
     * const ideaChunkEmbedding = await prisma.ideaChunkEmbedding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdeaChunkEmbeddingCreateManyArgs>(args?: SelectSubset<T, IdeaChunkEmbeddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdeaChunkEmbeddings and returns the data saved in the database.
     * @param {IdeaChunkEmbeddingCreateManyAndReturnArgs} args - Arguments to create many IdeaChunkEmbeddings.
     * @example
     * // Create many IdeaChunkEmbeddings
     * const ideaChunkEmbedding = await prisma.ideaChunkEmbedding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdeaChunkEmbeddings and only return the `id`
     * const ideaChunkEmbeddingWithIdOnly = await prisma.ideaChunkEmbedding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdeaChunkEmbeddingCreateManyAndReturnArgs>(args?: SelectSubset<T, IdeaChunkEmbeddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdeaChunkEmbedding.
     * @param {IdeaChunkEmbeddingDeleteArgs} args - Arguments to delete one IdeaChunkEmbedding.
     * @example
     * // Delete one IdeaChunkEmbedding
     * const IdeaChunkEmbedding = await prisma.ideaChunkEmbedding.delete({
     *   where: {
     *     // ... filter to delete one IdeaChunkEmbedding
     *   }
     * })
     * 
     */
    delete<T extends IdeaChunkEmbeddingDeleteArgs>(args: SelectSubset<T, IdeaChunkEmbeddingDeleteArgs<ExtArgs>>): Prisma__IdeaChunkEmbeddingClient<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdeaChunkEmbedding.
     * @param {IdeaChunkEmbeddingUpdateArgs} args - Arguments to update one IdeaChunkEmbedding.
     * @example
     * // Update one IdeaChunkEmbedding
     * const ideaChunkEmbedding = await prisma.ideaChunkEmbedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdeaChunkEmbeddingUpdateArgs>(args: SelectSubset<T, IdeaChunkEmbeddingUpdateArgs<ExtArgs>>): Prisma__IdeaChunkEmbeddingClient<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdeaChunkEmbeddings.
     * @param {IdeaChunkEmbeddingDeleteManyArgs} args - Arguments to filter IdeaChunkEmbeddings to delete.
     * @example
     * // Delete a few IdeaChunkEmbeddings
     * const { count } = await prisma.ideaChunkEmbedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdeaChunkEmbeddingDeleteManyArgs>(args?: SelectSubset<T, IdeaChunkEmbeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdeaChunkEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChunkEmbeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdeaChunkEmbeddings
     * const ideaChunkEmbedding = await prisma.ideaChunkEmbedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdeaChunkEmbeddingUpdateManyArgs>(args: SelectSubset<T, IdeaChunkEmbeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdeaChunkEmbeddings and returns the data updated in the database.
     * @param {IdeaChunkEmbeddingUpdateManyAndReturnArgs} args - Arguments to update many IdeaChunkEmbeddings.
     * @example
     * // Update many IdeaChunkEmbeddings
     * const ideaChunkEmbedding = await prisma.ideaChunkEmbedding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdeaChunkEmbeddings and only return the `id`
     * const ideaChunkEmbeddingWithIdOnly = await prisma.ideaChunkEmbedding.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdeaChunkEmbeddingUpdateManyAndReturnArgs>(args: SelectSubset<T, IdeaChunkEmbeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdeaChunkEmbedding.
     * @param {IdeaChunkEmbeddingUpsertArgs} args - Arguments to update or create a IdeaChunkEmbedding.
     * @example
     * // Update or create a IdeaChunkEmbedding
     * const ideaChunkEmbedding = await prisma.ideaChunkEmbedding.upsert({
     *   create: {
     *     // ... data to create a IdeaChunkEmbedding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdeaChunkEmbedding we want to update
     *   }
     * })
     */
    upsert<T extends IdeaChunkEmbeddingUpsertArgs>(args: SelectSubset<T, IdeaChunkEmbeddingUpsertArgs<ExtArgs>>): Prisma__IdeaChunkEmbeddingClient<$Result.GetResult<Prisma.$IdeaChunkEmbeddingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdeaChunkEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChunkEmbeddingCountArgs} args - Arguments to filter IdeaChunkEmbeddings to count.
     * @example
     * // Count the number of IdeaChunkEmbeddings
     * const count = await prisma.ideaChunkEmbedding.count({
     *   where: {
     *     // ... the filter for the IdeaChunkEmbeddings we want to count
     *   }
     * })
    **/
    count<T extends IdeaChunkEmbeddingCountArgs>(
      args?: Subset<T, IdeaChunkEmbeddingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdeaChunkEmbeddingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdeaChunkEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChunkEmbeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdeaChunkEmbeddingAggregateArgs>(args: Subset<T, IdeaChunkEmbeddingAggregateArgs>): Prisma.PrismaPromise<GetIdeaChunkEmbeddingAggregateType<T>>

    /**
     * Group by IdeaChunkEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChunkEmbeddingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdeaChunkEmbeddingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdeaChunkEmbeddingGroupByArgs['orderBy'] }
        : { orderBy?: IdeaChunkEmbeddingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdeaChunkEmbeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdeaChunkEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdeaChunkEmbedding model
   */
  readonly fields: IdeaChunkEmbeddingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdeaChunkEmbedding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdeaChunkEmbeddingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    idea<T extends IdeaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdeaDefaultArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IdeaChunkEmbedding model
   */
  interface IdeaChunkEmbeddingFieldRefs {
    readonly id: FieldRef<"IdeaChunkEmbedding", 'String'>
    readonly ideaId: FieldRef<"IdeaChunkEmbedding", 'String'>
    readonly chunkIndex: FieldRef<"IdeaChunkEmbedding", 'Int'>
    readonly content: FieldRef<"IdeaChunkEmbedding", 'String'>
    readonly vector: FieldRef<"IdeaChunkEmbedding", 'Json'>
    readonly createdAt: FieldRef<"IdeaChunkEmbedding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IdeaChunkEmbedding findUnique
   */
  export type IdeaChunkEmbeddingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which IdeaChunkEmbedding to fetch.
     */
    where: IdeaChunkEmbeddingWhereUniqueInput
  }

  /**
   * IdeaChunkEmbedding findUniqueOrThrow
   */
  export type IdeaChunkEmbeddingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which IdeaChunkEmbedding to fetch.
     */
    where: IdeaChunkEmbeddingWhereUniqueInput
  }

  /**
   * IdeaChunkEmbedding findFirst
   */
  export type IdeaChunkEmbeddingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which IdeaChunkEmbedding to fetch.
     */
    where?: IdeaChunkEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaChunkEmbeddings to fetch.
     */
    orderBy?: IdeaChunkEmbeddingOrderByWithRelationInput | IdeaChunkEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdeaChunkEmbeddings.
     */
    cursor?: IdeaChunkEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaChunkEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaChunkEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdeaChunkEmbeddings.
     */
    distinct?: IdeaChunkEmbeddingScalarFieldEnum | IdeaChunkEmbeddingScalarFieldEnum[]
  }

  /**
   * IdeaChunkEmbedding findFirstOrThrow
   */
  export type IdeaChunkEmbeddingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which IdeaChunkEmbedding to fetch.
     */
    where?: IdeaChunkEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaChunkEmbeddings to fetch.
     */
    orderBy?: IdeaChunkEmbeddingOrderByWithRelationInput | IdeaChunkEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdeaChunkEmbeddings.
     */
    cursor?: IdeaChunkEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaChunkEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaChunkEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdeaChunkEmbeddings.
     */
    distinct?: IdeaChunkEmbeddingScalarFieldEnum | IdeaChunkEmbeddingScalarFieldEnum[]
  }

  /**
   * IdeaChunkEmbedding findMany
   */
  export type IdeaChunkEmbeddingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which IdeaChunkEmbeddings to fetch.
     */
    where?: IdeaChunkEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaChunkEmbeddings to fetch.
     */
    orderBy?: IdeaChunkEmbeddingOrderByWithRelationInput | IdeaChunkEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdeaChunkEmbeddings.
     */
    cursor?: IdeaChunkEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaChunkEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaChunkEmbeddings.
     */
    skip?: number
    distinct?: IdeaChunkEmbeddingScalarFieldEnum | IdeaChunkEmbeddingScalarFieldEnum[]
  }

  /**
   * IdeaChunkEmbedding create
   */
  export type IdeaChunkEmbeddingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to create a IdeaChunkEmbedding.
     */
    data: XOR<IdeaChunkEmbeddingCreateInput, IdeaChunkEmbeddingUncheckedCreateInput>
  }

  /**
   * IdeaChunkEmbedding createMany
   */
  export type IdeaChunkEmbeddingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdeaChunkEmbeddings.
     */
    data: IdeaChunkEmbeddingCreateManyInput | IdeaChunkEmbeddingCreateManyInput[]
  }

  /**
   * IdeaChunkEmbedding createManyAndReturn
   */
  export type IdeaChunkEmbeddingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * The data used to create many IdeaChunkEmbeddings.
     */
    data: IdeaChunkEmbeddingCreateManyInput | IdeaChunkEmbeddingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdeaChunkEmbedding update
   */
  export type IdeaChunkEmbeddingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to update a IdeaChunkEmbedding.
     */
    data: XOR<IdeaChunkEmbeddingUpdateInput, IdeaChunkEmbeddingUncheckedUpdateInput>
    /**
     * Choose, which IdeaChunkEmbedding to update.
     */
    where: IdeaChunkEmbeddingWhereUniqueInput
  }

  /**
   * IdeaChunkEmbedding updateMany
   */
  export type IdeaChunkEmbeddingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdeaChunkEmbeddings.
     */
    data: XOR<IdeaChunkEmbeddingUpdateManyMutationInput, IdeaChunkEmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which IdeaChunkEmbeddings to update
     */
    where?: IdeaChunkEmbeddingWhereInput
    /**
     * Limit how many IdeaChunkEmbeddings to update.
     */
    limit?: number
  }

  /**
   * IdeaChunkEmbedding updateManyAndReturn
   */
  export type IdeaChunkEmbeddingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * The data used to update IdeaChunkEmbeddings.
     */
    data: XOR<IdeaChunkEmbeddingUpdateManyMutationInput, IdeaChunkEmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which IdeaChunkEmbeddings to update
     */
    where?: IdeaChunkEmbeddingWhereInput
    /**
     * Limit how many IdeaChunkEmbeddings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdeaChunkEmbedding upsert
   */
  export type IdeaChunkEmbeddingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
    /**
     * The filter to search for the IdeaChunkEmbedding to update in case it exists.
     */
    where: IdeaChunkEmbeddingWhereUniqueInput
    /**
     * In case the IdeaChunkEmbedding found by the `where` argument doesn't exist, create a new IdeaChunkEmbedding with this data.
     */
    create: XOR<IdeaChunkEmbeddingCreateInput, IdeaChunkEmbeddingUncheckedCreateInput>
    /**
     * In case the IdeaChunkEmbedding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdeaChunkEmbeddingUpdateInput, IdeaChunkEmbeddingUncheckedUpdateInput>
  }

  /**
   * IdeaChunkEmbedding delete
   */
  export type IdeaChunkEmbeddingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
    /**
     * Filter which IdeaChunkEmbedding to delete.
     */
    where: IdeaChunkEmbeddingWhereUniqueInput
  }

  /**
   * IdeaChunkEmbedding deleteMany
   */
  export type IdeaChunkEmbeddingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdeaChunkEmbeddings to delete
     */
    where?: IdeaChunkEmbeddingWhereInput
    /**
     * Limit how many IdeaChunkEmbeddings to delete.
     */
    limit?: number
  }

  /**
   * IdeaChunkEmbedding without action
   */
  export type IdeaChunkEmbeddingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChunkEmbedding
     */
    select?: IdeaChunkEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChunkEmbedding
     */
    omit?: IdeaChunkEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChunkEmbeddingInclude<ExtArgs> | null
  }


  /**
   * Model IdeaStack
   */

  export type AggregateIdeaStack = {
    _count: IdeaStackCountAggregateOutputType | null
    _min: IdeaStackMinAggregateOutputType | null
    _max: IdeaStackMaxAggregateOutputType | null
  }

  export type IdeaStackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    refreshedAt: Date | null
    expiresAt: Date | null
  }

  export type IdeaStackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    refreshedAt: Date | null
    expiresAt: Date | null
  }

  export type IdeaStackCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    refreshedAt: number
    expiresAt: number
    _all: number
  }


  export type IdeaStackMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    refreshedAt?: true
    expiresAt?: true
  }

  export type IdeaStackMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    refreshedAt?: true
    expiresAt?: true
  }

  export type IdeaStackCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    refreshedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type IdeaStackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdeaStack to aggregate.
     */
    where?: IdeaStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaStacks to fetch.
     */
    orderBy?: IdeaStackOrderByWithRelationInput | IdeaStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdeaStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdeaStacks
    **/
    _count?: true | IdeaStackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdeaStackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdeaStackMaxAggregateInputType
  }

  export type GetIdeaStackAggregateType<T extends IdeaStackAggregateArgs> = {
        [P in keyof T & keyof AggregateIdeaStack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdeaStack[P]>
      : GetScalarType<T[P], AggregateIdeaStack[P]>
  }




  export type IdeaStackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaStackWhereInput
    orderBy?: IdeaStackOrderByWithAggregationInput | IdeaStackOrderByWithAggregationInput[]
    by: IdeaStackScalarFieldEnum[] | IdeaStackScalarFieldEnum
    having?: IdeaStackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdeaStackCountAggregateInputType | true
    _min?: IdeaStackMinAggregateInputType
    _max?: IdeaStackMaxAggregateInputType
  }

  export type IdeaStackGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    refreshedAt: Date
    expiresAt: Date
    _count: IdeaStackCountAggregateOutputType | null
    _min: IdeaStackMinAggregateOutputType | null
    _max: IdeaStackMaxAggregateOutputType | null
  }

  type GetIdeaStackGroupByPayload<T extends IdeaStackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdeaStackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdeaStackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdeaStackGroupByOutputType[P]>
            : GetScalarType<T[P], IdeaStackGroupByOutputType[P]>
        }
      >
    >


  export type IdeaStackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    refreshedAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | IdeaStack$itemsArgs<ExtArgs>
    swipeEvents?: boolean | IdeaStack$swipeEventsArgs<ExtArgs>
    _count?: boolean | IdeaStackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaStack"]>

  export type IdeaStackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    refreshedAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaStack"]>

  export type IdeaStackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    refreshedAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaStack"]>

  export type IdeaStackSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    refreshedAt?: boolean
    expiresAt?: boolean
  }

  export type IdeaStackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "refreshedAt" | "expiresAt", ExtArgs["result"]["ideaStack"]>
  export type IdeaStackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | IdeaStack$itemsArgs<ExtArgs>
    swipeEvents?: boolean | IdeaStack$swipeEventsArgs<ExtArgs>
    _count?: boolean | IdeaStackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IdeaStackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IdeaStackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IdeaStackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdeaStack"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$IdeaStackItemPayload<ExtArgs>[]
      swipeEvents: Prisma.$SwipeEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      refreshedAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["ideaStack"]>
    composites: {}
  }

  type IdeaStackGetPayload<S extends boolean | null | undefined | IdeaStackDefaultArgs> = $Result.GetResult<Prisma.$IdeaStackPayload, S>

  type IdeaStackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdeaStackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdeaStackCountAggregateInputType | true
    }

  export interface IdeaStackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdeaStack'], meta: { name: 'IdeaStack' } }
    /**
     * Find zero or one IdeaStack that matches the filter.
     * @param {IdeaStackFindUniqueArgs} args - Arguments to find a IdeaStack
     * @example
     * // Get one IdeaStack
     * const ideaStack = await prisma.ideaStack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdeaStackFindUniqueArgs>(args: SelectSubset<T, IdeaStackFindUniqueArgs<ExtArgs>>): Prisma__IdeaStackClient<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdeaStack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdeaStackFindUniqueOrThrowArgs} args - Arguments to find a IdeaStack
     * @example
     * // Get one IdeaStack
     * const ideaStack = await prisma.ideaStack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdeaStackFindUniqueOrThrowArgs>(args: SelectSubset<T, IdeaStackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdeaStackClient<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdeaStack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackFindFirstArgs} args - Arguments to find a IdeaStack
     * @example
     * // Get one IdeaStack
     * const ideaStack = await prisma.ideaStack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdeaStackFindFirstArgs>(args?: SelectSubset<T, IdeaStackFindFirstArgs<ExtArgs>>): Prisma__IdeaStackClient<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdeaStack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackFindFirstOrThrowArgs} args - Arguments to find a IdeaStack
     * @example
     * // Get one IdeaStack
     * const ideaStack = await prisma.ideaStack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdeaStackFindFirstOrThrowArgs>(args?: SelectSubset<T, IdeaStackFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdeaStackClient<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdeaStacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdeaStacks
     * const ideaStacks = await prisma.ideaStack.findMany()
     * 
     * // Get first 10 IdeaStacks
     * const ideaStacks = await prisma.ideaStack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ideaStackWithIdOnly = await prisma.ideaStack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdeaStackFindManyArgs>(args?: SelectSubset<T, IdeaStackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdeaStack.
     * @param {IdeaStackCreateArgs} args - Arguments to create a IdeaStack.
     * @example
     * // Create one IdeaStack
     * const IdeaStack = await prisma.ideaStack.create({
     *   data: {
     *     // ... data to create a IdeaStack
     *   }
     * })
     * 
     */
    create<T extends IdeaStackCreateArgs>(args: SelectSubset<T, IdeaStackCreateArgs<ExtArgs>>): Prisma__IdeaStackClient<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdeaStacks.
     * @param {IdeaStackCreateManyArgs} args - Arguments to create many IdeaStacks.
     * @example
     * // Create many IdeaStacks
     * const ideaStack = await prisma.ideaStack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdeaStackCreateManyArgs>(args?: SelectSubset<T, IdeaStackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdeaStacks and returns the data saved in the database.
     * @param {IdeaStackCreateManyAndReturnArgs} args - Arguments to create many IdeaStacks.
     * @example
     * // Create many IdeaStacks
     * const ideaStack = await prisma.ideaStack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdeaStacks and only return the `id`
     * const ideaStackWithIdOnly = await prisma.ideaStack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdeaStackCreateManyAndReturnArgs>(args?: SelectSubset<T, IdeaStackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdeaStack.
     * @param {IdeaStackDeleteArgs} args - Arguments to delete one IdeaStack.
     * @example
     * // Delete one IdeaStack
     * const IdeaStack = await prisma.ideaStack.delete({
     *   where: {
     *     // ... filter to delete one IdeaStack
     *   }
     * })
     * 
     */
    delete<T extends IdeaStackDeleteArgs>(args: SelectSubset<T, IdeaStackDeleteArgs<ExtArgs>>): Prisma__IdeaStackClient<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdeaStack.
     * @param {IdeaStackUpdateArgs} args - Arguments to update one IdeaStack.
     * @example
     * // Update one IdeaStack
     * const ideaStack = await prisma.ideaStack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdeaStackUpdateArgs>(args: SelectSubset<T, IdeaStackUpdateArgs<ExtArgs>>): Prisma__IdeaStackClient<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdeaStacks.
     * @param {IdeaStackDeleteManyArgs} args - Arguments to filter IdeaStacks to delete.
     * @example
     * // Delete a few IdeaStacks
     * const { count } = await prisma.ideaStack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdeaStackDeleteManyArgs>(args?: SelectSubset<T, IdeaStackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdeaStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdeaStacks
     * const ideaStack = await prisma.ideaStack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdeaStackUpdateManyArgs>(args: SelectSubset<T, IdeaStackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdeaStacks and returns the data updated in the database.
     * @param {IdeaStackUpdateManyAndReturnArgs} args - Arguments to update many IdeaStacks.
     * @example
     * // Update many IdeaStacks
     * const ideaStack = await prisma.ideaStack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdeaStacks and only return the `id`
     * const ideaStackWithIdOnly = await prisma.ideaStack.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdeaStackUpdateManyAndReturnArgs>(args: SelectSubset<T, IdeaStackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdeaStack.
     * @param {IdeaStackUpsertArgs} args - Arguments to update or create a IdeaStack.
     * @example
     * // Update or create a IdeaStack
     * const ideaStack = await prisma.ideaStack.upsert({
     *   create: {
     *     // ... data to create a IdeaStack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdeaStack we want to update
     *   }
     * })
     */
    upsert<T extends IdeaStackUpsertArgs>(args: SelectSubset<T, IdeaStackUpsertArgs<ExtArgs>>): Prisma__IdeaStackClient<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdeaStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackCountArgs} args - Arguments to filter IdeaStacks to count.
     * @example
     * // Count the number of IdeaStacks
     * const count = await prisma.ideaStack.count({
     *   where: {
     *     // ... the filter for the IdeaStacks we want to count
     *   }
     * })
    **/
    count<T extends IdeaStackCountArgs>(
      args?: Subset<T, IdeaStackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdeaStackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdeaStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdeaStackAggregateArgs>(args: Subset<T, IdeaStackAggregateArgs>): Prisma.PrismaPromise<GetIdeaStackAggregateType<T>>

    /**
     * Group by IdeaStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdeaStackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdeaStackGroupByArgs['orderBy'] }
        : { orderBy?: IdeaStackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdeaStackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdeaStackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdeaStack model
   */
  readonly fields: IdeaStackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdeaStack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdeaStackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends IdeaStack$itemsArgs<ExtArgs> = {}>(args?: Subset<T, IdeaStack$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swipeEvents<T extends IdeaStack$swipeEventsArgs<ExtArgs> = {}>(args?: Subset<T, IdeaStack$swipeEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IdeaStack model
   */
  interface IdeaStackFieldRefs {
    readonly id: FieldRef<"IdeaStack", 'String'>
    readonly userId: FieldRef<"IdeaStack", 'String'>
    readonly createdAt: FieldRef<"IdeaStack", 'DateTime'>
    readonly refreshedAt: FieldRef<"IdeaStack", 'DateTime'>
    readonly expiresAt: FieldRef<"IdeaStack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IdeaStack findUnique
   */
  export type IdeaStackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    /**
     * Filter, which IdeaStack to fetch.
     */
    where: IdeaStackWhereUniqueInput
  }

  /**
   * IdeaStack findUniqueOrThrow
   */
  export type IdeaStackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    /**
     * Filter, which IdeaStack to fetch.
     */
    where: IdeaStackWhereUniqueInput
  }

  /**
   * IdeaStack findFirst
   */
  export type IdeaStackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    /**
     * Filter, which IdeaStack to fetch.
     */
    where?: IdeaStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaStacks to fetch.
     */
    orderBy?: IdeaStackOrderByWithRelationInput | IdeaStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdeaStacks.
     */
    cursor?: IdeaStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdeaStacks.
     */
    distinct?: IdeaStackScalarFieldEnum | IdeaStackScalarFieldEnum[]
  }

  /**
   * IdeaStack findFirstOrThrow
   */
  export type IdeaStackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    /**
     * Filter, which IdeaStack to fetch.
     */
    where?: IdeaStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaStacks to fetch.
     */
    orderBy?: IdeaStackOrderByWithRelationInput | IdeaStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdeaStacks.
     */
    cursor?: IdeaStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdeaStacks.
     */
    distinct?: IdeaStackScalarFieldEnum | IdeaStackScalarFieldEnum[]
  }

  /**
   * IdeaStack findMany
   */
  export type IdeaStackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    /**
     * Filter, which IdeaStacks to fetch.
     */
    where?: IdeaStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaStacks to fetch.
     */
    orderBy?: IdeaStackOrderByWithRelationInput | IdeaStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdeaStacks.
     */
    cursor?: IdeaStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaStacks.
     */
    skip?: number
    distinct?: IdeaStackScalarFieldEnum | IdeaStackScalarFieldEnum[]
  }

  /**
   * IdeaStack create
   */
  export type IdeaStackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    /**
     * The data needed to create a IdeaStack.
     */
    data: XOR<IdeaStackCreateInput, IdeaStackUncheckedCreateInput>
  }

  /**
   * IdeaStack createMany
   */
  export type IdeaStackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdeaStacks.
     */
    data: IdeaStackCreateManyInput | IdeaStackCreateManyInput[]
  }

  /**
   * IdeaStack createManyAndReturn
   */
  export type IdeaStackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * The data used to create many IdeaStacks.
     */
    data: IdeaStackCreateManyInput | IdeaStackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdeaStack update
   */
  export type IdeaStackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    /**
     * The data needed to update a IdeaStack.
     */
    data: XOR<IdeaStackUpdateInput, IdeaStackUncheckedUpdateInput>
    /**
     * Choose, which IdeaStack to update.
     */
    where: IdeaStackWhereUniqueInput
  }

  /**
   * IdeaStack updateMany
   */
  export type IdeaStackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdeaStacks.
     */
    data: XOR<IdeaStackUpdateManyMutationInput, IdeaStackUncheckedUpdateManyInput>
    /**
     * Filter which IdeaStacks to update
     */
    where?: IdeaStackWhereInput
    /**
     * Limit how many IdeaStacks to update.
     */
    limit?: number
  }

  /**
   * IdeaStack updateManyAndReturn
   */
  export type IdeaStackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * The data used to update IdeaStacks.
     */
    data: XOR<IdeaStackUpdateManyMutationInput, IdeaStackUncheckedUpdateManyInput>
    /**
     * Filter which IdeaStacks to update
     */
    where?: IdeaStackWhereInput
    /**
     * Limit how many IdeaStacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdeaStack upsert
   */
  export type IdeaStackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    /**
     * The filter to search for the IdeaStack to update in case it exists.
     */
    where: IdeaStackWhereUniqueInput
    /**
     * In case the IdeaStack found by the `where` argument doesn't exist, create a new IdeaStack with this data.
     */
    create: XOR<IdeaStackCreateInput, IdeaStackUncheckedCreateInput>
    /**
     * In case the IdeaStack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdeaStackUpdateInput, IdeaStackUncheckedUpdateInput>
  }

  /**
   * IdeaStack delete
   */
  export type IdeaStackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    /**
     * Filter which IdeaStack to delete.
     */
    where: IdeaStackWhereUniqueInput
  }

  /**
   * IdeaStack deleteMany
   */
  export type IdeaStackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdeaStacks to delete
     */
    where?: IdeaStackWhereInput
    /**
     * Limit how many IdeaStacks to delete.
     */
    limit?: number
  }

  /**
   * IdeaStack.items
   */
  export type IdeaStack$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    where?: IdeaStackItemWhereInput
    orderBy?: IdeaStackItemOrderByWithRelationInput | IdeaStackItemOrderByWithRelationInput[]
    cursor?: IdeaStackItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaStackItemScalarFieldEnum | IdeaStackItemScalarFieldEnum[]
  }

  /**
   * IdeaStack.swipeEvents
   */
  export type IdeaStack$swipeEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    where?: SwipeEventWhereInput
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    cursor?: SwipeEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwipeEventScalarFieldEnum | SwipeEventScalarFieldEnum[]
  }

  /**
   * IdeaStack without action
   */
  export type IdeaStackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
  }


  /**
   * Model IdeaStackItem
   */

  export type AggregateIdeaStackItem = {
    _count: IdeaStackItemCountAggregateOutputType | null
    _avg: IdeaStackItemAvgAggregateOutputType | null
    _sum: IdeaStackItemSumAggregateOutputType | null
    _min: IdeaStackItemMinAggregateOutputType | null
    _max: IdeaStackItemMaxAggregateOutputType | null
  }

  export type IdeaStackItemAvgAggregateOutputType = {
    position: number | null
  }

  export type IdeaStackItemSumAggregateOutputType = {
    position: number | null
  }

  export type IdeaStackItemMinAggregateOutputType = {
    id: string | null
    stackId: string | null
    ideaId: string | null
    position: number | null
  }

  export type IdeaStackItemMaxAggregateOutputType = {
    id: string | null
    stackId: string | null
    ideaId: string | null
    position: number | null
  }

  export type IdeaStackItemCountAggregateOutputType = {
    id: number
    stackId: number
    ideaId: number
    position: number
    _all: number
  }


  export type IdeaStackItemAvgAggregateInputType = {
    position?: true
  }

  export type IdeaStackItemSumAggregateInputType = {
    position?: true
  }

  export type IdeaStackItemMinAggregateInputType = {
    id?: true
    stackId?: true
    ideaId?: true
    position?: true
  }

  export type IdeaStackItemMaxAggregateInputType = {
    id?: true
    stackId?: true
    ideaId?: true
    position?: true
  }

  export type IdeaStackItemCountAggregateInputType = {
    id?: true
    stackId?: true
    ideaId?: true
    position?: true
    _all?: true
  }

  export type IdeaStackItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdeaStackItem to aggregate.
     */
    where?: IdeaStackItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaStackItems to fetch.
     */
    orderBy?: IdeaStackItemOrderByWithRelationInput | IdeaStackItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdeaStackItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaStackItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaStackItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdeaStackItems
    **/
    _count?: true | IdeaStackItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdeaStackItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdeaStackItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdeaStackItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdeaStackItemMaxAggregateInputType
  }

  export type GetIdeaStackItemAggregateType<T extends IdeaStackItemAggregateArgs> = {
        [P in keyof T & keyof AggregateIdeaStackItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdeaStackItem[P]>
      : GetScalarType<T[P], AggregateIdeaStackItem[P]>
  }




  export type IdeaStackItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaStackItemWhereInput
    orderBy?: IdeaStackItemOrderByWithAggregationInput | IdeaStackItemOrderByWithAggregationInput[]
    by: IdeaStackItemScalarFieldEnum[] | IdeaStackItemScalarFieldEnum
    having?: IdeaStackItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdeaStackItemCountAggregateInputType | true
    _avg?: IdeaStackItemAvgAggregateInputType
    _sum?: IdeaStackItemSumAggregateInputType
    _min?: IdeaStackItemMinAggregateInputType
    _max?: IdeaStackItemMaxAggregateInputType
  }

  export type IdeaStackItemGroupByOutputType = {
    id: string
    stackId: string
    ideaId: string
    position: number
    _count: IdeaStackItemCountAggregateOutputType | null
    _avg: IdeaStackItemAvgAggregateOutputType | null
    _sum: IdeaStackItemSumAggregateOutputType | null
    _min: IdeaStackItemMinAggregateOutputType | null
    _max: IdeaStackItemMaxAggregateOutputType | null
  }

  type GetIdeaStackItemGroupByPayload<T extends IdeaStackItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdeaStackItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdeaStackItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdeaStackItemGroupByOutputType[P]>
            : GetScalarType<T[P], IdeaStackItemGroupByOutputType[P]>
        }
      >
    >


  export type IdeaStackItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stackId?: boolean
    ideaId?: boolean
    position?: boolean
    stack?: boolean | IdeaStackDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaStackItem"]>

  export type IdeaStackItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stackId?: boolean
    ideaId?: boolean
    position?: boolean
    stack?: boolean | IdeaStackDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaStackItem"]>

  export type IdeaStackItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stackId?: boolean
    ideaId?: boolean
    position?: boolean
    stack?: boolean | IdeaStackDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaStackItem"]>

  export type IdeaStackItemSelectScalar = {
    id?: boolean
    stackId?: boolean
    ideaId?: boolean
    position?: boolean
  }

  export type IdeaStackItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stackId" | "ideaId" | "position", ExtArgs["result"]["ideaStackItem"]>
  export type IdeaStackItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stack?: boolean | IdeaStackDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }
  export type IdeaStackItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stack?: boolean | IdeaStackDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }
  export type IdeaStackItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stack?: boolean | IdeaStackDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }

  export type $IdeaStackItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdeaStackItem"
    objects: {
      stack: Prisma.$IdeaStackPayload<ExtArgs>
      idea: Prisma.$IdeaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stackId: string
      ideaId: string
      position: number
    }, ExtArgs["result"]["ideaStackItem"]>
    composites: {}
  }

  type IdeaStackItemGetPayload<S extends boolean | null | undefined | IdeaStackItemDefaultArgs> = $Result.GetResult<Prisma.$IdeaStackItemPayload, S>

  type IdeaStackItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdeaStackItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdeaStackItemCountAggregateInputType | true
    }

  export interface IdeaStackItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdeaStackItem'], meta: { name: 'IdeaStackItem' } }
    /**
     * Find zero or one IdeaStackItem that matches the filter.
     * @param {IdeaStackItemFindUniqueArgs} args - Arguments to find a IdeaStackItem
     * @example
     * // Get one IdeaStackItem
     * const ideaStackItem = await prisma.ideaStackItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdeaStackItemFindUniqueArgs>(args: SelectSubset<T, IdeaStackItemFindUniqueArgs<ExtArgs>>): Prisma__IdeaStackItemClient<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdeaStackItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdeaStackItemFindUniqueOrThrowArgs} args - Arguments to find a IdeaStackItem
     * @example
     * // Get one IdeaStackItem
     * const ideaStackItem = await prisma.ideaStackItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdeaStackItemFindUniqueOrThrowArgs>(args: SelectSubset<T, IdeaStackItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdeaStackItemClient<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdeaStackItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackItemFindFirstArgs} args - Arguments to find a IdeaStackItem
     * @example
     * // Get one IdeaStackItem
     * const ideaStackItem = await prisma.ideaStackItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdeaStackItemFindFirstArgs>(args?: SelectSubset<T, IdeaStackItemFindFirstArgs<ExtArgs>>): Prisma__IdeaStackItemClient<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdeaStackItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackItemFindFirstOrThrowArgs} args - Arguments to find a IdeaStackItem
     * @example
     * // Get one IdeaStackItem
     * const ideaStackItem = await prisma.ideaStackItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdeaStackItemFindFirstOrThrowArgs>(args?: SelectSubset<T, IdeaStackItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdeaStackItemClient<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdeaStackItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdeaStackItems
     * const ideaStackItems = await prisma.ideaStackItem.findMany()
     * 
     * // Get first 10 IdeaStackItems
     * const ideaStackItems = await prisma.ideaStackItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ideaStackItemWithIdOnly = await prisma.ideaStackItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdeaStackItemFindManyArgs>(args?: SelectSubset<T, IdeaStackItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdeaStackItem.
     * @param {IdeaStackItemCreateArgs} args - Arguments to create a IdeaStackItem.
     * @example
     * // Create one IdeaStackItem
     * const IdeaStackItem = await prisma.ideaStackItem.create({
     *   data: {
     *     // ... data to create a IdeaStackItem
     *   }
     * })
     * 
     */
    create<T extends IdeaStackItemCreateArgs>(args: SelectSubset<T, IdeaStackItemCreateArgs<ExtArgs>>): Prisma__IdeaStackItemClient<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdeaStackItems.
     * @param {IdeaStackItemCreateManyArgs} args - Arguments to create many IdeaStackItems.
     * @example
     * // Create many IdeaStackItems
     * const ideaStackItem = await prisma.ideaStackItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdeaStackItemCreateManyArgs>(args?: SelectSubset<T, IdeaStackItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdeaStackItems and returns the data saved in the database.
     * @param {IdeaStackItemCreateManyAndReturnArgs} args - Arguments to create many IdeaStackItems.
     * @example
     * // Create many IdeaStackItems
     * const ideaStackItem = await prisma.ideaStackItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdeaStackItems and only return the `id`
     * const ideaStackItemWithIdOnly = await prisma.ideaStackItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdeaStackItemCreateManyAndReturnArgs>(args?: SelectSubset<T, IdeaStackItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdeaStackItem.
     * @param {IdeaStackItemDeleteArgs} args - Arguments to delete one IdeaStackItem.
     * @example
     * // Delete one IdeaStackItem
     * const IdeaStackItem = await prisma.ideaStackItem.delete({
     *   where: {
     *     // ... filter to delete one IdeaStackItem
     *   }
     * })
     * 
     */
    delete<T extends IdeaStackItemDeleteArgs>(args: SelectSubset<T, IdeaStackItemDeleteArgs<ExtArgs>>): Prisma__IdeaStackItemClient<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdeaStackItem.
     * @param {IdeaStackItemUpdateArgs} args - Arguments to update one IdeaStackItem.
     * @example
     * // Update one IdeaStackItem
     * const ideaStackItem = await prisma.ideaStackItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdeaStackItemUpdateArgs>(args: SelectSubset<T, IdeaStackItemUpdateArgs<ExtArgs>>): Prisma__IdeaStackItemClient<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdeaStackItems.
     * @param {IdeaStackItemDeleteManyArgs} args - Arguments to filter IdeaStackItems to delete.
     * @example
     * // Delete a few IdeaStackItems
     * const { count } = await prisma.ideaStackItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdeaStackItemDeleteManyArgs>(args?: SelectSubset<T, IdeaStackItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdeaStackItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdeaStackItems
     * const ideaStackItem = await prisma.ideaStackItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdeaStackItemUpdateManyArgs>(args: SelectSubset<T, IdeaStackItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdeaStackItems and returns the data updated in the database.
     * @param {IdeaStackItemUpdateManyAndReturnArgs} args - Arguments to update many IdeaStackItems.
     * @example
     * // Update many IdeaStackItems
     * const ideaStackItem = await prisma.ideaStackItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdeaStackItems and only return the `id`
     * const ideaStackItemWithIdOnly = await prisma.ideaStackItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdeaStackItemUpdateManyAndReturnArgs>(args: SelectSubset<T, IdeaStackItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdeaStackItem.
     * @param {IdeaStackItemUpsertArgs} args - Arguments to update or create a IdeaStackItem.
     * @example
     * // Update or create a IdeaStackItem
     * const ideaStackItem = await prisma.ideaStackItem.upsert({
     *   create: {
     *     // ... data to create a IdeaStackItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdeaStackItem we want to update
     *   }
     * })
     */
    upsert<T extends IdeaStackItemUpsertArgs>(args: SelectSubset<T, IdeaStackItemUpsertArgs<ExtArgs>>): Prisma__IdeaStackItemClient<$Result.GetResult<Prisma.$IdeaStackItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdeaStackItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackItemCountArgs} args - Arguments to filter IdeaStackItems to count.
     * @example
     * // Count the number of IdeaStackItems
     * const count = await prisma.ideaStackItem.count({
     *   where: {
     *     // ... the filter for the IdeaStackItems we want to count
     *   }
     * })
    **/
    count<T extends IdeaStackItemCountArgs>(
      args?: Subset<T, IdeaStackItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdeaStackItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdeaStackItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdeaStackItemAggregateArgs>(args: Subset<T, IdeaStackItemAggregateArgs>): Prisma.PrismaPromise<GetIdeaStackItemAggregateType<T>>

    /**
     * Group by IdeaStackItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaStackItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdeaStackItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdeaStackItemGroupByArgs['orderBy'] }
        : { orderBy?: IdeaStackItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdeaStackItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdeaStackItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdeaStackItem model
   */
  readonly fields: IdeaStackItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdeaStackItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdeaStackItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stack<T extends IdeaStackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdeaStackDefaultArgs<ExtArgs>>): Prisma__IdeaStackClient<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    idea<T extends IdeaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdeaDefaultArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IdeaStackItem model
   */
  interface IdeaStackItemFieldRefs {
    readonly id: FieldRef<"IdeaStackItem", 'String'>
    readonly stackId: FieldRef<"IdeaStackItem", 'String'>
    readonly ideaId: FieldRef<"IdeaStackItem", 'String'>
    readonly position: FieldRef<"IdeaStackItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * IdeaStackItem findUnique
   */
  export type IdeaStackItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    /**
     * Filter, which IdeaStackItem to fetch.
     */
    where: IdeaStackItemWhereUniqueInput
  }

  /**
   * IdeaStackItem findUniqueOrThrow
   */
  export type IdeaStackItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    /**
     * Filter, which IdeaStackItem to fetch.
     */
    where: IdeaStackItemWhereUniqueInput
  }

  /**
   * IdeaStackItem findFirst
   */
  export type IdeaStackItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    /**
     * Filter, which IdeaStackItem to fetch.
     */
    where?: IdeaStackItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaStackItems to fetch.
     */
    orderBy?: IdeaStackItemOrderByWithRelationInput | IdeaStackItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdeaStackItems.
     */
    cursor?: IdeaStackItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaStackItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaStackItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdeaStackItems.
     */
    distinct?: IdeaStackItemScalarFieldEnum | IdeaStackItemScalarFieldEnum[]
  }

  /**
   * IdeaStackItem findFirstOrThrow
   */
  export type IdeaStackItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    /**
     * Filter, which IdeaStackItem to fetch.
     */
    where?: IdeaStackItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaStackItems to fetch.
     */
    orderBy?: IdeaStackItemOrderByWithRelationInput | IdeaStackItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdeaStackItems.
     */
    cursor?: IdeaStackItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaStackItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaStackItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdeaStackItems.
     */
    distinct?: IdeaStackItemScalarFieldEnum | IdeaStackItemScalarFieldEnum[]
  }

  /**
   * IdeaStackItem findMany
   */
  export type IdeaStackItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    /**
     * Filter, which IdeaStackItems to fetch.
     */
    where?: IdeaStackItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaStackItems to fetch.
     */
    orderBy?: IdeaStackItemOrderByWithRelationInput | IdeaStackItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdeaStackItems.
     */
    cursor?: IdeaStackItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaStackItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaStackItems.
     */
    skip?: number
    distinct?: IdeaStackItemScalarFieldEnum | IdeaStackItemScalarFieldEnum[]
  }

  /**
   * IdeaStackItem create
   */
  export type IdeaStackItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    /**
     * The data needed to create a IdeaStackItem.
     */
    data: XOR<IdeaStackItemCreateInput, IdeaStackItemUncheckedCreateInput>
  }

  /**
   * IdeaStackItem createMany
   */
  export type IdeaStackItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdeaStackItems.
     */
    data: IdeaStackItemCreateManyInput | IdeaStackItemCreateManyInput[]
  }

  /**
   * IdeaStackItem createManyAndReturn
   */
  export type IdeaStackItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * The data used to create many IdeaStackItems.
     */
    data: IdeaStackItemCreateManyInput | IdeaStackItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdeaStackItem update
   */
  export type IdeaStackItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    /**
     * The data needed to update a IdeaStackItem.
     */
    data: XOR<IdeaStackItemUpdateInput, IdeaStackItemUncheckedUpdateInput>
    /**
     * Choose, which IdeaStackItem to update.
     */
    where: IdeaStackItemWhereUniqueInput
  }

  /**
   * IdeaStackItem updateMany
   */
  export type IdeaStackItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdeaStackItems.
     */
    data: XOR<IdeaStackItemUpdateManyMutationInput, IdeaStackItemUncheckedUpdateManyInput>
    /**
     * Filter which IdeaStackItems to update
     */
    where?: IdeaStackItemWhereInput
    /**
     * Limit how many IdeaStackItems to update.
     */
    limit?: number
  }

  /**
   * IdeaStackItem updateManyAndReturn
   */
  export type IdeaStackItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * The data used to update IdeaStackItems.
     */
    data: XOR<IdeaStackItemUpdateManyMutationInput, IdeaStackItemUncheckedUpdateManyInput>
    /**
     * Filter which IdeaStackItems to update
     */
    where?: IdeaStackItemWhereInput
    /**
     * Limit how many IdeaStackItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdeaStackItem upsert
   */
  export type IdeaStackItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    /**
     * The filter to search for the IdeaStackItem to update in case it exists.
     */
    where: IdeaStackItemWhereUniqueInput
    /**
     * In case the IdeaStackItem found by the `where` argument doesn't exist, create a new IdeaStackItem with this data.
     */
    create: XOR<IdeaStackItemCreateInput, IdeaStackItemUncheckedCreateInput>
    /**
     * In case the IdeaStackItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdeaStackItemUpdateInput, IdeaStackItemUncheckedUpdateInput>
  }

  /**
   * IdeaStackItem delete
   */
  export type IdeaStackItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
    /**
     * Filter which IdeaStackItem to delete.
     */
    where: IdeaStackItemWhereUniqueInput
  }

  /**
   * IdeaStackItem deleteMany
   */
  export type IdeaStackItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdeaStackItems to delete
     */
    where?: IdeaStackItemWhereInput
    /**
     * Limit how many IdeaStackItems to delete.
     */
    limit?: number
  }

  /**
   * IdeaStackItem without action
   */
  export type IdeaStackItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStackItem
     */
    select?: IdeaStackItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStackItem
     */
    omit?: IdeaStackItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackItemInclude<ExtArgs> | null
  }


  /**
   * Model SwipeEvent
   */

  export type AggregateSwipeEvent = {
    _count: SwipeEventCountAggregateOutputType | null
    _avg: SwipeEventAvgAggregateOutputType | null
    _sum: SwipeEventSumAggregateOutputType | null
    _min: SwipeEventMinAggregateOutputType | null
    _max: SwipeEventMaxAggregateOutputType | null
  }

  export type SwipeEventAvgAggregateOutputType = {
    scoreDelta: number | null
  }

  export type SwipeEventSumAggregateOutputType = {
    scoreDelta: number | null
  }

  export type SwipeEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ideaId: string | null
    stackId: string | null
    action: $Enums.SwipeAction | null
    scoreDelta: number | null
    createdAt: Date | null
  }

  export type SwipeEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ideaId: string | null
    stackId: string | null
    action: $Enums.SwipeAction | null
    scoreDelta: number | null
    createdAt: Date | null
  }

  export type SwipeEventCountAggregateOutputType = {
    id: number
    userId: number
    ideaId: number
    stackId: number
    action: number
    scoreDelta: number
    createdAt: number
    _all: number
  }


  export type SwipeEventAvgAggregateInputType = {
    scoreDelta?: true
  }

  export type SwipeEventSumAggregateInputType = {
    scoreDelta?: true
  }

  export type SwipeEventMinAggregateInputType = {
    id?: true
    userId?: true
    ideaId?: true
    stackId?: true
    action?: true
    scoreDelta?: true
    createdAt?: true
  }

  export type SwipeEventMaxAggregateInputType = {
    id?: true
    userId?: true
    ideaId?: true
    stackId?: true
    action?: true
    scoreDelta?: true
    createdAt?: true
  }

  export type SwipeEventCountAggregateInputType = {
    id?: true
    userId?: true
    ideaId?: true
    stackId?: true
    action?: true
    scoreDelta?: true
    createdAt?: true
    _all?: true
  }

  export type SwipeEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwipeEvent to aggregate.
     */
    where?: SwipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwipeEvents to fetch.
     */
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwipeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwipeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SwipeEvents
    **/
    _count?: true | SwipeEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SwipeEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SwipeEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwipeEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwipeEventMaxAggregateInputType
  }

  export type GetSwipeEventAggregateType<T extends SwipeEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSwipeEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwipeEvent[P]>
      : GetScalarType<T[P], AggregateSwipeEvent[P]>
  }




  export type SwipeEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeEventWhereInput
    orderBy?: SwipeEventOrderByWithAggregationInput | SwipeEventOrderByWithAggregationInput[]
    by: SwipeEventScalarFieldEnum[] | SwipeEventScalarFieldEnum
    having?: SwipeEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwipeEventCountAggregateInputType | true
    _avg?: SwipeEventAvgAggregateInputType
    _sum?: SwipeEventSumAggregateInputType
    _min?: SwipeEventMinAggregateInputType
    _max?: SwipeEventMaxAggregateInputType
  }

  export type SwipeEventGroupByOutputType = {
    id: string
    userId: string
    ideaId: string
    stackId: string | null
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt: Date
    _count: SwipeEventCountAggregateOutputType | null
    _avg: SwipeEventAvgAggregateOutputType | null
    _sum: SwipeEventSumAggregateOutputType | null
    _min: SwipeEventMinAggregateOutputType | null
    _max: SwipeEventMaxAggregateOutputType | null
  }

  type GetSwipeEventGroupByPayload<T extends SwipeEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwipeEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwipeEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwipeEventGroupByOutputType[P]>
            : GetScalarType<T[P], SwipeEventGroupByOutputType[P]>
        }
      >
    >


  export type SwipeEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ideaId?: boolean
    stackId?: boolean
    action?: boolean
    scoreDelta?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    stack?: boolean | SwipeEvent$stackArgs<ExtArgs>
  }, ExtArgs["result"]["swipeEvent"]>

  export type SwipeEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ideaId?: boolean
    stackId?: boolean
    action?: boolean
    scoreDelta?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    stack?: boolean | SwipeEvent$stackArgs<ExtArgs>
  }, ExtArgs["result"]["swipeEvent"]>

  export type SwipeEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ideaId?: boolean
    stackId?: boolean
    action?: boolean
    scoreDelta?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    stack?: boolean | SwipeEvent$stackArgs<ExtArgs>
  }, ExtArgs["result"]["swipeEvent"]>

  export type SwipeEventSelectScalar = {
    id?: boolean
    userId?: boolean
    ideaId?: boolean
    stackId?: boolean
    action?: boolean
    scoreDelta?: boolean
    createdAt?: boolean
  }

  export type SwipeEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ideaId" | "stackId" | "action" | "scoreDelta" | "createdAt", ExtArgs["result"]["swipeEvent"]>
  export type SwipeEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    stack?: boolean | SwipeEvent$stackArgs<ExtArgs>
  }
  export type SwipeEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    stack?: boolean | SwipeEvent$stackArgs<ExtArgs>
  }
  export type SwipeEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    stack?: boolean | SwipeEvent$stackArgs<ExtArgs>
  }

  export type $SwipeEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SwipeEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      idea: Prisma.$IdeaPayload<ExtArgs>
      stack: Prisma.$IdeaStackPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ideaId: string
      stackId: string | null
      action: $Enums.SwipeAction
      scoreDelta: number
      createdAt: Date
    }, ExtArgs["result"]["swipeEvent"]>
    composites: {}
  }

  type SwipeEventGetPayload<S extends boolean | null | undefined | SwipeEventDefaultArgs> = $Result.GetResult<Prisma.$SwipeEventPayload, S>

  type SwipeEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwipeEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwipeEventCountAggregateInputType | true
    }

  export interface SwipeEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SwipeEvent'], meta: { name: 'SwipeEvent' } }
    /**
     * Find zero or one SwipeEvent that matches the filter.
     * @param {SwipeEventFindUniqueArgs} args - Arguments to find a SwipeEvent
     * @example
     * // Get one SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwipeEventFindUniqueArgs>(args: SelectSubset<T, SwipeEventFindUniqueArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SwipeEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwipeEventFindUniqueOrThrowArgs} args - Arguments to find a SwipeEvent
     * @example
     * // Get one SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwipeEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SwipeEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwipeEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventFindFirstArgs} args - Arguments to find a SwipeEvent
     * @example
     * // Get one SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwipeEventFindFirstArgs>(args?: SelectSubset<T, SwipeEventFindFirstArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwipeEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventFindFirstOrThrowArgs} args - Arguments to find a SwipeEvent
     * @example
     * // Get one SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwipeEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SwipeEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SwipeEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SwipeEvents
     * const swipeEvents = await prisma.swipeEvent.findMany()
     * 
     * // Get first 10 SwipeEvents
     * const swipeEvents = await prisma.swipeEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swipeEventWithIdOnly = await prisma.swipeEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwipeEventFindManyArgs>(args?: SelectSubset<T, SwipeEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SwipeEvent.
     * @param {SwipeEventCreateArgs} args - Arguments to create a SwipeEvent.
     * @example
     * // Create one SwipeEvent
     * const SwipeEvent = await prisma.swipeEvent.create({
     *   data: {
     *     // ... data to create a SwipeEvent
     *   }
     * })
     * 
     */
    create<T extends SwipeEventCreateArgs>(args: SelectSubset<T, SwipeEventCreateArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SwipeEvents.
     * @param {SwipeEventCreateManyArgs} args - Arguments to create many SwipeEvents.
     * @example
     * // Create many SwipeEvents
     * const swipeEvent = await prisma.swipeEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwipeEventCreateManyArgs>(args?: SelectSubset<T, SwipeEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SwipeEvents and returns the data saved in the database.
     * @param {SwipeEventCreateManyAndReturnArgs} args - Arguments to create many SwipeEvents.
     * @example
     * // Create many SwipeEvents
     * const swipeEvent = await prisma.swipeEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SwipeEvents and only return the `id`
     * const swipeEventWithIdOnly = await prisma.swipeEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SwipeEventCreateManyAndReturnArgs>(args?: SelectSubset<T, SwipeEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SwipeEvent.
     * @param {SwipeEventDeleteArgs} args - Arguments to delete one SwipeEvent.
     * @example
     * // Delete one SwipeEvent
     * const SwipeEvent = await prisma.swipeEvent.delete({
     *   where: {
     *     // ... filter to delete one SwipeEvent
     *   }
     * })
     * 
     */
    delete<T extends SwipeEventDeleteArgs>(args: SelectSubset<T, SwipeEventDeleteArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SwipeEvent.
     * @param {SwipeEventUpdateArgs} args - Arguments to update one SwipeEvent.
     * @example
     * // Update one SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwipeEventUpdateArgs>(args: SelectSubset<T, SwipeEventUpdateArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SwipeEvents.
     * @param {SwipeEventDeleteManyArgs} args - Arguments to filter SwipeEvents to delete.
     * @example
     * // Delete a few SwipeEvents
     * const { count } = await prisma.swipeEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwipeEventDeleteManyArgs>(args?: SelectSubset<T, SwipeEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwipeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SwipeEvents
     * const swipeEvent = await prisma.swipeEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwipeEventUpdateManyArgs>(args: SelectSubset<T, SwipeEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwipeEvents and returns the data updated in the database.
     * @param {SwipeEventUpdateManyAndReturnArgs} args - Arguments to update many SwipeEvents.
     * @example
     * // Update many SwipeEvents
     * const swipeEvent = await prisma.swipeEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SwipeEvents and only return the `id`
     * const swipeEventWithIdOnly = await prisma.swipeEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SwipeEventUpdateManyAndReturnArgs>(args: SelectSubset<T, SwipeEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SwipeEvent.
     * @param {SwipeEventUpsertArgs} args - Arguments to update or create a SwipeEvent.
     * @example
     * // Update or create a SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.upsert({
     *   create: {
     *     // ... data to create a SwipeEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SwipeEvent we want to update
     *   }
     * })
     */
    upsert<T extends SwipeEventUpsertArgs>(args: SelectSubset<T, SwipeEventUpsertArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SwipeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventCountArgs} args - Arguments to filter SwipeEvents to count.
     * @example
     * // Count the number of SwipeEvents
     * const count = await prisma.swipeEvent.count({
     *   where: {
     *     // ... the filter for the SwipeEvents we want to count
     *   }
     * })
    **/
    count<T extends SwipeEventCountArgs>(
      args?: Subset<T, SwipeEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwipeEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SwipeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SwipeEventAggregateArgs>(args: Subset<T, SwipeEventAggregateArgs>): Prisma.PrismaPromise<GetSwipeEventAggregateType<T>>

    /**
     * Group by SwipeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SwipeEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwipeEventGroupByArgs['orderBy'] }
        : { orderBy?: SwipeEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SwipeEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwipeEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SwipeEvent model
   */
  readonly fields: SwipeEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SwipeEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwipeEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    idea<T extends IdeaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdeaDefaultArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stack<T extends SwipeEvent$stackArgs<ExtArgs> = {}>(args?: Subset<T, SwipeEvent$stackArgs<ExtArgs>>): Prisma__IdeaStackClient<$Result.GetResult<Prisma.$IdeaStackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SwipeEvent model
   */
  interface SwipeEventFieldRefs {
    readonly id: FieldRef<"SwipeEvent", 'String'>
    readonly userId: FieldRef<"SwipeEvent", 'String'>
    readonly ideaId: FieldRef<"SwipeEvent", 'String'>
    readonly stackId: FieldRef<"SwipeEvent", 'String'>
    readonly action: FieldRef<"SwipeEvent", 'SwipeAction'>
    readonly scoreDelta: FieldRef<"SwipeEvent", 'Float'>
    readonly createdAt: FieldRef<"SwipeEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SwipeEvent findUnique
   */
  export type SwipeEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter, which SwipeEvent to fetch.
     */
    where: SwipeEventWhereUniqueInput
  }

  /**
   * SwipeEvent findUniqueOrThrow
   */
  export type SwipeEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter, which SwipeEvent to fetch.
     */
    where: SwipeEventWhereUniqueInput
  }

  /**
   * SwipeEvent findFirst
   */
  export type SwipeEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter, which SwipeEvent to fetch.
     */
    where?: SwipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwipeEvents to fetch.
     */
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwipeEvents.
     */
    cursor?: SwipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwipeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwipeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwipeEvents.
     */
    distinct?: SwipeEventScalarFieldEnum | SwipeEventScalarFieldEnum[]
  }

  /**
   * SwipeEvent findFirstOrThrow
   */
  export type SwipeEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter, which SwipeEvent to fetch.
     */
    where?: SwipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwipeEvents to fetch.
     */
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwipeEvents.
     */
    cursor?: SwipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwipeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwipeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwipeEvents.
     */
    distinct?: SwipeEventScalarFieldEnum | SwipeEventScalarFieldEnum[]
  }

  /**
   * SwipeEvent findMany
   */
  export type SwipeEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter, which SwipeEvents to fetch.
     */
    where?: SwipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwipeEvents to fetch.
     */
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SwipeEvents.
     */
    cursor?: SwipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwipeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwipeEvents.
     */
    skip?: number
    distinct?: SwipeEventScalarFieldEnum | SwipeEventScalarFieldEnum[]
  }

  /**
   * SwipeEvent create
   */
  export type SwipeEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SwipeEvent.
     */
    data: XOR<SwipeEventCreateInput, SwipeEventUncheckedCreateInput>
  }

  /**
   * SwipeEvent createMany
   */
  export type SwipeEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SwipeEvents.
     */
    data: SwipeEventCreateManyInput | SwipeEventCreateManyInput[]
  }

  /**
   * SwipeEvent createManyAndReturn
   */
  export type SwipeEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * The data used to create many SwipeEvents.
     */
    data: SwipeEventCreateManyInput | SwipeEventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SwipeEvent update
   */
  export type SwipeEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SwipeEvent.
     */
    data: XOR<SwipeEventUpdateInput, SwipeEventUncheckedUpdateInput>
    /**
     * Choose, which SwipeEvent to update.
     */
    where: SwipeEventWhereUniqueInput
  }

  /**
   * SwipeEvent updateMany
   */
  export type SwipeEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SwipeEvents.
     */
    data: XOR<SwipeEventUpdateManyMutationInput, SwipeEventUncheckedUpdateManyInput>
    /**
     * Filter which SwipeEvents to update
     */
    where?: SwipeEventWhereInput
    /**
     * Limit how many SwipeEvents to update.
     */
    limit?: number
  }

  /**
   * SwipeEvent updateManyAndReturn
   */
  export type SwipeEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * The data used to update SwipeEvents.
     */
    data: XOR<SwipeEventUpdateManyMutationInput, SwipeEventUncheckedUpdateManyInput>
    /**
     * Filter which SwipeEvents to update
     */
    where?: SwipeEventWhereInput
    /**
     * Limit how many SwipeEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SwipeEvent upsert
   */
  export type SwipeEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SwipeEvent to update in case it exists.
     */
    where: SwipeEventWhereUniqueInput
    /**
     * In case the SwipeEvent found by the `where` argument doesn't exist, create a new SwipeEvent with this data.
     */
    create: XOR<SwipeEventCreateInput, SwipeEventUncheckedCreateInput>
    /**
     * In case the SwipeEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwipeEventUpdateInput, SwipeEventUncheckedUpdateInput>
  }

  /**
   * SwipeEvent delete
   */
  export type SwipeEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter which SwipeEvent to delete.
     */
    where: SwipeEventWhereUniqueInput
  }

  /**
   * SwipeEvent deleteMany
   */
  export type SwipeEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwipeEvents to delete
     */
    where?: SwipeEventWhereInput
    /**
     * Limit how many SwipeEvents to delete.
     */
    limit?: number
  }

  /**
   * SwipeEvent.stack
   */
  export type SwipeEvent$stackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaStack
     */
    select?: IdeaStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaStack
     */
    omit?: IdeaStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaStackInclude<ExtArgs> | null
    where?: IdeaStackWhereInput
  }

  /**
   * SwipeEvent without action
   */
  export type SwipeEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ideaId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ideaId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    ideaId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    ideaId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    ideaId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    ideaId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    ideaId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ideaId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ideaId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ideaId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    ideaId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ideaId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      idea: Prisma.$IdeaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ideaId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    idea<T extends IdeaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdeaDefaultArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly ideaId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model PreferenceUpdateLog
   */

  export type AggregatePreferenceUpdateLog = {
    _count: PreferenceUpdateLogCountAggregateOutputType | null
    _min: PreferenceUpdateLogMinAggregateOutputType | null
    _max: PreferenceUpdateLogMaxAggregateOutputType | null
  }

  export type PreferenceUpdateLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type PreferenceUpdateLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type PreferenceUpdateLogCountAggregateOutputType = {
    id: number
    userId: number
    reason: number
    previousVector: number
    updatedVector: number
    createdAt: number
    _all: number
  }


  export type PreferenceUpdateLogMinAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    createdAt?: true
  }

  export type PreferenceUpdateLogMaxAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    createdAt?: true
  }

  export type PreferenceUpdateLogCountAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    previousVector?: true
    updatedVector?: true
    createdAt?: true
    _all?: true
  }

  export type PreferenceUpdateLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreferenceUpdateLog to aggregate.
     */
    where?: PreferenceUpdateLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferenceUpdateLogs to fetch.
     */
    orderBy?: PreferenceUpdateLogOrderByWithRelationInput | PreferenceUpdateLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferenceUpdateLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferenceUpdateLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferenceUpdateLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PreferenceUpdateLogs
    **/
    _count?: true | PreferenceUpdateLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferenceUpdateLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferenceUpdateLogMaxAggregateInputType
  }

  export type GetPreferenceUpdateLogAggregateType<T extends PreferenceUpdateLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePreferenceUpdateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreferenceUpdateLog[P]>
      : GetScalarType<T[P], AggregatePreferenceUpdateLog[P]>
  }




  export type PreferenceUpdateLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferenceUpdateLogWhereInput
    orderBy?: PreferenceUpdateLogOrderByWithAggregationInput | PreferenceUpdateLogOrderByWithAggregationInput[]
    by: PreferenceUpdateLogScalarFieldEnum[] | PreferenceUpdateLogScalarFieldEnum
    having?: PreferenceUpdateLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferenceUpdateLogCountAggregateInputType | true
    _min?: PreferenceUpdateLogMinAggregateInputType
    _max?: PreferenceUpdateLogMaxAggregateInputType
  }

  export type PreferenceUpdateLogGroupByOutputType = {
    id: string
    userId: string
    reason: string
    previousVector: JsonValue | null
    updatedVector: JsonValue
    createdAt: Date
    _count: PreferenceUpdateLogCountAggregateOutputType | null
    _min: PreferenceUpdateLogMinAggregateOutputType | null
    _max: PreferenceUpdateLogMaxAggregateOutputType | null
  }

  type GetPreferenceUpdateLogGroupByPayload<T extends PreferenceUpdateLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferenceUpdateLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferenceUpdateLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferenceUpdateLogGroupByOutputType[P]>
            : GetScalarType<T[P], PreferenceUpdateLogGroupByOutputType[P]>
        }
      >
    >


  export type PreferenceUpdateLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    previousVector?: boolean
    updatedVector?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferenceUpdateLog"]>

  export type PreferenceUpdateLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    previousVector?: boolean
    updatedVector?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferenceUpdateLog"]>

  export type PreferenceUpdateLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    previousVector?: boolean
    updatedVector?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferenceUpdateLog"]>

  export type PreferenceUpdateLogSelectScalar = {
    id?: boolean
    userId?: boolean
    reason?: boolean
    previousVector?: boolean
    updatedVector?: boolean
    createdAt?: boolean
  }

  export type PreferenceUpdateLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reason" | "previousVector" | "updatedVector" | "createdAt", ExtArgs["result"]["preferenceUpdateLog"]>
  export type PreferenceUpdateLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferenceUpdateLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferenceUpdateLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PreferenceUpdateLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PreferenceUpdateLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reason: string
      previousVector: Prisma.JsonValue | null
      updatedVector: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["preferenceUpdateLog"]>
    composites: {}
  }

  type PreferenceUpdateLogGetPayload<S extends boolean | null | undefined | PreferenceUpdateLogDefaultArgs> = $Result.GetResult<Prisma.$PreferenceUpdateLogPayload, S>

  type PreferenceUpdateLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferenceUpdateLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferenceUpdateLogCountAggregateInputType | true
    }

  export interface PreferenceUpdateLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PreferenceUpdateLog'], meta: { name: 'PreferenceUpdateLog' } }
    /**
     * Find zero or one PreferenceUpdateLog that matches the filter.
     * @param {PreferenceUpdateLogFindUniqueArgs} args - Arguments to find a PreferenceUpdateLog
     * @example
     * // Get one PreferenceUpdateLog
     * const preferenceUpdateLog = await prisma.preferenceUpdateLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferenceUpdateLogFindUniqueArgs>(args: SelectSubset<T, PreferenceUpdateLogFindUniqueArgs<ExtArgs>>): Prisma__PreferenceUpdateLogClient<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PreferenceUpdateLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferenceUpdateLogFindUniqueOrThrowArgs} args - Arguments to find a PreferenceUpdateLog
     * @example
     * // Get one PreferenceUpdateLog
     * const preferenceUpdateLog = await prisma.preferenceUpdateLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferenceUpdateLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferenceUpdateLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferenceUpdateLogClient<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreferenceUpdateLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceUpdateLogFindFirstArgs} args - Arguments to find a PreferenceUpdateLog
     * @example
     * // Get one PreferenceUpdateLog
     * const preferenceUpdateLog = await prisma.preferenceUpdateLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferenceUpdateLogFindFirstArgs>(args?: SelectSubset<T, PreferenceUpdateLogFindFirstArgs<ExtArgs>>): Prisma__PreferenceUpdateLogClient<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreferenceUpdateLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceUpdateLogFindFirstOrThrowArgs} args - Arguments to find a PreferenceUpdateLog
     * @example
     * // Get one PreferenceUpdateLog
     * const preferenceUpdateLog = await prisma.preferenceUpdateLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferenceUpdateLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferenceUpdateLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferenceUpdateLogClient<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PreferenceUpdateLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceUpdateLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreferenceUpdateLogs
     * const preferenceUpdateLogs = await prisma.preferenceUpdateLog.findMany()
     * 
     * // Get first 10 PreferenceUpdateLogs
     * const preferenceUpdateLogs = await prisma.preferenceUpdateLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferenceUpdateLogWithIdOnly = await prisma.preferenceUpdateLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferenceUpdateLogFindManyArgs>(args?: SelectSubset<T, PreferenceUpdateLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PreferenceUpdateLog.
     * @param {PreferenceUpdateLogCreateArgs} args - Arguments to create a PreferenceUpdateLog.
     * @example
     * // Create one PreferenceUpdateLog
     * const PreferenceUpdateLog = await prisma.preferenceUpdateLog.create({
     *   data: {
     *     // ... data to create a PreferenceUpdateLog
     *   }
     * })
     * 
     */
    create<T extends PreferenceUpdateLogCreateArgs>(args: SelectSubset<T, PreferenceUpdateLogCreateArgs<ExtArgs>>): Prisma__PreferenceUpdateLogClient<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PreferenceUpdateLogs.
     * @param {PreferenceUpdateLogCreateManyArgs} args - Arguments to create many PreferenceUpdateLogs.
     * @example
     * // Create many PreferenceUpdateLogs
     * const preferenceUpdateLog = await prisma.preferenceUpdateLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferenceUpdateLogCreateManyArgs>(args?: SelectSubset<T, PreferenceUpdateLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PreferenceUpdateLogs and returns the data saved in the database.
     * @param {PreferenceUpdateLogCreateManyAndReturnArgs} args - Arguments to create many PreferenceUpdateLogs.
     * @example
     * // Create many PreferenceUpdateLogs
     * const preferenceUpdateLog = await prisma.preferenceUpdateLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PreferenceUpdateLogs and only return the `id`
     * const preferenceUpdateLogWithIdOnly = await prisma.preferenceUpdateLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferenceUpdateLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferenceUpdateLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PreferenceUpdateLog.
     * @param {PreferenceUpdateLogDeleteArgs} args - Arguments to delete one PreferenceUpdateLog.
     * @example
     * // Delete one PreferenceUpdateLog
     * const PreferenceUpdateLog = await prisma.preferenceUpdateLog.delete({
     *   where: {
     *     // ... filter to delete one PreferenceUpdateLog
     *   }
     * })
     * 
     */
    delete<T extends PreferenceUpdateLogDeleteArgs>(args: SelectSubset<T, PreferenceUpdateLogDeleteArgs<ExtArgs>>): Prisma__PreferenceUpdateLogClient<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PreferenceUpdateLog.
     * @param {PreferenceUpdateLogUpdateArgs} args - Arguments to update one PreferenceUpdateLog.
     * @example
     * // Update one PreferenceUpdateLog
     * const preferenceUpdateLog = await prisma.preferenceUpdateLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferenceUpdateLogUpdateArgs>(args: SelectSubset<T, PreferenceUpdateLogUpdateArgs<ExtArgs>>): Prisma__PreferenceUpdateLogClient<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PreferenceUpdateLogs.
     * @param {PreferenceUpdateLogDeleteManyArgs} args - Arguments to filter PreferenceUpdateLogs to delete.
     * @example
     * // Delete a few PreferenceUpdateLogs
     * const { count } = await prisma.preferenceUpdateLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferenceUpdateLogDeleteManyArgs>(args?: SelectSubset<T, PreferenceUpdateLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreferenceUpdateLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceUpdateLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreferenceUpdateLogs
     * const preferenceUpdateLog = await prisma.preferenceUpdateLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferenceUpdateLogUpdateManyArgs>(args: SelectSubset<T, PreferenceUpdateLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreferenceUpdateLogs and returns the data updated in the database.
     * @param {PreferenceUpdateLogUpdateManyAndReturnArgs} args - Arguments to update many PreferenceUpdateLogs.
     * @example
     * // Update many PreferenceUpdateLogs
     * const preferenceUpdateLog = await prisma.preferenceUpdateLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PreferenceUpdateLogs and only return the `id`
     * const preferenceUpdateLogWithIdOnly = await prisma.preferenceUpdateLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreferenceUpdateLogUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferenceUpdateLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PreferenceUpdateLog.
     * @param {PreferenceUpdateLogUpsertArgs} args - Arguments to update or create a PreferenceUpdateLog.
     * @example
     * // Update or create a PreferenceUpdateLog
     * const preferenceUpdateLog = await prisma.preferenceUpdateLog.upsert({
     *   create: {
     *     // ... data to create a PreferenceUpdateLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreferenceUpdateLog we want to update
     *   }
     * })
     */
    upsert<T extends PreferenceUpdateLogUpsertArgs>(args: SelectSubset<T, PreferenceUpdateLogUpsertArgs<ExtArgs>>): Prisma__PreferenceUpdateLogClient<$Result.GetResult<Prisma.$PreferenceUpdateLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PreferenceUpdateLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceUpdateLogCountArgs} args - Arguments to filter PreferenceUpdateLogs to count.
     * @example
     * // Count the number of PreferenceUpdateLogs
     * const count = await prisma.preferenceUpdateLog.count({
     *   where: {
     *     // ... the filter for the PreferenceUpdateLogs we want to count
     *   }
     * })
    **/
    count<T extends PreferenceUpdateLogCountArgs>(
      args?: Subset<T, PreferenceUpdateLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferenceUpdateLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreferenceUpdateLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceUpdateLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreferenceUpdateLogAggregateArgs>(args: Subset<T, PreferenceUpdateLogAggregateArgs>): Prisma.PrismaPromise<GetPreferenceUpdateLogAggregateType<T>>

    /**
     * Group by PreferenceUpdateLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceUpdateLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreferenceUpdateLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferenceUpdateLogGroupByArgs['orderBy'] }
        : { orderBy?: PreferenceUpdateLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreferenceUpdateLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferenceUpdateLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PreferenceUpdateLog model
   */
  readonly fields: PreferenceUpdateLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PreferenceUpdateLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferenceUpdateLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PreferenceUpdateLog model
   */
  interface PreferenceUpdateLogFieldRefs {
    readonly id: FieldRef<"PreferenceUpdateLog", 'String'>
    readonly userId: FieldRef<"PreferenceUpdateLog", 'String'>
    readonly reason: FieldRef<"PreferenceUpdateLog", 'String'>
    readonly previousVector: FieldRef<"PreferenceUpdateLog", 'Json'>
    readonly updatedVector: FieldRef<"PreferenceUpdateLog", 'Json'>
    readonly createdAt: FieldRef<"PreferenceUpdateLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PreferenceUpdateLog findUnique
   */
  export type PreferenceUpdateLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
    /**
     * Filter, which PreferenceUpdateLog to fetch.
     */
    where: PreferenceUpdateLogWhereUniqueInput
  }

  /**
   * PreferenceUpdateLog findUniqueOrThrow
   */
  export type PreferenceUpdateLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
    /**
     * Filter, which PreferenceUpdateLog to fetch.
     */
    where: PreferenceUpdateLogWhereUniqueInput
  }

  /**
   * PreferenceUpdateLog findFirst
   */
  export type PreferenceUpdateLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
    /**
     * Filter, which PreferenceUpdateLog to fetch.
     */
    where?: PreferenceUpdateLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferenceUpdateLogs to fetch.
     */
    orderBy?: PreferenceUpdateLogOrderByWithRelationInput | PreferenceUpdateLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreferenceUpdateLogs.
     */
    cursor?: PreferenceUpdateLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferenceUpdateLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferenceUpdateLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferenceUpdateLogs.
     */
    distinct?: PreferenceUpdateLogScalarFieldEnum | PreferenceUpdateLogScalarFieldEnum[]
  }

  /**
   * PreferenceUpdateLog findFirstOrThrow
   */
  export type PreferenceUpdateLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
    /**
     * Filter, which PreferenceUpdateLog to fetch.
     */
    where?: PreferenceUpdateLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferenceUpdateLogs to fetch.
     */
    orderBy?: PreferenceUpdateLogOrderByWithRelationInput | PreferenceUpdateLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreferenceUpdateLogs.
     */
    cursor?: PreferenceUpdateLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferenceUpdateLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferenceUpdateLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferenceUpdateLogs.
     */
    distinct?: PreferenceUpdateLogScalarFieldEnum | PreferenceUpdateLogScalarFieldEnum[]
  }

  /**
   * PreferenceUpdateLog findMany
   */
  export type PreferenceUpdateLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
    /**
     * Filter, which PreferenceUpdateLogs to fetch.
     */
    where?: PreferenceUpdateLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferenceUpdateLogs to fetch.
     */
    orderBy?: PreferenceUpdateLogOrderByWithRelationInput | PreferenceUpdateLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PreferenceUpdateLogs.
     */
    cursor?: PreferenceUpdateLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferenceUpdateLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferenceUpdateLogs.
     */
    skip?: number
    distinct?: PreferenceUpdateLogScalarFieldEnum | PreferenceUpdateLogScalarFieldEnum[]
  }

  /**
   * PreferenceUpdateLog create
   */
  export type PreferenceUpdateLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
    /**
     * The data needed to create a PreferenceUpdateLog.
     */
    data: XOR<PreferenceUpdateLogCreateInput, PreferenceUpdateLogUncheckedCreateInput>
  }

  /**
   * PreferenceUpdateLog createMany
   */
  export type PreferenceUpdateLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreferenceUpdateLogs.
     */
    data: PreferenceUpdateLogCreateManyInput | PreferenceUpdateLogCreateManyInput[]
  }

  /**
   * PreferenceUpdateLog createManyAndReturn
   */
  export type PreferenceUpdateLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * The data used to create many PreferenceUpdateLogs.
     */
    data: PreferenceUpdateLogCreateManyInput | PreferenceUpdateLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreferenceUpdateLog update
   */
  export type PreferenceUpdateLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
    /**
     * The data needed to update a PreferenceUpdateLog.
     */
    data: XOR<PreferenceUpdateLogUpdateInput, PreferenceUpdateLogUncheckedUpdateInput>
    /**
     * Choose, which PreferenceUpdateLog to update.
     */
    where: PreferenceUpdateLogWhereUniqueInput
  }

  /**
   * PreferenceUpdateLog updateMany
   */
  export type PreferenceUpdateLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PreferenceUpdateLogs.
     */
    data: XOR<PreferenceUpdateLogUpdateManyMutationInput, PreferenceUpdateLogUncheckedUpdateManyInput>
    /**
     * Filter which PreferenceUpdateLogs to update
     */
    where?: PreferenceUpdateLogWhereInput
    /**
     * Limit how many PreferenceUpdateLogs to update.
     */
    limit?: number
  }

  /**
   * PreferenceUpdateLog updateManyAndReturn
   */
  export type PreferenceUpdateLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * The data used to update PreferenceUpdateLogs.
     */
    data: XOR<PreferenceUpdateLogUpdateManyMutationInput, PreferenceUpdateLogUncheckedUpdateManyInput>
    /**
     * Filter which PreferenceUpdateLogs to update
     */
    where?: PreferenceUpdateLogWhereInput
    /**
     * Limit how many PreferenceUpdateLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreferenceUpdateLog upsert
   */
  export type PreferenceUpdateLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
    /**
     * The filter to search for the PreferenceUpdateLog to update in case it exists.
     */
    where: PreferenceUpdateLogWhereUniqueInput
    /**
     * In case the PreferenceUpdateLog found by the `where` argument doesn't exist, create a new PreferenceUpdateLog with this data.
     */
    create: XOR<PreferenceUpdateLogCreateInput, PreferenceUpdateLogUncheckedCreateInput>
    /**
     * In case the PreferenceUpdateLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferenceUpdateLogUpdateInput, PreferenceUpdateLogUncheckedUpdateInput>
  }

  /**
   * PreferenceUpdateLog delete
   */
  export type PreferenceUpdateLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
    /**
     * Filter which PreferenceUpdateLog to delete.
     */
    where: PreferenceUpdateLogWhereUniqueInput
  }

  /**
   * PreferenceUpdateLog deleteMany
   */
  export type PreferenceUpdateLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreferenceUpdateLogs to delete
     */
    where?: PreferenceUpdateLogWhereInput
    /**
     * Limit how many PreferenceUpdateLogs to delete.
     */
    limit?: number
  }

  /**
   * PreferenceUpdateLog without action
   */
  export type PreferenceUpdateLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferenceUpdateLog
     */
    select?: PreferenceUpdateLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferenceUpdateLog
     */
    omit?: PreferenceUpdateLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceUpdateLogInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    onboardingCompleted: 'onboardingCompleted',
    preferenceVector: 'preferenceVector'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FieldCatalogScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    label: 'label',
    isCustom: 'isCustom',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FieldCatalogScalarFieldEnum = (typeof FieldCatalogScalarFieldEnum)[keyof typeof FieldCatalogScalarFieldEnum]


  export const UserFieldSelectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fieldId: 'fieldId',
    createdAt: 'createdAt'
  };

  export type UserFieldSelectionScalarFieldEnum = (typeof UserFieldSelectionScalarFieldEnum)[keyof typeof UserFieldSelectionScalarFieldEnum]


  export const IdeaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    vector: 'vector',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fieldId: 'fieldId'
  };

  export type IdeaScalarFieldEnum = (typeof IdeaScalarFieldEnum)[keyof typeof IdeaScalarFieldEnum]


  export const IdeaChunkEmbeddingScalarFieldEnum: {
    id: 'id',
    ideaId: 'ideaId',
    chunkIndex: 'chunkIndex',
    content: 'content',
    vector: 'vector',
    createdAt: 'createdAt'
  };

  export type IdeaChunkEmbeddingScalarFieldEnum = (typeof IdeaChunkEmbeddingScalarFieldEnum)[keyof typeof IdeaChunkEmbeddingScalarFieldEnum]


  export const IdeaStackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    refreshedAt: 'refreshedAt',
    expiresAt: 'expiresAt'
  };

  export type IdeaStackScalarFieldEnum = (typeof IdeaStackScalarFieldEnum)[keyof typeof IdeaStackScalarFieldEnum]


  export const IdeaStackItemScalarFieldEnum: {
    id: 'id',
    stackId: 'stackId',
    ideaId: 'ideaId',
    position: 'position'
  };

  export type IdeaStackItemScalarFieldEnum = (typeof IdeaStackItemScalarFieldEnum)[keyof typeof IdeaStackItemScalarFieldEnum]


  export const SwipeEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ideaId: 'ideaId',
    stackId: 'stackId',
    action: 'action',
    scoreDelta: 'scoreDelta',
    createdAt: 'createdAt'
  };

  export type SwipeEventScalarFieldEnum = (typeof SwipeEventScalarFieldEnum)[keyof typeof SwipeEventScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ideaId: 'ideaId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const PreferenceUpdateLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reason: 'reason',
    previousVector: 'previousVector',
    updatedVector: 'updatedVector',
    createdAt: 'createdAt'
  };

  export type PreferenceUpdateLogScalarFieldEnum = (typeof PreferenceUpdateLogScalarFieldEnum)[keyof typeof PreferenceUpdateLogScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'SwipeAction'
   */
  export type EnumSwipeActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeAction'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    onboardingCompleted?: BoolFilter<"User"> | boolean
    preferenceVector?: JsonNullableFilter<"User">
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    fieldSelections?: UserFieldSelectionListRelationFilter
    stacks?: IdeaStackListRelationFilter
    swipeEvents?: SwipeEventListRelationFilter
    favorites?: FavoriteListRelationFilter
    preferenceLogs?: PreferenceUpdateLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboardingCompleted?: SortOrder
    preferenceVector?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    fieldSelections?: UserFieldSelectionOrderByRelationAggregateInput
    stacks?: IdeaStackOrderByRelationAggregateInput
    swipeEvents?: SwipeEventOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    preferenceLogs?: PreferenceUpdateLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    onboardingCompleted?: BoolFilter<"User"> | boolean
    preferenceVector?: JsonNullableFilter<"User">
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    fieldSelections?: UserFieldSelectionListRelationFilter
    stacks?: IdeaStackListRelationFilter
    swipeEvents?: SwipeEventListRelationFilter
    favorites?: FavoriteListRelationFilter
    preferenceLogs?: PreferenceUpdateLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboardingCompleted?: SortOrder
    preferenceVector?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    onboardingCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    preferenceVector?: JsonNullableWithAggregatesFilter<"User">
  }

  export type FieldCatalogWhereInput = {
    AND?: FieldCatalogWhereInput | FieldCatalogWhereInput[]
    OR?: FieldCatalogWhereInput[]
    NOT?: FieldCatalogWhereInput | FieldCatalogWhereInput[]
    id?: StringFilter<"FieldCatalog"> | string
    slug?: StringFilter<"FieldCatalog"> | string
    label?: StringFilter<"FieldCatalog"> | string
    isCustom?: BoolFilter<"FieldCatalog"> | boolean
    createdAt?: DateTimeFilter<"FieldCatalog"> | Date | string
    updatedAt?: DateTimeFilter<"FieldCatalog"> | Date | string
    userSelections?: UserFieldSelectionListRelationFilter
    ideas?: IdeaListRelationFilter
  }

  export type FieldCatalogOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    isCustom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSelections?: UserFieldSelectionOrderByRelationAggregateInput
    ideas?: IdeaOrderByRelationAggregateInput
  }

  export type FieldCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: FieldCatalogWhereInput | FieldCatalogWhereInput[]
    OR?: FieldCatalogWhereInput[]
    NOT?: FieldCatalogWhereInput | FieldCatalogWhereInput[]
    label?: StringFilter<"FieldCatalog"> | string
    isCustom?: BoolFilter<"FieldCatalog"> | boolean
    createdAt?: DateTimeFilter<"FieldCatalog"> | Date | string
    updatedAt?: DateTimeFilter<"FieldCatalog"> | Date | string
    userSelections?: UserFieldSelectionListRelationFilter
    ideas?: IdeaListRelationFilter
  }, "id" | "slug">

  export type FieldCatalogOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    isCustom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FieldCatalogCountOrderByAggregateInput
    _max?: FieldCatalogMaxOrderByAggregateInput
    _min?: FieldCatalogMinOrderByAggregateInput
  }

  export type FieldCatalogScalarWhereWithAggregatesInput = {
    AND?: FieldCatalogScalarWhereWithAggregatesInput | FieldCatalogScalarWhereWithAggregatesInput[]
    OR?: FieldCatalogScalarWhereWithAggregatesInput[]
    NOT?: FieldCatalogScalarWhereWithAggregatesInput | FieldCatalogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FieldCatalog"> | string
    slug?: StringWithAggregatesFilter<"FieldCatalog"> | string
    label?: StringWithAggregatesFilter<"FieldCatalog"> | string
    isCustom?: BoolWithAggregatesFilter<"FieldCatalog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FieldCatalog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FieldCatalog"> | Date | string
  }

  export type UserFieldSelectionWhereInput = {
    AND?: UserFieldSelectionWhereInput | UserFieldSelectionWhereInput[]
    OR?: UserFieldSelectionWhereInput[]
    NOT?: UserFieldSelectionWhereInput | UserFieldSelectionWhereInput[]
    id?: StringFilter<"UserFieldSelection"> | string
    userId?: StringFilter<"UserFieldSelection"> | string
    fieldId?: StringFilter<"UserFieldSelection"> | string
    createdAt?: DateTimeFilter<"UserFieldSelection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    field?: XOR<FieldCatalogScalarRelationFilter, FieldCatalogWhereInput>
  }

  export type UserFieldSelectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    field?: FieldCatalogOrderByWithRelationInput
  }

  export type UserFieldSelectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_fieldId?: UserFieldSelectionUserIdFieldIdCompoundUniqueInput
    AND?: UserFieldSelectionWhereInput | UserFieldSelectionWhereInput[]
    OR?: UserFieldSelectionWhereInput[]
    NOT?: UserFieldSelectionWhereInput | UserFieldSelectionWhereInput[]
    userId?: StringFilter<"UserFieldSelection"> | string
    fieldId?: StringFilter<"UserFieldSelection"> | string
    createdAt?: DateTimeFilter<"UserFieldSelection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    field?: XOR<FieldCatalogScalarRelationFilter, FieldCatalogWhereInput>
  }, "id" | "userId_fieldId">

  export type UserFieldSelectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    _count?: UserFieldSelectionCountOrderByAggregateInput
    _max?: UserFieldSelectionMaxOrderByAggregateInput
    _min?: UserFieldSelectionMinOrderByAggregateInput
  }

  export type UserFieldSelectionScalarWhereWithAggregatesInput = {
    AND?: UserFieldSelectionScalarWhereWithAggregatesInput | UserFieldSelectionScalarWhereWithAggregatesInput[]
    OR?: UserFieldSelectionScalarWhereWithAggregatesInput[]
    NOT?: UserFieldSelectionScalarWhereWithAggregatesInput | UserFieldSelectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFieldSelection"> | string
    userId?: StringWithAggregatesFilter<"UserFieldSelection"> | string
    fieldId?: StringWithAggregatesFilter<"UserFieldSelection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserFieldSelection"> | Date | string
  }

  export type IdeaWhereInput = {
    AND?: IdeaWhereInput | IdeaWhereInput[]
    OR?: IdeaWhereInput[]
    NOT?: IdeaWhereInput | IdeaWhereInput[]
    id?: StringFilter<"Idea"> | string
    title?: StringFilter<"Idea"> | string
    description?: StringFilter<"Idea"> | string
    vector?: JsonNullableFilter<"Idea">
    createdAt?: DateTimeFilter<"Idea"> | Date | string
    updatedAt?: DateTimeFilter<"Idea"> | Date | string
    fieldId?: StringNullableFilter<"Idea"> | string | null
    field?: XOR<FieldCatalogNullableScalarRelationFilter, FieldCatalogWhereInput> | null
    chunks?: IdeaChunkEmbeddingListRelationFilter
    stackItems?: IdeaStackItemListRelationFilter
    swipeEvents?: SwipeEventListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type IdeaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    vector?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fieldId?: SortOrderInput | SortOrder
    field?: FieldCatalogOrderByWithRelationInput
    chunks?: IdeaChunkEmbeddingOrderByRelationAggregateInput
    stackItems?: IdeaStackItemOrderByRelationAggregateInput
    swipeEvents?: SwipeEventOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type IdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IdeaWhereInput | IdeaWhereInput[]
    OR?: IdeaWhereInput[]
    NOT?: IdeaWhereInput | IdeaWhereInput[]
    title?: StringFilter<"Idea"> | string
    description?: StringFilter<"Idea"> | string
    vector?: JsonNullableFilter<"Idea">
    createdAt?: DateTimeFilter<"Idea"> | Date | string
    updatedAt?: DateTimeFilter<"Idea"> | Date | string
    fieldId?: StringNullableFilter<"Idea"> | string | null
    field?: XOR<FieldCatalogNullableScalarRelationFilter, FieldCatalogWhereInput> | null
    chunks?: IdeaChunkEmbeddingListRelationFilter
    stackItems?: IdeaStackItemListRelationFilter
    swipeEvents?: SwipeEventListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id">

  export type IdeaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    vector?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fieldId?: SortOrderInput | SortOrder
    _count?: IdeaCountOrderByAggregateInput
    _max?: IdeaMaxOrderByAggregateInput
    _min?: IdeaMinOrderByAggregateInput
  }

  export type IdeaScalarWhereWithAggregatesInput = {
    AND?: IdeaScalarWhereWithAggregatesInput | IdeaScalarWhereWithAggregatesInput[]
    OR?: IdeaScalarWhereWithAggregatesInput[]
    NOT?: IdeaScalarWhereWithAggregatesInput | IdeaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Idea"> | string
    title?: StringWithAggregatesFilter<"Idea"> | string
    description?: StringWithAggregatesFilter<"Idea"> | string
    vector?: JsonNullableWithAggregatesFilter<"Idea">
    createdAt?: DateTimeWithAggregatesFilter<"Idea"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Idea"> | Date | string
    fieldId?: StringNullableWithAggregatesFilter<"Idea"> | string | null
  }

  export type IdeaChunkEmbeddingWhereInput = {
    AND?: IdeaChunkEmbeddingWhereInput | IdeaChunkEmbeddingWhereInput[]
    OR?: IdeaChunkEmbeddingWhereInput[]
    NOT?: IdeaChunkEmbeddingWhereInput | IdeaChunkEmbeddingWhereInput[]
    id?: StringFilter<"IdeaChunkEmbedding"> | string
    ideaId?: StringFilter<"IdeaChunkEmbedding"> | string
    chunkIndex?: IntFilter<"IdeaChunkEmbedding"> | number
    content?: StringFilter<"IdeaChunkEmbedding"> | string
    vector?: JsonFilter<"IdeaChunkEmbedding">
    createdAt?: DateTimeFilter<"IdeaChunkEmbedding"> | Date | string
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
  }

  export type IdeaChunkEmbeddingOrderByWithRelationInput = {
    id?: SortOrder
    ideaId?: SortOrder
    chunkIndex?: SortOrder
    content?: SortOrder
    vector?: SortOrder
    createdAt?: SortOrder
    idea?: IdeaOrderByWithRelationInput
  }

  export type IdeaChunkEmbeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ideaId_chunkIndex?: IdeaChunkEmbeddingIdeaIdChunkIndexCompoundUniqueInput
    AND?: IdeaChunkEmbeddingWhereInput | IdeaChunkEmbeddingWhereInput[]
    OR?: IdeaChunkEmbeddingWhereInput[]
    NOT?: IdeaChunkEmbeddingWhereInput | IdeaChunkEmbeddingWhereInput[]
    ideaId?: StringFilter<"IdeaChunkEmbedding"> | string
    chunkIndex?: IntFilter<"IdeaChunkEmbedding"> | number
    content?: StringFilter<"IdeaChunkEmbedding"> | string
    vector?: JsonFilter<"IdeaChunkEmbedding">
    createdAt?: DateTimeFilter<"IdeaChunkEmbedding"> | Date | string
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
  }, "id" | "ideaId_chunkIndex">

  export type IdeaChunkEmbeddingOrderByWithAggregationInput = {
    id?: SortOrder
    ideaId?: SortOrder
    chunkIndex?: SortOrder
    content?: SortOrder
    vector?: SortOrder
    createdAt?: SortOrder
    _count?: IdeaChunkEmbeddingCountOrderByAggregateInput
    _avg?: IdeaChunkEmbeddingAvgOrderByAggregateInput
    _max?: IdeaChunkEmbeddingMaxOrderByAggregateInput
    _min?: IdeaChunkEmbeddingMinOrderByAggregateInput
    _sum?: IdeaChunkEmbeddingSumOrderByAggregateInput
  }

  export type IdeaChunkEmbeddingScalarWhereWithAggregatesInput = {
    AND?: IdeaChunkEmbeddingScalarWhereWithAggregatesInput | IdeaChunkEmbeddingScalarWhereWithAggregatesInput[]
    OR?: IdeaChunkEmbeddingScalarWhereWithAggregatesInput[]
    NOT?: IdeaChunkEmbeddingScalarWhereWithAggregatesInput | IdeaChunkEmbeddingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IdeaChunkEmbedding"> | string
    ideaId?: StringWithAggregatesFilter<"IdeaChunkEmbedding"> | string
    chunkIndex?: IntWithAggregatesFilter<"IdeaChunkEmbedding"> | number
    content?: StringWithAggregatesFilter<"IdeaChunkEmbedding"> | string
    vector?: JsonWithAggregatesFilter<"IdeaChunkEmbedding">
    createdAt?: DateTimeWithAggregatesFilter<"IdeaChunkEmbedding"> | Date | string
  }

  export type IdeaStackWhereInput = {
    AND?: IdeaStackWhereInput | IdeaStackWhereInput[]
    OR?: IdeaStackWhereInput[]
    NOT?: IdeaStackWhereInput | IdeaStackWhereInput[]
    id?: StringFilter<"IdeaStack"> | string
    userId?: StringFilter<"IdeaStack"> | string
    createdAt?: DateTimeFilter<"IdeaStack"> | Date | string
    refreshedAt?: DateTimeFilter<"IdeaStack"> | Date | string
    expiresAt?: DateTimeFilter<"IdeaStack"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: IdeaStackItemListRelationFilter
    swipeEvents?: SwipeEventListRelationFilter
  }

  export type IdeaStackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    refreshedAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: IdeaStackItemOrderByRelationAggregateInput
    swipeEvents?: SwipeEventOrderByRelationAggregateInput
  }

  export type IdeaStackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IdeaStackWhereInput | IdeaStackWhereInput[]
    OR?: IdeaStackWhereInput[]
    NOT?: IdeaStackWhereInput | IdeaStackWhereInput[]
    userId?: StringFilter<"IdeaStack"> | string
    createdAt?: DateTimeFilter<"IdeaStack"> | Date | string
    refreshedAt?: DateTimeFilter<"IdeaStack"> | Date | string
    expiresAt?: DateTimeFilter<"IdeaStack"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: IdeaStackItemListRelationFilter
    swipeEvents?: SwipeEventListRelationFilter
  }, "id">

  export type IdeaStackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    refreshedAt?: SortOrder
    expiresAt?: SortOrder
    _count?: IdeaStackCountOrderByAggregateInput
    _max?: IdeaStackMaxOrderByAggregateInput
    _min?: IdeaStackMinOrderByAggregateInput
  }

  export type IdeaStackScalarWhereWithAggregatesInput = {
    AND?: IdeaStackScalarWhereWithAggregatesInput | IdeaStackScalarWhereWithAggregatesInput[]
    OR?: IdeaStackScalarWhereWithAggregatesInput[]
    NOT?: IdeaStackScalarWhereWithAggregatesInput | IdeaStackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IdeaStack"> | string
    userId?: StringWithAggregatesFilter<"IdeaStack"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IdeaStack"> | Date | string
    refreshedAt?: DateTimeWithAggregatesFilter<"IdeaStack"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"IdeaStack"> | Date | string
  }

  export type IdeaStackItemWhereInput = {
    AND?: IdeaStackItemWhereInput | IdeaStackItemWhereInput[]
    OR?: IdeaStackItemWhereInput[]
    NOT?: IdeaStackItemWhereInput | IdeaStackItemWhereInput[]
    id?: StringFilter<"IdeaStackItem"> | string
    stackId?: StringFilter<"IdeaStackItem"> | string
    ideaId?: StringFilter<"IdeaStackItem"> | string
    position?: IntFilter<"IdeaStackItem"> | number
    stack?: XOR<IdeaStackScalarRelationFilter, IdeaStackWhereInput>
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
  }

  export type IdeaStackItemOrderByWithRelationInput = {
    id?: SortOrder
    stackId?: SortOrder
    ideaId?: SortOrder
    position?: SortOrder
    stack?: IdeaStackOrderByWithRelationInput
    idea?: IdeaOrderByWithRelationInput
  }

  export type IdeaStackItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stackId_position?: IdeaStackItemStackIdPositionCompoundUniqueInput
    AND?: IdeaStackItemWhereInput | IdeaStackItemWhereInput[]
    OR?: IdeaStackItemWhereInput[]
    NOT?: IdeaStackItemWhereInput | IdeaStackItemWhereInput[]
    stackId?: StringFilter<"IdeaStackItem"> | string
    ideaId?: StringFilter<"IdeaStackItem"> | string
    position?: IntFilter<"IdeaStackItem"> | number
    stack?: XOR<IdeaStackScalarRelationFilter, IdeaStackWhereInput>
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
  }, "id" | "stackId_position">

  export type IdeaStackItemOrderByWithAggregationInput = {
    id?: SortOrder
    stackId?: SortOrder
    ideaId?: SortOrder
    position?: SortOrder
    _count?: IdeaStackItemCountOrderByAggregateInput
    _avg?: IdeaStackItemAvgOrderByAggregateInput
    _max?: IdeaStackItemMaxOrderByAggregateInput
    _min?: IdeaStackItemMinOrderByAggregateInput
    _sum?: IdeaStackItemSumOrderByAggregateInput
  }

  export type IdeaStackItemScalarWhereWithAggregatesInput = {
    AND?: IdeaStackItemScalarWhereWithAggregatesInput | IdeaStackItemScalarWhereWithAggregatesInput[]
    OR?: IdeaStackItemScalarWhereWithAggregatesInput[]
    NOT?: IdeaStackItemScalarWhereWithAggregatesInput | IdeaStackItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IdeaStackItem"> | string
    stackId?: StringWithAggregatesFilter<"IdeaStackItem"> | string
    ideaId?: StringWithAggregatesFilter<"IdeaStackItem"> | string
    position?: IntWithAggregatesFilter<"IdeaStackItem"> | number
  }

  export type SwipeEventWhereInput = {
    AND?: SwipeEventWhereInput | SwipeEventWhereInput[]
    OR?: SwipeEventWhereInput[]
    NOT?: SwipeEventWhereInput | SwipeEventWhereInput[]
    id?: StringFilter<"SwipeEvent"> | string
    userId?: StringFilter<"SwipeEvent"> | string
    ideaId?: StringFilter<"SwipeEvent"> | string
    stackId?: StringNullableFilter<"SwipeEvent"> | string | null
    action?: EnumSwipeActionFilter<"SwipeEvent"> | $Enums.SwipeAction
    scoreDelta?: FloatFilter<"SwipeEvent"> | number
    createdAt?: DateTimeFilter<"SwipeEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
    stack?: XOR<IdeaStackNullableScalarRelationFilter, IdeaStackWhereInput> | null
  }

  export type SwipeEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ideaId?: SortOrder
    stackId?: SortOrderInput | SortOrder
    action?: SortOrder
    scoreDelta?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    idea?: IdeaOrderByWithRelationInput
    stack?: IdeaStackOrderByWithRelationInput
  }

  export type SwipeEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SwipeEventWhereInput | SwipeEventWhereInput[]
    OR?: SwipeEventWhereInput[]
    NOT?: SwipeEventWhereInput | SwipeEventWhereInput[]
    userId?: StringFilter<"SwipeEvent"> | string
    ideaId?: StringFilter<"SwipeEvent"> | string
    stackId?: StringNullableFilter<"SwipeEvent"> | string | null
    action?: EnumSwipeActionFilter<"SwipeEvent"> | $Enums.SwipeAction
    scoreDelta?: FloatFilter<"SwipeEvent"> | number
    createdAt?: DateTimeFilter<"SwipeEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
    stack?: XOR<IdeaStackNullableScalarRelationFilter, IdeaStackWhereInput> | null
  }, "id">

  export type SwipeEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ideaId?: SortOrder
    stackId?: SortOrderInput | SortOrder
    action?: SortOrder
    scoreDelta?: SortOrder
    createdAt?: SortOrder
    _count?: SwipeEventCountOrderByAggregateInput
    _avg?: SwipeEventAvgOrderByAggregateInput
    _max?: SwipeEventMaxOrderByAggregateInput
    _min?: SwipeEventMinOrderByAggregateInput
    _sum?: SwipeEventSumOrderByAggregateInput
  }

  export type SwipeEventScalarWhereWithAggregatesInput = {
    AND?: SwipeEventScalarWhereWithAggregatesInput | SwipeEventScalarWhereWithAggregatesInput[]
    OR?: SwipeEventScalarWhereWithAggregatesInput[]
    NOT?: SwipeEventScalarWhereWithAggregatesInput | SwipeEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SwipeEvent"> | string
    userId?: StringWithAggregatesFilter<"SwipeEvent"> | string
    ideaId?: StringWithAggregatesFilter<"SwipeEvent"> | string
    stackId?: StringNullableWithAggregatesFilter<"SwipeEvent"> | string | null
    action?: EnumSwipeActionWithAggregatesFilter<"SwipeEvent"> | $Enums.SwipeAction
    scoreDelta?: FloatWithAggregatesFilter<"SwipeEvent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SwipeEvent"> | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    ideaId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ideaId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    idea?: IdeaOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_ideaId?: FavoriteUserIdIdeaIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    ideaId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
  }, "id" | "userId_ideaId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ideaId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    ideaId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type PreferenceUpdateLogWhereInput = {
    AND?: PreferenceUpdateLogWhereInput | PreferenceUpdateLogWhereInput[]
    OR?: PreferenceUpdateLogWhereInput[]
    NOT?: PreferenceUpdateLogWhereInput | PreferenceUpdateLogWhereInput[]
    id?: StringFilter<"PreferenceUpdateLog"> | string
    userId?: StringFilter<"PreferenceUpdateLog"> | string
    reason?: StringFilter<"PreferenceUpdateLog"> | string
    previousVector?: JsonNullableFilter<"PreferenceUpdateLog">
    updatedVector?: JsonFilter<"PreferenceUpdateLog">
    createdAt?: DateTimeFilter<"PreferenceUpdateLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PreferenceUpdateLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    previousVector?: SortOrderInput | SortOrder
    updatedVector?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PreferenceUpdateLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PreferenceUpdateLogWhereInput | PreferenceUpdateLogWhereInput[]
    OR?: PreferenceUpdateLogWhereInput[]
    NOT?: PreferenceUpdateLogWhereInput | PreferenceUpdateLogWhereInput[]
    userId?: StringFilter<"PreferenceUpdateLog"> | string
    reason?: StringFilter<"PreferenceUpdateLog"> | string
    previousVector?: JsonNullableFilter<"PreferenceUpdateLog">
    updatedVector?: JsonFilter<"PreferenceUpdateLog">
    createdAt?: DateTimeFilter<"PreferenceUpdateLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PreferenceUpdateLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    previousVector?: SortOrderInput | SortOrder
    updatedVector?: SortOrder
    createdAt?: SortOrder
    _count?: PreferenceUpdateLogCountOrderByAggregateInput
    _max?: PreferenceUpdateLogMaxOrderByAggregateInput
    _min?: PreferenceUpdateLogMinOrderByAggregateInput
  }

  export type PreferenceUpdateLogScalarWhereWithAggregatesInput = {
    AND?: PreferenceUpdateLogScalarWhereWithAggregatesInput | PreferenceUpdateLogScalarWhereWithAggregatesInput[]
    OR?: PreferenceUpdateLogScalarWhereWithAggregatesInput[]
    NOT?: PreferenceUpdateLogScalarWhereWithAggregatesInput | PreferenceUpdateLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PreferenceUpdateLog"> | string
    userId?: StringWithAggregatesFilter<"PreferenceUpdateLog"> | string
    reason?: StringWithAggregatesFilter<"PreferenceUpdateLog"> | string
    previousVector?: JsonNullableWithAggregatesFilter<"PreferenceUpdateLog">
    updatedVector?: JsonWithAggregatesFilter<"PreferenceUpdateLog">
    createdAt?: DateTimeWithAggregatesFilter<"PreferenceUpdateLog"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type PostCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionCreateNestedManyWithoutUserInput
    stacks?: IdeaStackCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionUncheckedCreateNestedManyWithoutUserInput
    stacks?: IdeaStackUncheckedCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUncheckedUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUncheckedUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FieldCatalogCreateInput = {
    id?: string
    slug: string
    label: string
    isCustom?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userSelections?: UserFieldSelectionCreateNestedManyWithoutFieldInput
    ideas?: IdeaCreateNestedManyWithoutFieldInput
  }

  export type FieldCatalogUncheckedCreateInput = {
    id?: string
    slug: string
    label: string
    isCustom?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userSelections?: UserFieldSelectionUncheckedCreateNestedManyWithoutFieldInput
    ideas?: IdeaUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCatalogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSelections?: UserFieldSelectionUpdateManyWithoutFieldNestedInput
    ideas?: IdeaUpdateManyWithoutFieldNestedInput
  }

  export type FieldCatalogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSelections?: UserFieldSelectionUncheckedUpdateManyWithoutFieldNestedInput
    ideas?: IdeaUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FieldCatalogCreateManyInput = {
    id?: string
    slug: string
    label: string
    isCustom?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldCatalogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldCatalogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFieldSelectionCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFieldSelectionsInput
    field: FieldCatalogCreateNestedOneWithoutUserSelectionsInput
  }

  export type UserFieldSelectionUncheckedCreateInput = {
    id?: string
    userId: string
    fieldId: string
    createdAt?: Date | string
  }

  export type UserFieldSelectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFieldSelectionsNestedInput
    field?: FieldCatalogUpdateOneRequiredWithoutUserSelectionsNestedInput
  }

  export type UserFieldSelectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFieldSelectionCreateManyInput = {
    id?: string
    userId: string
    fieldId: string
    createdAt?: Date | string
  }

  export type UserFieldSelectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFieldSelectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaCreateInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    field?: FieldCatalogCreateNestedOneWithoutIdeasInput
    chunks?: IdeaChunkEmbeddingCreateNestedManyWithoutIdeaInput
    stackItems?: IdeaStackItemCreateNestedManyWithoutIdeaInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutIdeaInput
    favorites?: FavoriteCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldId?: string | null
    chunks?: IdeaChunkEmbeddingUncheckedCreateNestedManyWithoutIdeaInput
    stackItems?: IdeaStackItemUncheckedCreateNestedManyWithoutIdeaInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutIdeaInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldCatalogUpdateOneWithoutIdeasNestedInput
    chunks?: IdeaChunkEmbeddingUpdateManyWithoutIdeaNestedInput
    stackItems?: IdeaStackItemUpdateManyWithoutIdeaNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutIdeaNestedInput
    favorites?: FavoriteUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    chunks?: IdeaChunkEmbeddingUncheckedUpdateManyWithoutIdeaNestedInput
    stackItems?: IdeaStackItemUncheckedUpdateManyWithoutIdeaNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutIdeaNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaCreateManyInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldId?: string | null
  }

  export type IdeaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdeaChunkEmbeddingCreateInput = {
    id?: string
    chunkIndex: number
    content: string
    vector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    idea: IdeaCreateNestedOneWithoutChunksInput
  }

  export type IdeaChunkEmbeddingUncheckedCreateInput = {
    id?: string
    ideaId: string
    chunkIndex: number
    content: string
    vector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IdeaChunkEmbeddingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    vector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idea?: IdeaUpdateOneRequiredWithoutChunksNestedInput
  }

  export type IdeaChunkEmbeddingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    vector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaChunkEmbeddingCreateManyInput = {
    id?: string
    ideaId: string
    chunkIndex: number
    content: string
    vector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IdeaChunkEmbeddingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    vector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaChunkEmbeddingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    vector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaStackCreateInput = {
    id?: string
    createdAt?: Date | string
    refreshedAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutStacksInput
    items?: IdeaStackItemCreateNestedManyWithoutStackInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutStackInput
  }

  export type IdeaStackUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    refreshedAt?: Date | string
    expiresAt: Date | string
    items?: IdeaStackItemUncheckedCreateNestedManyWithoutStackInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutStackInput
  }

  export type IdeaStackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStacksNestedInput
    items?: IdeaStackItemUpdateManyWithoutStackNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutStackNestedInput
  }

  export type IdeaStackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: IdeaStackItemUncheckedUpdateManyWithoutStackNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutStackNestedInput
  }

  export type IdeaStackCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    refreshedAt?: Date | string
    expiresAt: Date | string
  }

  export type IdeaStackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaStackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaStackItemCreateInput = {
    id?: string
    position: number
    stack: IdeaStackCreateNestedOneWithoutItemsInput
    idea: IdeaCreateNestedOneWithoutStackItemsInput
  }

  export type IdeaStackItemUncheckedCreateInput = {
    id?: string
    stackId: string
    ideaId: string
    position: number
  }

  export type IdeaStackItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    stack?: IdeaStackUpdateOneRequiredWithoutItemsNestedInput
    idea?: IdeaUpdateOneRequiredWithoutStackItemsNestedInput
  }

  export type IdeaStackItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stackId?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type IdeaStackItemCreateManyInput = {
    id?: string
    stackId: string
    ideaId: string
    position: number
  }

  export type IdeaStackItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type IdeaStackItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stackId?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type SwipeEventCreateInput = {
    id?: string
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSwipeEventsInput
    idea: IdeaCreateNestedOneWithoutSwipeEventsInput
    stack?: IdeaStackCreateNestedOneWithoutSwipeEventsInput
  }

  export type SwipeEventUncheckedCreateInput = {
    id?: string
    userId: string
    ideaId: string
    stackId?: string | null
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
  }

  export type SwipeEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipeEventsNestedInput
    idea?: IdeaUpdateOneRequiredWithoutSwipeEventsNestedInput
    stack?: IdeaStackUpdateOneWithoutSwipeEventsNestedInput
  }

  export type SwipeEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    stackId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeEventCreateManyInput = {
    id?: string
    userId: string
    ideaId: string
    stackId?: string | null
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
  }

  export type SwipeEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    stackId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
    idea: IdeaCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    ideaId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    idea?: IdeaUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    userId: string
    ideaId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceUpdateLogCreateInput = {
    id?: string
    reason: string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPreferenceLogsInput
  }

  export type PreferenceUpdateLogUncheckedCreateInput = {
    id?: string
    userId: string
    reason: string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PreferenceUpdateLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferenceLogsNestedInput
  }

  export type PreferenceUpdateLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceUpdateLogCreateManyInput = {
    id?: string
    userId: string
    reason: string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PreferenceUpdateLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceUpdateLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type UserFieldSelectionListRelationFilter = {
    every?: UserFieldSelectionWhereInput
    some?: UserFieldSelectionWhereInput
    none?: UserFieldSelectionWhereInput
  }

  export type IdeaStackListRelationFilter = {
    every?: IdeaStackWhereInput
    some?: IdeaStackWhereInput
    none?: IdeaStackWhereInput
  }

  export type SwipeEventListRelationFilter = {
    every?: SwipeEventWhereInput
    some?: SwipeEventWhereInput
    none?: SwipeEventWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type PreferenceUpdateLogListRelationFilter = {
    every?: PreferenceUpdateLogWhereInput
    some?: PreferenceUpdateLogWhereInput
    none?: PreferenceUpdateLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFieldSelectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdeaStackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SwipeEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PreferenceUpdateLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboardingCompleted?: SortOrder
    preferenceVector?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboardingCompleted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboardingCompleted?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IdeaListRelationFilter = {
    every?: IdeaWhereInput
    some?: IdeaWhereInput
    none?: IdeaWhereInput
  }

  export type IdeaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FieldCatalogCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    isCustom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldCatalogMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    isCustom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldCatalogMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    isCustom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldCatalogScalarRelationFilter = {
    is?: FieldCatalogWhereInput
    isNot?: FieldCatalogWhereInput
  }

  export type UserFieldSelectionUserIdFieldIdCompoundUniqueInput = {
    userId: string
    fieldId: string
  }

  export type UserFieldSelectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFieldSelectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFieldSelectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type FieldCatalogNullableScalarRelationFilter = {
    is?: FieldCatalogWhereInput | null
    isNot?: FieldCatalogWhereInput | null
  }

  export type IdeaChunkEmbeddingListRelationFilter = {
    every?: IdeaChunkEmbeddingWhereInput
    some?: IdeaChunkEmbeddingWhereInput
    none?: IdeaChunkEmbeddingWhereInput
  }

  export type IdeaStackItemListRelationFilter = {
    every?: IdeaStackItemWhereInput
    some?: IdeaStackItemWhereInput
    none?: IdeaStackItemWhereInput
  }

  export type IdeaChunkEmbeddingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdeaStackItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdeaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    vector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fieldId?: SortOrder
  }

  export type IdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fieldId?: SortOrder
  }

  export type IdeaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fieldId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IdeaScalarRelationFilter = {
    is?: IdeaWhereInput
    isNot?: IdeaWhereInput
  }

  export type IdeaChunkEmbeddingIdeaIdChunkIndexCompoundUniqueInput = {
    ideaId: string
    chunkIndex: number
  }

  export type IdeaChunkEmbeddingCountOrderByAggregateInput = {
    id?: SortOrder
    ideaId?: SortOrder
    chunkIndex?: SortOrder
    content?: SortOrder
    vector?: SortOrder
    createdAt?: SortOrder
  }

  export type IdeaChunkEmbeddingAvgOrderByAggregateInput = {
    chunkIndex?: SortOrder
  }

  export type IdeaChunkEmbeddingMaxOrderByAggregateInput = {
    id?: SortOrder
    ideaId?: SortOrder
    chunkIndex?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type IdeaChunkEmbeddingMinOrderByAggregateInput = {
    id?: SortOrder
    ideaId?: SortOrder
    chunkIndex?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type IdeaChunkEmbeddingSumOrderByAggregateInput = {
    chunkIndex?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IdeaStackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    refreshedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type IdeaStackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    refreshedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type IdeaStackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    refreshedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type IdeaStackScalarRelationFilter = {
    is?: IdeaStackWhereInput
    isNot?: IdeaStackWhereInput
  }

  export type IdeaStackItemStackIdPositionCompoundUniqueInput = {
    stackId: string
    position: number
  }

  export type IdeaStackItemCountOrderByAggregateInput = {
    id?: SortOrder
    stackId?: SortOrder
    ideaId?: SortOrder
    position?: SortOrder
  }

  export type IdeaStackItemAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type IdeaStackItemMaxOrderByAggregateInput = {
    id?: SortOrder
    stackId?: SortOrder
    ideaId?: SortOrder
    position?: SortOrder
  }

  export type IdeaStackItemMinOrderByAggregateInput = {
    id?: SortOrder
    stackId?: SortOrder
    ideaId?: SortOrder
    position?: SortOrder
  }

  export type IdeaStackItemSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type EnumSwipeActionFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | EnumSwipeActionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeAction[]
    notIn?: $Enums.SwipeAction[]
    not?: NestedEnumSwipeActionFilter<$PrismaModel> | $Enums.SwipeAction
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IdeaStackNullableScalarRelationFilter = {
    is?: IdeaStackWhereInput | null
    isNot?: IdeaStackWhereInput | null
  }

  export type SwipeEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ideaId?: SortOrder
    stackId?: SortOrder
    action?: SortOrder
    scoreDelta?: SortOrder
    createdAt?: SortOrder
  }

  export type SwipeEventAvgOrderByAggregateInput = {
    scoreDelta?: SortOrder
  }

  export type SwipeEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ideaId?: SortOrder
    stackId?: SortOrder
    action?: SortOrder
    scoreDelta?: SortOrder
    createdAt?: SortOrder
  }

  export type SwipeEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ideaId?: SortOrder
    stackId?: SortOrder
    action?: SortOrder
    scoreDelta?: SortOrder
    createdAt?: SortOrder
  }

  export type SwipeEventSumOrderByAggregateInput = {
    scoreDelta?: SortOrder
  }

  export type EnumSwipeActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | EnumSwipeActionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeAction[]
    notIn?: $Enums.SwipeAction[]
    not?: NestedEnumSwipeActionWithAggregatesFilter<$PrismaModel> | $Enums.SwipeAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwipeActionFilter<$PrismaModel>
    _max?: NestedEnumSwipeActionFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FavoriteUserIdIdeaIdCompoundUniqueInput = {
    userId: string
    ideaId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ideaId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ideaId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ideaId?: SortOrder
    createdAt?: SortOrder
  }

  export type PreferenceUpdateLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    previousVector?: SortOrder
    updatedVector?: SortOrder
    createdAt?: SortOrder
  }

  export type PreferenceUpdateLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PreferenceUpdateLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserFieldSelectionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFieldSelectionCreateWithoutUserInput, UserFieldSelectionUncheckedCreateWithoutUserInput> | UserFieldSelectionCreateWithoutUserInput[] | UserFieldSelectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFieldSelectionCreateOrConnectWithoutUserInput | UserFieldSelectionCreateOrConnectWithoutUserInput[]
    createMany?: UserFieldSelectionCreateManyUserInputEnvelope
    connect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
  }

  export type IdeaStackCreateNestedManyWithoutUserInput = {
    create?: XOR<IdeaStackCreateWithoutUserInput, IdeaStackUncheckedCreateWithoutUserInput> | IdeaStackCreateWithoutUserInput[] | IdeaStackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaStackCreateOrConnectWithoutUserInput | IdeaStackCreateOrConnectWithoutUserInput[]
    createMany?: IdeaStackCreateManyUserInputEnvelope
    connect?: IdeaStackWhereUniqueInput | IdeaStackWhereUniqueInput[]
  }

  export type SwipeEventCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput> | SwipeEventCreateWithoutUserInput[] | SwipeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutUserInput | SwipeEventCreateOrConnectWithoutUserInput[]
    createMany?: SwipeEventCreateManyUserInputEnvelope
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type PreferenceUpdateLogCreateNestedManyWithoutUserInput = {
    create?: XOR<PreferenceUpdateLogCreateWithoutUserInput, PreferenceUpdateLogUncheckedCreateWithoutUserInput> | PreferenceUpdateLogCreateWithoutUserInput[] | PreferenceUpdateLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PreferenceUpdateLogCreateOrConnectWithoutUserInput | PreferenceUpdateLogCreateOrConnectWithoutUserInput[]
    createMany?: PreferenceUpdateLogCreateManyUserInputEnvelope
    connect?: PreferenceUpdateLogWhereUniqueInput | PreferenceUpdateLogWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserFieldSelectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFieldSelectionCreateWithoutUserInput, UserFieldSelectionUncheckedCreateWithoutUserInput> | UserFieldSelectionCreateWithoutUserInput[] | UserFieldSelectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFieldSelectionCreateOrConnectWithoutUserInput | UserFieldSelectionCreateOrConnectWithoutUserInput[]
    createMany?: UserFieldSelectionCreateManyUserInputEnvelope
    connect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
  }

  export type IdeaStackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IdeaStackCreateWithoutUserInput, IdeaStackUncheckedCreateWithoutUserInput> | IdeaStackCreateWithoutUserInput[] | IdeaStackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaStackCreateOrConnectWithoutUserInput | IdeaStackCreateOrConnectWithoutUserInput[]
    createMany?: IdeaStackCreateManyUserInputEnvelope
    connect?: IdeaStackWhereUniqueInput | IdeaStackWhereUniqueInput[]
  }

  export type SwipeEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput> | SwipeEventCreateWithoutUserInput[] | SwipeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutUserInput | SwipeEventCreateOrConnectWithoutUserInput[]
    createMany?: SwipeEventCreateManyUserInputEnvelope
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type PreferenceUpdateLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PreferenceUpdateLogCreateWithoutUserInput, PreferenceUpdateLogUncheckedCreateWithoutUserInput> | PreferenceUpdateLogCreateWithoutUserInput[] | PreferenceUpdateLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PreferenceUpdateLogCreateOrConnectWithoutUserInput | PreferenceUpdateLogCreateOrConnectWithoutUserInput[]
    createMany?: PreferenceUpdateLogCreateManyUserInputEnvelope
    connect?: PreferenceUpdateLogWhereUniqueInput | PreferenceUpdateLogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserFieldSelectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFieldSelectionCreateWithoutUserInput, UserFieldSelectionUncheckedCreateWithoutUserInput> | UserFieldSelectionCreateWithoutUserInput[] | UserFieldSelectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFieldSelectionCreateOrConnectWithoutUserInput | UserFieldSelectionCreateOrConnectWithoutUserInput[]
    upsert?: UserFieldSelectionUpsertWithWhereUniqueWithoutUserInput | UserFieldSelectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFieldSelectionCreateManyUserInputEnvelope
    set?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    disconnect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    delete?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    connect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    update?: UserFieldSelectionUpdateWithWhereUniqueWithoutUserInput | UserFieldSelectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFieldSelectionUpdateManyWithWhereWithoutUserInput | UserFieldSelectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFieldSelectionScalarWhereInput | UserFieldSelectionScalarWhereInput[]
  }

  export type IdeaStackUpdateManyWithoutUserNestedInput = {
    create?: XOR<IdeaStackCreateWithoutUserInput, IdeaStackUncheckedCreateWithoutUserInput> | IdeaStackCreateWithoutUserInput[] | IdeaStackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaStackCreateOrConnectWithoutUserInput | IdeaStackCreateOrConnectWithoutUserInput[]
    upsert?: IdeaStackUpsertWithWhereUniqueWithoutUserInput | IdeaStackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IdeaStackCreateManyUserInputEnvelope
    set?: IdeaStackWhereUniqueInput | IdeaStackWhereUniqueInput[]
    disconnect?: IdeaStackWhereUniqueInput | IdeaStackWhereUniqueInput[]
    delete?: IdeaStackWhereUniqueInput | IdeaStackWhereUniqueInput[]
    connect?: IdeaStackWhereUniqueInput | IdeaStackWhereUniqueInput[]
    update?: IdeaStackUpdateWithWhereUniqueWithoutUserInput | IdeaStackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IdeaStackUpdateManyWithWhereWithoutUserInput | IdeaStackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IdeaStackScalarWhereInput | IdeaStackScalarWhereInput[]
  }

  export type SwipeEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput> | SwipeEventCreateWithoutUserInput[] | SwipeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutUserInput | SwipeEventCreateOrConnectWithoutUserInput[]
    upsert?: SwipeEventUpsertWithWhereUniqueWithoutUserInput | SwipeEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwipeEventCreateManyUserInputEnvelope
    set?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    disconnect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    delete?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    update?: SwipeEventUpdateWithWhereUniqueWithoutUserInput | SwipeEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwipeEventUpdateManyWithWhereWithoutUserInput | SwipeEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type PreferenceUpdateLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<PreferenceUpdateLogCreateWithoutUserInput, PreferenceUpdateLogUncheckedCreateWithoutUserInput> | PreferenceUpdateLogCreateWithoutUserInput[] | PreferenceUpdateLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PreferenceUpdateLogCreateOrConnectWithoutUserInput | PreferenceUpdateLogCreateOrConnectWithoutUserInput[]
    upsert?: PreferenceUpdateLogUpsertWithWhereUniqueWithoutUserInput | PreferenceUpdateLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PreferenceUpdateLogCreateManyUserInputEnvelope
    set?: PreferenceUpdateLogWhereUniqueInput | PreferenceUpdateLogWhereUniqueInput[]
    disconnect?: PreferenceUpdateLogWhereUniqueInput | PreferenceUpdateLogWhereUniqueInput[]
    delete?: PreferenceUpdateLogWhereUniqueInput | PreferenceUpdateLogWhereUniqueInput[]
    connect?: PreferenceUpdateLogWhereUniqueInput | PreferenceUpdateLogWhereUniqueInput[]
    update?: PreferenceUpdateLogUpdateWithWhereUniqueWithoutUserInput | PreferenceUpdateLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PreferenceUpdateLogUpdateManyWithWhereWithoutUserInput | PreferenceUpdateLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PreferenceUpdateLogScalarWhereInput | PreferenceUpdateLogScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserFieldSelectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFieldSelectionCreateWithoutUserInput, UserFieldSelectionUncheckedCreateWithoutUserInput> | UserFieldSelectionCreateWithoutUserInput[] | UserFieldSelectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFieldSelectionCreateOrConnectWithoutUserInput | UserFieldSelectionCreateOrConnectWithoutUserInput[]
    upsert?: UserFieldSelectionUpsertWithWhereUniqueWithoutUserInput | UserFieldSelectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFieldSelectionCreateManyUserInputEnvelope
    set?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    disconnect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    delete?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    connect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    update?: UserFieldSelectionUpdateWithWhereUniqueWithoutUserInput | UserFieldSelectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFieldSelectionUpdateManyWithWhereWithoutUserInput | UserFieldSelectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFieldSelectionScalarWhereInput | UserFieldSelectionScalarWhereInput[]
  }

  export type IdeaStackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IdeaStackCreateWithoutUserInput, IdeaStackUncheckedCreateWithoutUserInput> | IdeaStackCreateWithoutUserInput[] | IdeaStackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaStackCreateOrConnectWithoutUserInput | IdeaStackCreateOrConnectWithoutUserInput[]
    upsert?: IdeaStackUpsertWithWhereUniqueWithoutUserInput | IdeaStackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IdeaStackCreateManyUserInputEnvelope
    set?: IdeaStackWhereUniqueInput | IdeaStackWhereUniqueInput[]
    disconnect?: IdeaStackWhereUniqueInput | IdeaStackWhereUniqueInput[]
    delete?: IdeaStackWhereUniqueInput | IdeaStackWhereUniqueInput[]
    connect?: IdeaStackWhereUniqueInput | IdeaStackWhereUniqueInput[]
    update?: IdeaStackUpdateWithWhereUniqueWithoutUserInput | IdeaStackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IdeaStackUpdateManyWithWhereWithoutUserInput | IdeaStackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IdeaStackScalarWhereInput | IdeaStackScalarWhereInput[]
  }

  export type SwipeEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput> | SwipeEventCreateWithoutUserInput[] | SwipeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutUserInput | SwipeEventCreateOrConnectWithoutUserInput[]
    upsert?: SwipeEventUpsertWithWhereUniqueWithoutUserInput | SwipeEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwipeEventCreateManyUserInputEnvelope
    set?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    disconnect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    delete?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    update?: SwipeEventUpdateWithWhereUniqueWithoutUserInput | SwipeEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwipeEventUpdateManyWithWhereWithoutUserInput | SwipeEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type PreferenceUpdateLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PreferenceUpdateLogCreateWithoutUserInput, PreferenceUpdateLogUncheckedCreateWithoutUserInput> | PreferenceUpdateLogCreateWithoutUserInput[] | PreferenceUpdateLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PreferenceUpdateLogCreateOrConnectWithoutUserInput | PreferenceUpdateLogCreateOrConnectWithoutUserInput[]
    upsert?: PreferenceUpdateLogUpsertWithWhereUniqueWithoutUserInput | PreferenceUpdateLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PreferenceUpdateLogCreateManyUserInputEnvelope
    set?: PreferenceUpdateLogWhereUniqueInput | PreferenceUpdateLogWhereUniqueInput[]
    disconnect?: PreferenceUpdateLogWhereUniqueInput | PreferenceUpdateLogWhereUniqueInput[]
    delete?: PreferenceUpdateLogWhereUniqueInput | PreferenceUpdateLogWhereUniqueInput[]
    connect?: PreferenceUpdateLogWhereUniqueInput | PreferenceUpdateLogWhereUniqueInput[]
    update?: PreferenceUpdateLogUpdateWithWhereUniqueWithoutUserInput | PreferenceUpdateLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PreferenceUpdateLogUpdateManyWithWhereWithoutUserInput | PreferenceUpdateLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PreferenceUpdateLogScalarWhereInput | PreferenceUpdateLogScalarWhereInput[]
  }

  export type UserFieldSelectionCreateNestedManyWithoutFieldInput = {
    create?: XOR<UserFieldSelectionCreateWithoutFieldInput, UserFieldSelectionUncheckedCreateWithoutFieldInput> | UserFieldSelectionCreateWithoutFieldInput[] | UserFieldSelectionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: UserFieldSelectionCreateOrConnectWithoutFieldInput | UserFieldSelectionCreateOrConnectWithoutFieldInput[]
    createMany?: UserFieldSelectionCreateManyFieldInputEnvelope
    connect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
  }

  export type IdeaCreateNestedManyWithoutFieldInput = {
    create?: XOR<IdeaCreateWithoutFieldInput, IdeaUncheckedCreateWithoutFieldInput> | IdeaCreateWithoutFieldInput[] | IdeaUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutFieldInput | IdeaCreateOrConnectWithoutFieldInput[]
    createMany?: IdeaCreateManyFieldInputEnvelope
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
  }

  export type UserFieldSelectionUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<UserFieldSelectionCreateWithoutFieldInput, UserFieldSelectionUncheckedCreateWithoutFieldInput> | UserFieldSelectionCreateWithoutFieldInput[] | UserFieldSelectionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: UserFieldSelectionCreateOrConnectWithoutFieldInput | UserFieldSelectionCreateOrConnectWithoutFieldInput[]
    createMany?: UserFieldSelectionCreateManyFieldInputEnvelope
    connect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
  }

  export type IdeaUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<IdeaCreateWithoutFieldInput, IdeaUncheckedCreateWithoutFieldInput> | IdeaCreateWithoutFieldInput[] | IdeaUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutFieldInput | IdeaCreateOrConnectWithoutFieldInput[]
    createMany?: IdeaCreateManyFieldInputEnvelope
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
  }

  export type UserFieldSelectionUpdateManyWithoutFieldNestedInput = {
    create?: XOR<UserFieldSelectionCreateWithoutFieldInput, UserFieldSelectionUncheckedCreateWithoutFieldInput> | UserFieldSelectionCreateWithoutFieldInput[] | UserFieldSelectionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: UserFieldSelectionCreateOrConnectWithoutFieldInput | UserFieldSelectionCreateOrConnectWithoutFieldInput[]
    upsert?: UserFieldSelectionUpsertWithWhereUniqueWithoutFieldInput | UserFieldSelectionUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: UserFieldSelectionCreateManyFieldInputEnvelope
    set?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    disconnect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    delete?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    connect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    update?: UserFieldSelectionUpdateWithWhereUniqueWithoutFieldInput | UserFieldSelectionUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: UserFieldSelectionUpdateManyWithWhereWithoutFieldInput | UserFieldSelectionUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: UserFieldSelectionScalarWhereInput | UserFieldSelectionScalarWhereInput[]
  }

  export type IdeaUpdateManyWithoutFieldNestedInput = {
    create?: XOR<IdeaCreateWithoutFieldInput, IdeaUncheckedCreateWithoutFieldInput> | IdeaCreateWithoutFieldInput[] | IdeaUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutFieldInput | IdeaCreateOrConnectWithoutFieldInput[]
    upsert?: IdeaUpsertWithWhereUniqueWithoutFieldInput | IdeaUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: IdeaCreateManyFieldInputEnvelope
    set?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    disconnect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    delete?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    update?: IdeaUpdateWithWhereUniqueWithoutFieldInput | IdeaUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: IdeaUpdateManyWithWhereWithoutFieldInput | IdeaUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
  }

  export type UserFieldSelectionUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<UserFieldSelectionCreateWithoutFieldInput, UserFieldSelectionUncheckedCreateWithoutFieldInput> | UserFieldSelectionCreateWithoutFieldInput[] | UserFieldSelectionUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: UserFieldSelectionCreateOrConnectWithoutFieldInput | UserFieldSelectionCreateOrConnectWithoutFieldInput[]
    upsert?: UserFieldSelectionUpsertWithWhereUniqueWithoutFieldInput | UserFieldSelectionUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: UserFieldSelectionCreateManyFieldInputEnvelope
    set?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    disconnect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    delete?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    connect?: UserFieldSelectionWhereUniqueInput | UserFieldSelectionWhereUniqueInput[]
    update?: UserFieldSelectionUpdateWithWhereUniqueWithoutFieldInput | UserFieldSelectionUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: UserFieldSelectionUpdateManyWithWhereWithoutFieldInput | UserFieldSelectionUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: UserFieldSelectionScalarWhereInput | UserFieldSelectionScalarWhereInput[]
  }

  export type IdeaUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<IdeaCreateWithoutFieldInput, IdeaUncheckedCreateWithoutFieldInput> | IdeaCreateWithoutFieldInput[] | IdeaUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutFieldInput | IdeaCreateOrConnectWithoutFieldInput[]
    upsert?: IdeaUpsertWithWhereUniqueWithoutFieldInput | IdeaUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: IdeaCreateManyFieldInputEnvelope
    set?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    disconnect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    delete?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    update?: IdeaUpdateWithWhereUniqueWithoutFieldInput | IdeaUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: IdeaUpdateManyWithWhereWithoutFieldInput | IdeaUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFieldSelectionsInput = {
    create?: XOR<UserCreateWithoutFieldSelectionsInput, UserUncheckedCreateWithoutFieldSelectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFieldSelectionsInput
    connect?: UserWhereUniqueInput
  }

  export type FieldCatalogCreateNestedOneWithoutUserSelectionsInput = {
    create?: XOR<FieldCatalogCreateWithoutUserSelectionsInput, FieldCatalogUncheckedCreateWithoutUserSelectionsInput>
    connectOrCreate?: FieldCatalogCreateOrConnectWithoutUserSelectionsInput
    connect?: FieldCatalogWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFieldSelectionsNestedInput = {
    create?: XOR<UserCreateWithoutFieldSelectionsInput, UserUncheckedCreateWithoutFieldSelectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFieldSelectionsInput
    upsert?: UserUpsertWithoutFieldSelectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFieldSelectionsInput, UserUpdateWithoutFieldSelectionsInput>, UserUncheckedUpdateWithoutFieldSelectionsInput>
  }

  export type FieldCatalogUpdateOneRequiredWithoutUserSelectionsNestedInput = {
    create?: XOR<FieldCatalogCreateWithoutUserSelectionsInput, FieldCatalogUncheckedCreateWithoutUserSelectionsInput>
    connectOrCreate?: FieldCatalogCreateOrConnectWithoutUserSelectionsInput
    upsert?: FieldCatalogUpsertWithoutUserSelectionsInput
    connect?: FieldCatalogWhereUniqueInput
    update?: XOR<XOR<FieldCatalogUpdateToOneWithWhereWithoutUserSelectionsInput, FieldCatalogUpdateWithoutUserSelectionsInput>, FieldCatalogUncheckedUpdateWithoutUserSelectionsInput>
  }

  export type FieldCatalogCreateNestedOneWithoutIdeasInput = {
    create?: XOR<FieldCatalogCreateWithoutIdeasInput, FieldCatalogUncheckedCreateWithoutIdeasInput>
    connectOrCreate?: FieldCatalogCreateOrConnectWithoutIdeasInput
    connect?: FieldCatalogWhereUniqueInput
  }

  export type IdeaChunkEmbeddingCreateNestedManyWithoutIdeaInput = {
    create?: XOR<IdeaChunkEmbeddingCreateWithoutIdeaInput, IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput> | IdeaChunkEmbeddingCreateWithoutIdeaInput[] | IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaChunkEmbeddingCreateOrConnectWithoutIdeaInput | IdeaChunkEmbeddingCreateOrConnectWithoutIdeaInput[]
    createMany?: IdeaChunkEmbeddingCreateManyIdeaInputEnvelope
    connect?: IdeaChunkEmbeddingWhereUniqueInput | IdeaChunkEmbeddingWhereUniqueInput[]
  }

  export type IdeaStackItemCreateNestedManyWithoutIdeaInput = {
    create?: XOR<IdeaStackItemCreateWithoutIdeaInput, IdeaStackItemUncheckedCreateWithoutIdeaInput> | IdeaStackItemCreateWithoutIdeaInput[] | IdeaStackItemUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaStackItemCreateOrConnectWithoutIdeaInput | IdeaStackItemCreateOrConnectWithoutIdeaInput[]
    createMany?: IdeaStackItemCreateManyIdeaInputEnvelope
    connect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
  }

  export type SwipeEventCreateNestedManyWithoutIdeaInput = {
    create?: XOR<SwipeEventCreateWithoutIdeaInput, SwipeEventUncheckedCreateWithoutIdeaInput> | SwipeEventCreateWithoutIdeaInput[] | SwipeEventUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutIdeaInput | SwipeEventCreateOrConnectWithoutIdeaInput[]
    createMany?: SwipeEventCreateManyIdeaInputEnvelope
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutIdeaInput = {
    create?: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput> | FavoriteCreateWithoutIdeaInput[] | FavoriteUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutIdeaInput | FavoriteCreateOrConnectWithoutIdeaInput[]
    createMany?: FavoriteCreateManyIdeaInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type IdeaChunkEmbeddingUncheckedCreateNestedManyWithoutIdeaInput = {
    create?: XOR<IdeaChunkEmbeddingCreateWithoutIdeaInput, IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput> | IdeaChunkEmbeddingCreateWithoutIdeaInput[] | IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaChunkEmbeddingCreateOrConnectWithoutIdeaInput | IdeaChunkEmbeddingCreateOrConnectWithoutIdeaInput[]
    createMany?: IdeaChunkEmbeddingCreateManyIdeaInputEnvelope
    connect?: IdeaChunkEmbeddingWhereUniqueInput | IdeaChunkEmbeddingWhereUniqueInput[]
  }

  export type IdeaStackItemUncheckedCreateNestedManyWithoutIdeaInput = {
    create?: XOR<IdeaStackItemCreateWithoutIdeaInput, IdeaStackItemUncheckedCreateWithoutIdeaInput> | IdeaStackItemCreateWithoutIdeaInput[] | IdeaStackItemUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaStackItemCreateOrConnectWithoutIdeaInput | IdeaStackItemCreateOrConnectWithoutIdeaInput[]
    createMany?: IdeaStackItemCreateManyIdeaInputEnvelope
    connect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
  }

  export type SwipeEventUncheckedCreateNestedManyWithoutIdeaInput = {
    create?: XOR<SwipeEventCreateWithoutIdeaInput, SwipeEventUncheckedCreateWithoutIdeaInput> | SwipeEventCreateWithoutIdeaInput[] | SwipeEventUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutIdeaInput | SwipeEventCreateOrConnectWithoutIdeaInput[]
    createMany?: SwipeEventCreateManyIdeaInputEnvelope
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutIdeaInput = {
    create?: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput> | FavoriteCreateWithoutIdeaInput[] | FavoriteUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutIdeaInput | FavoriteCreateOrConnectWithoutIdeaInput[]
    createMany?: FavoriteCreateManyIdeaInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type FieldCatalogUpdateOneWithoutIdeasNestedInput = {
    create?: XOR<FieldCatalogCreateWithoutIdeasInput, FieldCatalogUncheckedCreateWithoutIdeasInput>
    connectOrCreate?: FieldCatalogCreateOrConnectWithoutIdeasInput
    upsert?: FieldCatalogUpsertWithoutIdeasInput
    disconnect?: FieldCatalogWhereInput | boolean
    delete?: FieldCatalogWhereInput | boolean
    connect?: FieldCatalogWhereUniqueInput
    update?: XOR<XOR<FieldCatalogUpdateToOneWithWhereWithoutIdeasInput, FieldCatalogUpdateWithoutIdeasInput>, FieldCatalogUncheckedUpdateWithoutIdeasInput>
  }

  export type IdeaChunkEmbeddingUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<IdeaChunkEmbeddingCreateWithoutIdeaInput, IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput> | IdeaChunkEmbeddingCreateWithoutIdeaInput[] | IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaChunkEmbeddingCreateOrConnectWithoutIdeaInput | IdeaChunkEmbeddingCreateOrConnectWithoutIdeaInput[]
    upsert?: IdeaChunkEmbeddingUpsertWithWhereUniqueWithoutIdeaInput | IdeaChunkEmbeddingUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: IdeaChunkEmbeddingCreateManyIdeaInputEnvelope
    set?: IdeaChunkEmbeddingWhereUniqueInput | IdeaChunkEmbeddingWhereUniqueInput[]
    disconnect?: IdeaChunkEmbeddingWhereUniqueInput | IdeaChunkEmbeddingWhereUniqueInput[]
    delete?: IdeaChunkEmbeddingWhereUniqueInput | IdeaChunkEmbeddingWhereUniqueInput[]
    connect?: IdeaChunkEmbeddingWhereUniqueInput | IdeaChunkEmbeddingWhereUniqueInput[]
    update?: IdeaChunkEmbeddingUpdateWithWhereUniqueWithoutIdeaInput | IdeaChunkEmbeddingUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: IdeaChunkEmbeddingUpdateManyWithWhereWithoutIdeaInput | IdeaChunkEmbeddingUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: IdeaChunkEmbeddingScalarWhereInput | IdeaChunkEmbeddingScalarWhereInput[]
  }

  export type IdeaStackItemUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<IdeaStackItemCreateWithoutIdeaInput, IdeaStackItemUncheckedCreateWithoutIdeaInput> | IdeaStackItemCreateWithoutIdeaInput[] | IdeaStackItemUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaStackItemCreateOrConnectWithoutIdeaInput | IdeaStackItemCreateOrConnectWithoutIdeaInput[]
    upsert?: IdeaStackItemUpsertWithWhereUniqueWithoutIdeaInput | IdeaStackItemUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: IdeaStackItemCreateManyIdeaInputEnvelope
    set?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    disconnect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    delete?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    connect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    update?: IdeaStackItemUpdateWithWhereUniqueWithoutIdeaInput | IdeaStackItemUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: IdeaStackItemUpdateManyWithWhereWithoutIdeaInput | IdeaStackItemUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: IdeaStackItemScalarWhereInput | IdeaStackItemScalarWhereInput[]
  }

  export type SwipeEventUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<SwipeEventCreateWithoutIdeaInput, SwipeEventUncheckedCreateWithoutIdeaInput> | SwipeEventCreateWithoutIdeaInput[] | SwipeEventUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutIdeaInput | SwipeEventCreateOrConnectWithoutIdeaInput[]
    upsert?: SwipeEventUpsertWithWhereUniqueWithoutIdeaInput | SwipeEventUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: SwipeEventCreateManyIdeaInputEnvelope
    set?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    disconnect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    delete?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    update?: SwipeEventUpdateWithWhereUniqueWithoutIdeaInput | SwipeEventUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: SwipeEventUpdateManyWithWhereWithoutIdeaInput | SwipeEventUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput> | FavoriteCreateWithoutIdeaInput[] | FavoriteUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutIdeaInput | FavoriteCreateOrConnectWithoutIdeaInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutIdeaInput | FavoriteUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: FavoriteCreateManyIdeaInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutIdeaInput | FavoriteUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutIdeaInput | FavoriteUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type IdeaChunkEmbeddingUncheckedUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<IdeaChunkEmbeddingCreateWithoutIdeaInput, IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput> | IdeaChunkEmbeddingCreateWithoutIdeaInput[] | IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaChunkEmbeddingCreateOrConnectWithoutIdeaInput | IdeaChunkEmbeddingCreateOrConnectWithoutIdeaInput[]
    upsert?: IdeaChunkEmbeddingUpsertWithWhereUniqueWithoutIdeaInput | IdeaChunkEmbeddingUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: IdeaChunkEmbeddingCreateManyIdeaInputEnvelope
    set?: IdeaChunkEmbeddingWhereUniqueInput | IdeaChunkEmbeddingWhereUniqueInput[]
    disconnect?: IdeaChunkEmbeddingWhereUniqueInput | IdeaChunkEmbeddingWhereUniqueInput[]
    delete?: IdeaChunkEmbeddingWhereUniqueInput | IdeaChunkEmbeddingWhereUniqueInput[]
    connect?: IdeaChunkEmbeddingWhereUniqueInput | IdeaChunkEmbeddingWhereUniqueInput[]
    update?: IdeaChunkEmbeddingUpdateWithWhereUniqueWithoutIdeaInput | IdeaChunkEmbeddingUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: IdeaChunkEmbeddingUpdateManyWithWhereWithoutIdeaInput | IdeaChunkEmbeddingUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: IdeaChunkEmbeddingScalarWhereInput | IdeaChunkEmbeddingScalarWhereInput[]
  }

  export type IdeaStackItemUncheckedUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<IdeaStackItemCreateWithoutIdeaInput, IdeaStackItemUncheckedCreateWithoutIdeaInput> | IdeaStackItemCreateWithoutIdeaInput[] | IdeaStackItemUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaStackItemCreateOrConnectWithoutIdeaInput | IdeaStackItemCreateOrConnectWithoutIdeaInput[]
    upsert?: IdeaStackItemUpsertWithWhereUniqueWithoutIdeaInput | IdeaStackItemUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: IdeaStackItemCreateManyIdeaInputEnvelope
    set?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    disconnect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    delete?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    connect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    update?: IdeaStackItemUpdateWithWhereUniqueWithoutIdeaInput | IdeaStackItemUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: IdeaStackItemUpdateManyWithWhereWithoutIdeaInput | IdeaStackItemUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: IdeaStackItemScalarWhereInput | IdeaStackItemScalarWhereInput[]
  }

  export type SwipeEventUncheckedUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<SwipeEventCreateWithoutIdeaInput, SwipeEventUncheckedCreateWithoutIdeaInput> | SwipeEventCreateWithoutIdeaInput[] | SwipeEventUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutIdeaInput | SwipeEventCreateOrConnectWithoutIdeaInput[]
    upsert?: SwipeEventUpsertWithWhereUniqueWithoutIdeaInput | SwipeEventUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: SwipeEventCreateManyIdeaInputEnvelope
    set?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    disconnect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    delete?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    update?: SwipeEventUpdateWithWhereUniqueWithoutIdeaInput | SwipeEventUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: SwipeEventUpdateManyWithWhereWithoutIdeaInput | SwipeEventUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput> | FavoriteCreateWithoutIdeaInput[] | FavoriteUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutIdeaInput | FavoriteCreateOrConnectWithoutIdeaInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutIdeaInput | FavoriteUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: FavoriteCreateManyIdeaInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutIdeaInput | FavoriteUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutIdeaInput | FavoriteUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type IdeaCreateNestedOneWithoutChunksInput = {
    create?: XOR<IdeaCreateWithoutChunksInput, IdeaUncheckedCreateWithoutChunksInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutChunksInput
    connect?: IdeaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IdeaUpdateOneRequiredWithoutChunksNestedInput = {
    create?: XOR<IdeaCreateWithoutChunksInput, IdeaUncheckedCreateWithoutChunksInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutChunksInput
    upsert?: IdeaUpsertWithoutChunksInput
    connect?: IdeaWhereUniqueInput
    update?: XOR<XOR<IdeaUpdateToOneWithWhereWithoutChunksInput, IdeaUpdateWithoutChunksInput>, IdeaUncheckedUpdateWithoutChunksInput>
  }

  export type UserCreateNestedOneWithoutStacksInput = {
    create?: XOR<UserCreateWithoutStacksInput, UserUncheckedCreateWithoutStacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutStacksInput
    connect?: UserWhereUniqueInput
  }

  export type IdeaStackItemCreateNestedManyWithoutStackInput = {
    create?: XOR<IdeaStackItemCreateWithoutStackInput, IdeaStackItemUncheckedCreateWithoutStackInput> | IdeaStackItemCreateWithoutStackInput[] | IdeaStackItemUncheckedCreateWithoutStackInput[]
    connectOrCreate?: IdeaStackItemCreateOrConnectWithoutStackInput | IdeaStackItemCreateOrConnectWithoutStackInput[]
    createMany?: IdeaStackItemCreateManyStackInputEnvelope
    connect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
  }

  export type SwipeEventCreateNestedManyWithoutStackInput = {
    create?: XOR<SwipeEventCreateWithoutStackInput, SwipeEventUncheckedCreateWithoutStackInput> | SwipeEventCreateWithoutStackInput[] | SwipeEventUncheckedCreateWithoutStackInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutStackInput | SwipeEventCreateOrConnectWithoutStackInput[]
    createMany?: SwipeEventCreateManyStackInputEnvelope
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
  }

  export type IdeaStackItemUncheckedCreateNestedManyWithoutStackInput = {
    create?: XOR<IdeaStackItemCreateWithoutStackInput, IdeaStackItemUncheckedCreateWithoutStackInput> | IdeaStackItemCreateWithoutStackInput[] | IdeaStackItemUncheckedCreateWithoutStackInput[]
    connectOrCreate?: IdeaStackItemCreateOrConnectWithoutStackInput | IdeaStackItemCreateOrConnectWithoutStackInput[]
    createMany?: IdeaStackItemCreateManyStackInputEnvelope
    connect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
  }

  export type SwipeEventUncheckedCreateNestedManyWithoutStackInput = {
    create?: XOR<SwipeEventCreateWithoutStackInput, SwipeEventUncheckedCreateWithoutStackInput> | SwipeEventCreateWithoutStackInput[] | SwipeEventUncheckedCreateWithoutStackInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutStackInput | SwipeEventCreateOrConnectWithoutStackInput[]
    createMany?: SwipeEventCreateManyStackInputEnvelope
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStacksNestedInput = {
    create?: XOR<UserCreateWithoutStacksInput, UserUncheckedCreateWithoutStacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutStacksInput
    upsert?: UserUpsertWithoutStacksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStacksInput, UserUpdateWithoutStacksInput>, UserUncheckedUpdateWithoutStacksInput>
  }

  export type IdeaStackItemUpdateManyWithoutStackNestedInput = {
    create?: XOR<IdeaStackItemCreateWithoutStackInput, IdeaStackItemUncheckedCreateWithoutStackInput> | IdeaStackItemCreateWithoutStackInput[] | IdeaStackItemUncheckedCreateWithoutStackInput[]
    connectOrCreate?: IdeaStackItemCreateOrConnectWithoutStackInput | IdeaStackItemCreateOrConnectWithoutStackInput[]
    upsert?: IdeaStackItemUpsertWithWhereUniqueWithoutStackInput | IdeaStackItemUpsertWithWhereUniqueWithoutStackInput[]
    createMany?: IdeaStackItemCreateManyStackInputEnvelope
    set?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    disconnect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    delete?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    connect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    update?: IdeaStackItemUpdateWithWhereUniqueWithoutStackInput | IdeaStackItemUpdateWithWhereUniqueWithoutStackInput[]
    updateMany?: IdeaStackItemUpdateManyWithWhereWithoutStackInput | IdeaStackItemUpdateManyWithWhereWithoutStackInput[]
    deleteMany?: IdeaStackItemScalarWhereInput | IdeaStackItemScalarWhereInput[]
  }

  export type SwipeEventUpdateManyWithoutStackNestedInput = {
    create?: XOR<SwipeEventCreateWithoutStackInput, SwipeEventUncheckedCreateWithoutStackInput> | SwipeEventCreateWithoutStackInput[] | SwipeEventUncheckedCreateWithoutStackInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutStackInput | SwipeEventCreateOrConnectWithoutStackInput[]
    upsert?: SwipeEventUpsertWithWhereUniqueWithoutStackInput | SwipeEventUpsertWithWhereUniqueWithoutStackInput[]
    createMany?: SwipeEventCreateManyStackInputEnvelope
    set?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    disconnect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    delete?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    update?: SwipeEventUpdateWithWhereUniqueWithoutStackInput | SwipeEventUpdateWithWhereUniqueWithoutStackInput[]
    updateMany?: SwipeEventUpdateManyWithWhereWithoutStackInput | SwipeEventUpdateManyWithWhereWithoutStackInput[]
    deleteMany?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
  }

  export type IdeaStackItemUncheckedUpdateManyWithoutStackNestedInput = {
    create?: XOR<IdeaStackItemCreateWithoutStackInput, IdeaStackItemUncheckedCreateWithoutStackInput> | IdeaStackItemCreateWithoutStackInput[] | IdeaStackItemUncheckedCreateWithoutStackInput[]
    connectOrCreate?: IdeaStackItemCreateOrConnectWithoutStackInput | IdeaStackItemCreateOrConnectWithoutStackInput[]
    upsert?: IdeaStackItemUpsertWithWhereUniqueWithoutStackInput | IdeaStackItemUpsertWithWhereUniqueWithoutStackInput[]
    createMany?: IdeaStackItemCreateManyStackInputEnvelope
    set?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    disconnect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    delete?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    connect?: IdeaStackItemWhereUniqueInput | IdeaStackItemWhereUniqueInput[]
    update?: IdeaStackItemUpdateWithWhereUniqueWithoutStackInput | IdeaStackItemUpdateWithWhereUniqueWithoutStackInput[]
    updateMany?: IdeaStackItemUpdateManyWithWhereWithoutStackInput | IdeaStackItemUpdateManyWithWhereWithoutStackInput[]
    deleteMany?: IdeaStackItemScalarWhereInput | IdeaStackItemScalarWhereInput[]
  }

  export type SwipeEventUncheckedUpdateManyWithoutStackNestedInput = {
    create?: XOR<SwipeEventCreateWithoutStackInput, SwipeEventUncheckedCreateWithoutStackInput> | SwipeEventCreateWithoutStackInput[] | SwipeEventUncheckedCreateWithoutStackInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutStackInput | SwipeEventCreateOrConnectWithoutStackInput[]
    upsert?: SwipeEventUpsertWithWhereUniqueWithoutStackInput | SwipeEventUpsertWithWhereUniqueWithoutStackInput[]
    createMany?: SwipeEventCreateManyStackInputEnvelope
    set?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    disconnect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    delete?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    update?: SwipeEventUpdateWithWhereUniqueWithoutStackInput | SwipeEventUpdateWithWhereUniqueWithoutStackInput[]
    updateMany?: SwipeEventUpdateManyWithWhereWithoutStackInput | SwipeEventUpdateManyWithWhereWithoutStackInput[]
    deleteMany?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
  }

  export type IdeaStackCreateNestedOneWithoutItemsInput = {
    create?: XOR<IdeaStackCreateWithoutItemsInput, IdeaStackUncheckedCreateWithoutItemsInput>
    connectOrCreate?: IdeaStackCreateOrConnectWithoutItemsInput
    connect?: IdeaStackWhereUniqueInput
  }

  export type IdeaCreateNestedOneWithoutStackItemsInput = {
    create?: XOR<IdeaCreateWithoutStackItemsInput, IdeaUncheckedCreateWithoutStackItemsInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutStackItemsInput
    connect?: IdeaWhereUniqueInput
  }

  export type IdeaStackUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<IdeaStackCreateWithoutItemsInput, IdeaStackUncheckedCreateWithoutItemsInput>
    connectOrCreate?: IdeaStackCreateOrConnectWithoutItemsInput
    upsert?: IdeaStackUpsertWithoutItemsInput
    connect?: IdeaStackWhereUniqueInput
    update?: XOR<XOR<IdeaStackUpdateToOneWithWhereWithoutItemsInput, IdeaStackUpdateWithoutItemsInput>, IdeaStackUncheckedUpdateWithoutItemsInput>
  }

  export type IdeaUpdateOneRequiredWithoutStackItemsNestedInput = {
    create?: XOR<IdeaCreateWithoutStackItemsInput, IdeaUncheckedCreateWithoutStackItemsInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutStackItemsInput
    upsert?: IdeaUpsertWithoutStackItemsInput
    connect?: IdeaWhereUniqueInput
    update?: XOR<XOR<IdeaUpdateToOneWithWhereWithoutStackItemsInput, IdeaUpdateWithoutStackItemsInput>, IdeaUncheckedUpdateWithoutStackItemsInput>
  }

  export type UserCreateNestedOneWithoutSwipeEventsInput = {
    create?: XOR<UserCreateWithoutSwipeEventsInput, UserUncheckedCreateWithoutSwipeEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipeEventsInput
    connect?: UserWhereUniqueInput
  }

  export type IdeaCreateNestedOneWithoutSwipeEventsInput = {
    create?: XOR<IdeaCreateWithoutSwipeEventsInput, IdeaUncheckedCreateWithoutSwipeEventsInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutSwipeEventsInput
    connect?: IdeaWhereUniqueInput
  }

  export type IdeaStackCreateNestedOneWithoutSwipeEventsInput = {
    create?: XOR<IdeaStackCreateWithoutSwipeEventsInput, IdeaStackUncheckedCreateWithoutSwipeEventsInput>
    connectOrCreate?: IdeaStackCreateOrConnectWithoutSwipeEventsInput
    connect?: IdeaStackWhereUniqueInput
  }

  export type EnumSwipeActionFieldUpdateOperationsInput = {
    set?: $Enums.SwipeAction
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSwipeEventsNestedInput = {
    create?: XOR<UserCreateWithoutSwipeEventsInput, UserUncheckedCreateWithoutSwipeEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipeEventsInput
    upsert?: UserUpsertWithoutSwipeEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwipeEventsInput, UserUpdateWithoutSwipeEventsInput>, UserUncheckedUpdateWithoutSwipeEventsInput>
  }

  export type IdeaUpdateOneRequiredWithoutSwipeEventsNestedInput = {
    create?: XOR<IdeaCreateWithoutSwipeEventsInput, IdeaUncheckedCreateWithoutSwipeEventsInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutSwipeEventsInput
    upsert?: IdeaUpsertWithoutSwipeEventsInput
    connect?: IdeaWhereUniqueInput
    update?: XOR<XOR<IdeaUpdateToOneWithWhereWithoutSwipeEventsInput, IdeaUpdateWithoutSwipeEventsInput>, IdeaUncheckedUpdateWithoutSwipeEventsInput>
  }

  export type IdeaStackUpdateOneWithoutSwipeEventsNestedInput = {
    create?: XOR<IdeaStackCreateWithoutSwipeEventsInput, IdeaStackUncheckedCreateWithoutSwipeEventsInput>
    connectOrCreate?: IdeaStackCreateOrConnectWithoutSwipeEventsInput
    upsert?: IdeaStackUpsertWithoutSwipeEventsInput
    disconnect?: IdeaStackWhereInput | boolean
    delete?: IdeaStackWhereInput | boolean
    connect?: IdeaStackWhereUniqueInput
    update?: XOR<XOR<IdeaStackUpdateToOneWithWhereWithoutSwipeEventsInput, IdeaStackUpdateWithoutSwipeEventsInput>, IdeaStackUncheckedUpdateWithoutSwipeEventsInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type IdeaCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<IdeaCreateWithoutFavoritesInput, IdeaUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutFavoritesInput
    connect?: IdeaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type IdeaUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<IdeaCreateWithoutFavoritesInput, IdeaUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutFavoritesInput
    upsert?: IdeaUpsertWithoutFavoritesInput
    connect?: IdeaWhereUniqueInput
    update?: XOR<XOR<IdeaUpdateToOneWithWhereWithoutFavoritesInput, IdeaUpdateWithoutFavoritesInput>, IdeaUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutPreferenceLogsInput = {
    create?: XOR<UserCreateWithoutPreferenceLogsInput, UserUncheckedCreateWithoutPreferenceLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferenceLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPreferenceLogsNestedInput = {
    create?: XOR<UserCreateWithoutPreferenceLogsInput, UserUncheckedCreateWithoutPreferenceLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferenceLogsInput
    upsert?: UserUpsertWithoutPreferenceLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferenceLogsInput, UserUpdateWithoutPreferenceLogsInput>, UserUncheckedUpdateWithoutPreferenceLogsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSwipeActionFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | EnumSwipeActionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeAction[]
    notIn?: $Enums.SwipeAction[]
    not?: NestedEnumSwipeActionFilter<$PrismaModel> | $Enums.SwipeAction
  }

  export type NestedEnumSwipeActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | EnumSwipeActionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeAction[]
    notIn?: $Enums.SwipeAction[]
    not?: NestedEnumSwipeActionWithAggregatesFilter<$PrismaModel> | $Enums.SwipeAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwipeActionFilter<$PrismaModel>
    _max?: NestedEnumSwipeActionFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    fieldSelections?: UserFieldSelectionCreateNestedManyWithoutUserInput
    stacks?: IdeaStackCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    fieldSelections?: UserFieldSelectionUncheckedCreateNestedManyWithoutUserInput
    stacks?: IdeaStackUncheckedCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    fieldSelections?: UserFieldSelectionUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    fieldSelections?: UserFieldSelectionUncheckedUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUncheckedUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type PostCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
  }

  export type UserFieldSelectionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    field: FieldCatalogCreateNestedOneWithoutUserSelectionsInput
  }

  export type UserFieldSelectionUncheckedCreateWithoutUserInput = {
    id?: string
    fieldId: string
    createdAt?: Date | string
  }

  export type UserFieldSelectionCreateOrConnectWithoutUserInput = {
    where: UserFieldSelectionWhereUniqueInput
    create: XOR<UserFieldSelectionCreateWithoutUserInput, UserFieldSelectionUncheckedCreateWithoutUserInput>
  }

  export type UserFieldSelectionCreateManyUserInputEnvelope = {
    data: UserFieldSelectionCreateManyUserInput | UserFieldSelectionCreateManyUserInput[]
  }

  export type IdeaStackCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    refreshedAt?: Date | string
    expiresAt: Date | string
    items?: IdeaStackItemCreateNestedManyWithoutStackInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutStackInput
  }

  export type IdeaStackUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    refreshedAt?: Date | string
    expiresAt: Date | string
    items?: IdeaStackItemUncheckedCreateNestedManyWithoutStackInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutStackInput
  }

  export type IdeaStackCreateOrConnectWithoutUserInput = {
    where: IdeaStackWhereUniqueInput
    create: XOR<IdeaStackCreateWithoutUserInput, IdeaStackUncheckedCreateWithoutUserInput>
  }

  export type IdeaStackCreateManyUserInputEnvelope = {
    data: IdeaStackCreateManyUserInput | IdeaStackCreateManyUserInput[]
  }

  export type SwipeEventCreateWithoutUserInput = {
    id?: string
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
    idea: IdeaCreateNestedOneWithoutSwipeEventsInput
    stack?: IdeaStackCreateNestedOneWithoutSwipeEventsInput
  }

  export type SwipeEventUncheckedCreateWithoutUserInput = {
    id?: string
    ideaId: string
    stackId?: string | null
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
  }

  export type SwipeEventCreateOrConnectWithoutUserInput = {
    where: SwipeEventWhereUniqueInput
    create: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput>
  }

  export type SwipeEventCreateManyUserInputEnvelope = {
    data: SwipeEventCreateManyUserInput | SwipeEventCreateManyUserInput[]
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    idea: IdeaCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    ideaId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
  }

  export type PreferenceUpdateLogCreateWithoutUserInput = {
    id?: string
    reason: string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PreferenceUpdateLogUncheckedCreateWithoutUserInput = {
    id?: string
    reason: string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PreferenceUpdateLogCreateOrConnectWithoutUserInput = {
    where: PreferenceUpdateLogWhereUniqueInput
    create: XOR<PreferenceUpdateLogCreateWithoutUserInput, PreferenceUpdateLogUncheckedCreateWithoutUserInput>
  }

  export type PreferenceUpdateLogCreateManyUserInputEnvelope = {
    data: PreferenceUpdateLogCreateManyUserInput | PreferenceUpdateLogCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type UserFieldSelectionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFieldSelectionWhereUniqueInput
    update: XOR<UserFieldSelectionUpdateWithoutUserInput, UserFieldSelectionUncheckedUpdateWithoutUserInput>
    create: XOR<UserFieldSelectionCreateWithoutUserInput, UserFieldSelectionUncheckedCreateWithoutUserInput>
  }

  export type UserFieldSelectionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFieldSelectionWhereUniqueInput
    data: XOR<UserFieldSelectionUpdateWithoutUserInput, UserFieldSelectionUncheckedUpdateWithoutUserInput>
  }

  export type UserFieldSelectionUpdateManyWithWhereWithoutUserInput = {
    where: UserFieldSelectionScalarWhereInput
    data: XOR<UserFieldSelectionUpdateManyMutationInput, UserFieldSelectionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFieldSelectionScalarWhereInput = {
    AND?: UserFieldSelectionScalarWhereInput | UserFieldSelectionScalarWhereInput[]
    OR?: UserFieldSelectionScalarWhereInput[]
    NOT?: UserFieldSelectionScalarWhereInput | UserFieldSelectionScalarWhereInput[]
    id?: StringFilter<"UserFieldSelection"> | string
    userId?: StringFilter<"UserFieldSelection"> | string
    fieldId?: StringFilter<"UserFieldSelection"> | string
    createdAt?: DateTimeFilter<"UserFieldSelection"> | Date | string
  }

  export type IdeaStackUpsertWithWhereUniqueWithoutUserInput = {
    where: IdeaStackWhereUniqueInput
    update: XOR<IdeaStackUpdateWithoutUserInput, IdeaStackUncheckedUpdateWithoutUserInput>
    create: XOR<IdeaStackCreateWithoutUserInput, IdeaStackUncheckedCreateWithoutUserInput>
  }

  export type IdeaStackUpdateWithWhereUniqueWithoutUserInput = {
    where: IdeaStackWhereUniqueInput
    data: XOR<IdeaStackUpdateWithoutUserInput, IdeaStackUncheckedUpdateWithoutUserInput>
  }

  export type IdeaStackUpdateManyWithWhereWithoutUserInput = {
    where: IdeaStackScalarWhereInput
    data: XOR<IdeaStackUpdateManyMutationInput, IdeaStackUncheckedUpdateManyWithoutUserInput>
  }

  export type IdeaStackScalarWhereInput = {
    AND?: IdeaStackScalarWhereInput | IdeaStackScalarWhereInput[]
    OR?: IdeaStackScalarWhereInput[]
    NOT?: IdeaStackScalarWhereInput | IdeaStackScalarWhereInput[]
    id?: StringFilter<"IdeaStack"> | string
    userId?: StringFilter<"IdeaStack"> | string
    createdAt?: DateTimeFilter<"IdeaStack"> | Date | string
    refreshedAt?: DateTimeFilter<"IdeaStack"> | Date | string
    expiresAt?: DateTimeFilter<"IdeaStack"> | Date | string
  }

  export type SwipeEventUpsertWithWhereUniqueWithoutUserInput = {
    where: SwipeEventWhereUniqueInput
    update: XOR<SwipeEventUpdateWithoutUserInput, SwipeEventUncheckedUpdateWithoutUserInput>
    create: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput>
  }

  export type SwipeEventUpdateWithWhereUniqueWithoutUserInput = {
    where: SwipeEventWhereUniqueInput
    data: XOR<SwipeEventUpdateWithoutUserInput, SwipeEventUncheckedUpdateWithoutUserInput>
  }

  export type SwipeEventUpdateManyWithWhereWithoutUserInput = {
    where: SwipeEventScalarWhereInput
    data: XOR<SwipeEventUpdateManyMutationInput, SwipeEventUncheckedUpdateManyWithoutUserInput>
  }

  export type SwipeEventScalarWhereInput = {
    AND?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
    OR?: SwipeEventScalarWhereInput[]
    NOT?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
    id?: StringFilter<"SwipeEvent"> | string
    userId?: StringFilter<"SwipeEvent"> | string
    ideaId?: StringFilter<"SwipeEvent"> | string
    stackId?: StringNullableFilter<"SwipeEvent"> | string | null
    action?: EnumSwipeActionFilter<"SwipeEvent"> | $Enums.SwipeAction
    scoreDelta?: FloatFilter<"SwipeEvent"> | number
    createdAt?: DateTimeFilter<"SwipeEvent"> | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    ideaId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type PreferenceUpdateLogUpsertWithWhereUniqueWithoutUserInput = {
    where: PreferenceUpdateLogWhereUniqueInput
    update: XOR<PreferenceUpdateLogUpdateWithoutUserInput, PreferenceUpdateLogUncheckedUpdateWithoutUserInput>
    create: XOR<PreferenceUpdateLogCreateWithoutUserInput, PreferenceUpdateLogUncheckedCreateWithoutUserInput>
  }

  export type PreferenceUpdateLogUpdateWithWhereUniqueWithoutUserInput = {
    where: PreferenceUpdateLogWhereUniqueInput
    data: XOR<PreferenceUpdateLogUpdateWithoutUserInput, PreferenceUpdateLogUncheckedUpdateWithoutUserInput>
  }

  export type PreferenceUpdateLogUpdateManyWithWhereWithoutUserInput = {
    where: PreferenceUpdateLogScalarWhereInput
    data: XOR<PreferenceUpdateLogUpdateManyMutationInput, PreferenceUpdateLogUncheckedUpdateManyWithoutUserInput>
  }

  export type PreferenceUpdateLogScalarWhereInput = {
    AND?: PreferenceUpdateLogScalarWhereInput | PreferenceUpdateLogScalarWhereInput[]
    OR?: PreferenceUpdateLogScalarWhereInput[]
    NOT?: PreferenceUpdateLogScalarWhereInput | PreferenceUpdateLogScalarWhereInput[]
    id?: StringFilter<"PreferenceUpdateLog"> | string
    userId?: StringFilter<"PreferenceUpdateLog"> | string
    reason?: StringFilter<"PreferenceUpdateLog"> | string
    previousVector?: JsonNullableFilter<"PreferenceUpdateLog">
    updatedVector?: JsonFilter<"PreferenceUpdateLog">
    createdAt?: DateTimeFilter<"PreferenceUpdateLog"> | Date | string
  }

  export type UserFieldSelectionCreateWithoutFieldInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFieldSelectionsInput
  }

  export type UserFieldSelectionUncheckedCreateWithoutFieldInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserFieldSelectionCreateOrConnectWithoutFieldInput = {
    where: UserFieldSelectionWhereUniqueInput
    create: XOR<UserFieldSelectionCreateWithoutFieldInput, UserFieldSelectionUncheckedCreateWithoutFieldInput>
  }

  export type UserFieldSelectionCreateManyFieldInputEnvelope = {
    data: UserFieldSelectionCreateManyFieldInput | UserFieldSelectionCreateManyFieldInput[]
  }

  export type IdeaCreateWithoutFieldInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: IdeaChunkEmbeddingCreateNestedManyWithoutIdeaInput
    stackItems?: IdeaStackItemCreateNestedManyWithoutIdeaInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutIdeaInput
    favorites?: FavoriteCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUncheckedCreateWithoutFieldInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    chunks?: IdeaChunkEmbeddingUncheckedCreateNestedManyWithoutIdeaInput
    stackItems?: IdeaStackItemUncheckedCreateNestedManyWithoutIdeaInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutIdeaInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type IdeaCreateOrConnectWithoutFieldInput = {
    where: IdeaWhereUniqueInput
    create: XOR<IdeaCreateWithoutFieldInput, IdeaUncheckedCreateWithoutFieldInput>
  }

  export type IdeaCreateManyFieldInputEnvelope = {
    data: IdeaCreateManyFieldInput | IdeaCreateManyFieldInput[]
  }

  export type UserFieldSelectionUpsertWithWhereUniqueWithoutFieldInput = {
    where: UserFieldSelectionWhereUniqueInput
    update: XOR<UserFieldSelectionUpdateWithoutFieldInput, UserFieldSelectionUncheckedUpdateWithoutFieldInput>
    create: XOR<UserFieldSelectionCreateWithoutFieldInput, UserFieldSelectionUncheckedCreateWithoutFieldInput>
  }

  export type UserFieldSelectionUpdateWithWhereUniqueWithoutFieldInput = {
    where: UserFieldSelectionWhereUniqueInput
    data: XOR<UserFieldSelectionUpdateWithoutFieldInput, UserFieldSelectionUncheckedUpdateWithoutFieldInput>
  }

  export type UserFieldSelectionUpdateManyWithWhereWithoutFieldInput = {
    where: UserFieldSelectionScalarWhereInput
    data: XOR<UserFieldSelectionUpdateManyMutationInput, UserFieldSelectionUncheckedUpdateManyWithoutFieldInput>
  }

  export type IdeaUpsertWithWhereUniqueWithoutFieldInput = {
    where: IdeaWhereUniqueInput
    update: XOR<IdeaUpdateWithoutFieldInput, IdeaUncheckedUpdateWithoutFieldInput>
    create: XOR<IdeaCreateWithoutFieldInput, IdeaUncheckedCreateWithoutFieldInput>
  }

  export type IdeaUpdateWithWhereUniqueWithoutFieldInput = {
    where: IdeaWhereUniqueInput
    data: XOR<IdeaUpdateWithoutFieldInput, IdeaUncheckedUpdateWithoutFieldInput>
  }

  export type IdeaUpdateManyWithWhereWithoutFieldInput = {
    where: IdeaScalarWhereInput
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyWithoutFieldInput>
  }

  export type IdeaScalarWhereInput = {
    AND?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
    OR?: IdeaScalarWhereInput[]
    NOT?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
    id?: StringFilter<"Idea"> | string
    title?: StringFilter<"Idea"> | string
    description?: StringFilter<"Idea"> | string
    vector?: JsonNullableFilter<"Idea">
    createdAt?: DateTimeFilter<"Idea"> | Date | string
    updatedAt?: DateTimeFilter<"Idea"> | Date | string
    fieldId?: StringNullableFilter<"Idea"> | string | null
  }

  export type UserCreateWithoutFieldSelectionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    stacks?: IdeaStackCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFieldSelectionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    stacks?: IdeaStackUncheckedCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFieldSelectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFieldSelectionsInput, UserUncheckedCreateWithoutFieldSelectionsInput>
  }

  export type FieldCatalogCreateWithoutUserSelectionsInput = {
    id?: string
    slug: string
    label: string
    isCustom?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ideas?: IdeaCreateNestedManyWithoutFieldInput
  }

  export type FieldCatalogUncheckedCreateWithoutUserSelectionsInput = {
    id?: string
    slug: string
    label: string
    isCustom?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ideas?: IdeaUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCatalogCreateOrConnectWithoutUserSelectionsInput = {
    where: FieldCatalogWhereUniqueInput
    create: XOR<FieldCatalogCreateWithoutUserSelectionsInput, FieldCatalogUncheckedCreateWithoutUserSelectionsInput>
  }

  export type UserUpsertWithoutFieldSelectionsInput = {
    update: XOR<UserUpdateWithoutFieldSelectionsInput, UserUncheckedUpdateWithoutFieldSelectionsInput>
    create: XOR<UserCreateWithoutFieldSelectionsInput, UserUncheckedCreateWithoutFieldSelectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFieldSelectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFieldSelectionsInput, UserUncheckedUpdateWithoutFieldSelectionsInput>
  }

  export type UserUpdateWithoutFieldSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    stacks?: IdeaStackUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFieldSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    stacks?: IdeaStackUncheckedUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FieldCatalogUpsertWithoutUserSelectionsInput = {
    update: XOR<FieldCatalogUpdateWithoutUserSelectionsInput, FieldCatalogUncheckedUpdateWithoutUserSelectionsInput>
    create: XOR<FieldCatalogCreateWithoutUserSelectionsInput, FieldCatalogUncheckedCreateWithoutUserSelectionsInput>
    where?: FieldCatalogWhereInput
  }

  export type FieldCatalogUpdateToOneWithWhereWithoutUserSelectionsInput = {
    where?: FieldCatalogWhereInput
    data: XOR<FieldCatalogUpdateWithoutUserSelectionsInput, FieldCatalogUncheckedUpdateWithoutUserSelectionsInput>
  }

  export type FieldCatalogUpdateWithoutUserSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideas?: IdeaUpdateManyWithoutFieldNestedInput
  }

  export type FieldCatalogUncheckedUpdateWithoutUserSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideas?: IdeaUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FieldCatalogCreateWithoutIdeasInput = {
    id?: string
    slug: string
    label: string
    isCustom?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userSelections?: UserFieldSelectionCreateNestedManyWithoutFieldInput
  }

  export type FieldCatalogUncheckedCreateWithoutIdeasInput = {
    id?: string
    slug: string
    label: string
    isCustom?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userSelections?: UserFieldSelectionUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCatalogCreateOrConnectWithoutIdeasInput = {
    where: FieldCatalogWhereUniqueInput
    create: XOR<FieldCatalogCreateWithoutIdeasInput, FieldCatalogUncheckedCreateWithoutIdeasInput>
  }

  export type IdeaChunkEmbeddingCreateWithoutIdeaInput = {
    id?: string
    chunkIndex: number
    content: string
    vector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput = {
    id?: string
    chunkIndex: number
    content: string
    vector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IdeaChunkEmbeddingCreateOrConnectWithoutIdeaInput = {
    where: IdeaChunkEmbeddingWhereUniqueInput
    create: XOR<IdeaChunkEmbeddingCreateWithoutIdeaInput, IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput>
  }

  export type IdeaChunkEmbeddingCreateManyIdeaInputEnvelope = {
    data: IdeaChunkEmbeddingCreateManyIdeaInput | IdeaChunkEmbeddingCreateManyIdeaInput[]
  }

  export type IdeaStackItemCreateWithoutIdeaInput = {
    id?: string
    position: number
    stack: IdeaStackCreateNestedOneWithoutItemsInput
  }

  export type IdeaStackItemUncheckedCreateWithoutIdeaInput = {
    id?: string
    stackId: string
    position: number
  }

  export type IdeaStackItemCreateOrConnectWithoutIdeaInput = {
    where: IdeaStackItemWhereUniqueInput
    create: XOR<IdeaStackItemCreateWithoutIdeaInput, IdeaStackItemUncheckedCreateWithoutIdeaInput>
  }

  export type IdeaStackItemCreateManyIdeaInputEnvelope = {
    data: IdeaStackItemCreateManyIdeaInput | IdeaStackItemCreateManyIdeaInput[]
  }

  export type SwipeEventCreateWithoutIdeaInput = {
    id?: string
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSwipeEventsInput
    stack?: IdeaStackCreateNestedOneWithoutSwipeEventsInput
  }

  export type SwipeEventUncheckedCreateWithoutIdeaInput = {
    id?: string
    userId: string
    stackId?: string | null
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
  }

  export type SwipeEventCreateOrConnectWithoutIdeaInput = {
    where: SwipeEventWhereUniqueInput
    create: XOR<SwipeEventCreateWithoutIdeaInput, SwipeEventUncheckedCreateWithoutIdeaInput>
  }

  export type SwipeEventCreateManyIdeaInputEnvelope = {
    data: SwipeEventCreateManyIdeaInput | SwipeEventCreateManyIdeaInput[]
  }

  export type FavoriteCreateWithoutIdeaInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutIdeaInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutIdeaInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput>
  }

  export type FavoriteCreateManyIdeaInputEnvelope = {
    data: FavoriteCreateManyIdeaInput | FavoriteCreateManyIdeaInput[]
  }

  export type FieldCatalogUpsertWithoutIdeasInput = {
    update: XOR<FieldCatalogUpdateWithoutIdeasInput, FieldCatalogUncheckedUpdateWithoutIdeasInput>
    create: XOR<FieldCatalogCreateWithoutIdeasInput, FieldCatalogUncheckedCreateWithoutIdeasInput>
    where?: FieldCatalogWhereInput
  }

  export type FieldCatalogUpdateToOneWithWhereWithoutIdeasInput = {
    where?: FieldCatalogWhereInput
    data: XOR<FieldCatalogUpdateWithoutIdeasInput, FieldCatalogUncheckedUpdateWithoutIdeasInput>
  }

  export type FieldCatalogUpdateWithoutIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSelections?: UserFieldSelectionUpdateManyWithoutFieldNestedInput
  }

  export type FieldCatalogUncheckedUpdateWithoutIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSelections?: UserFieldSelectionUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type IdeaChunkEmbeddingUpsertWithWhereUniqueWithoutIdeaInput = {
    where: IdeaChunkEmbeddingWhereUniqueInput
    update: XOR<IdeaChunkEmbeddingUpdateWithoutIdeaInput, IdeaChunkEmbeddingUncheckedUpdateWithoutIdeaInput>
    create: XOR<IdeaChunkEmbeddingCreateWithoutIdeaInput, IdeaChunkEmbeddingUncheckedCreateWithoutIdeaInput>
  }

  export type IdeaChunkEmbeddingUpdateWithWhereUniqueWithoutIdeaInput = {
    where: IdeaChunkEmbeddingWhereUniqueInput
    data: XOR<IdeaChunkEmbeddingUpdateWithoutIdeaInput, IdeaChunkEmbeddingUncheckedUpdateWithoutIdeaInput>
  }

  export type IdeaChunkEmbeddingUpdateManyWithWhereWithoutIdeaInput = {
    where: IdeaChunkEmbeddingScalarWhereInput
    data: XOR<IdeaChunkEmbeddingUpdateManyMutationInput, IdeaChunkEmbeddingUncheckedUpdateManyWithoutIdeaInput>
  }

  export type IdeaChunkEmbeddingScalarWhereInput = {
    AND?: IdeaChunkEmbeddingScalarWhereInput | IdeaChunkEmbeddingScalarWhereInput[]
    OR?: IdeaChunkEmbeddingScalarWhereInput[]
    NOT?: IdeaChunkEmbeddingScalarWhereInput | IdeaChunkEmbeddingScalarWhereInput[]
    id?: StringFilter<"IdeaChunkEmbedding"> | string
    ideaId?: StringFilter<"IdeaChunkEmbedding"> | string
    chunkIndex?: IntFilter<"IdeaChunkEmbedding"> | number
    content?: StringFilter<"IdeaChunkEmbedding"> | string
    vector?: JsonFilter<"IdeaChunkEmbedding">
    createdAt?: DateTimeFilter<"IdeaChunkEmbedding"> | Date | string
  }

  export type IdeaStackItemUpsertWithWhereUniqueWithoutIdeaInput = {
    where: IdeaStackItemWhereUniqueInput
    update: XOR<IdeaStackItemUpdateWithoutIdeaInput, IdeaStackItemUncheckedUpdateWithoutIdeaInput>
    create: XOR<IdeaStackItemCreateWithoutIdeaInput, IdeaStackItemUncheckedCreateWithoutIdeaInput>
  }

  export type IdeaStackItemUpdateWithWhereUniqueWithoutIdeaInput = {
    where: IdeaStackItemWhereUniqueInput
    data: XOR<IdeaStackItemUpdateWithoutIdeaInput, IdeaStackItemUncheckedUpdateWithoutIdeaInput>
  }

  export type IdeaStackItemUpdateManyWithWhereWithoutIdeaInput = {
    where: IdeaStackItemScalarWhereInput
    data: XOR<IdeaStackItemUpdateManyMutationInput, IdeaStackItemUncheckedUpdateManyWithoutIdeaInput>
  }

  export type IdeaStackItemScalarWhereInput = {
    AND?: IdeaStackItemScalarWhereInput | IdeaStackItemScalarWhereInput[]
    OR?: IdeaStackItemScalarWhereInput[]
    NOT?: IdeaStackItemScalarWhereInput | IdeaStackItemScalarWhereInput[]
    id?: StringFilter<"IdeaStackItem"> | string
    stackId?: StringFilter<"IdeaStackItem"> | string
    ideaId?: StringFilter<"IdeaStackItem"> | string
    position?: IntFilter<"IdeaStackItem"> | number
  }

  export type SwipeEventUpsertWithWhereUniqueWithoutIdeaInput = {
    where: SwipeEventWhereUniqueInput
    update: XOR<SwipeEventUpdateWithoutIdeaInput, SwipeEventUncheckedUpdateWithoutIdeaInput>
    create: XOR<SwipeEventCreateWithoutIdeaInput, SwipeEventUncheckedCreateWithoutIdeaInput>
  }

  export type SwipeEventUpdateWithWhereUniqueWithoutIdeaInput = {
    where: SwipeEventWhereUniqueInput
    data: XOR<SwipeEventUpdateWithoutIdeaInput, SwipeEventUncheckedUpdateWithoutIdeaInput>
  }

  export type SwipeEventUpdateManyWithWhereWithoutIdeaInput = {
    where: SwipeEventScalarWhereInput
    data: XOR<SwipeEventUpdateManyMutationInput, SwipeEventUncheckedUpdateManyWithoutIdeaInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutIdeaInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutIdeaInput, FavoriteUncheckedUpdateWithoutIdeaInput>
    create: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutIdeaInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutIdeaInput, FavoriteUncheckedUpdateWithoutIdeaInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutIdeaInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutIdeaInput>
  }

  export type IdeaCreateWithoutChunksInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    field?: FieldCatalogCreateNestedOneWithoutIdeasInput
    stackItems?: IdeaStackItemCreateNestedManyWithoutIdeaInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutIdeaInput
    favorites?: FavoriteCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUncheckedCreateWithoutChunksInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldId?: string | null
    stackItems?: IdeaStackItemUncheckedCreateNestedManyWithoutIdeaInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutIdeaInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type IdeaCreateOrConnectWithoutChunksInput = {
    where: IdeaWhereUniqueInput
    create: XOR<IdeaCreateWithoutChunksInput, IdeaUncheckedCreateWithoutChunksInput>
  }

  export type IdeaUpsertWithoutChunksInput = {
    update: XOR<IdeaUpdateWithoutChunksInput, IdeaUncheckedUpdateWithoutChunksInput>
    create: XOR<IdeaCreateWithoutChunksInput, IdeaUncheckedCreateWithoutChunksInput>
    where?: IdeaWhereInput
  }

  export type IdeaUpdateToOneWithWhereWithoutChunksInput = {
    where?: IdeaWhereInput
    data: XOR<IdeaUpdateWithoutChunksInput, IdeaUncheckedUpdateWithoutChunksInput>
  }

  export type IdeaUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldCatalogUpdateOneWithoutIdeasNestedInput
    stackItems?: IdeaStackItemUpdateManyWithoutIdeaNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutIdeaNestedInput
    favorites?: FavoriteUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    stackItems?: IdeaStackItemUncheckedUpdateManyWithoutIdeaNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutIdeaNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type UserCreateWithoutStacksInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStacksInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionUncheckedCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStacksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStacksInput, UserUncheckedCreateWithoutStacksInput>
  }

  export type IdeaStackItemCreateWithoutStackInput = {
    id?: string
    position: number
    idea: IdeaCreateNestedOneWithoutStackItemsInput
  }

  export type IdeaStackItemUncheckedCreateWithoutStackInput = {
    id?: string
    ideaId: string
    position: number
  }

  export type IdeaStackItemCreateOrConnectWithoutStackInput = {
    where: IdeaStackItemWhereUniqueInput
    create: XOR<IdeaStackItemCreateWithoutStackInput, IdeaStackItemUncheckedCreateWithoutStackInput>
  }

  export type IdeaStackItemCreateManyStackInputEnvelope = {
    data: IdeaStackItemCreateManyStackInput | IdeaStackItemCreateManyStackInput[]
  }

  export type SwipeEventCreateWithoutStackInput = {
    id?: string
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSwipeEventsInput
    idea: IdeaCreateNestedOneWithoutSwipeEventsInput
  }

  export type SwipeEventUncheckedCreateWithoutStackInput = {
    id?: string
    userId: string
    ideaId: string
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
  }

  export type SwipeEventCreateOrConnectWithoutStackInput = {
    where: SwipeEventWhereUniqueInput
    create: XOR<SwipeEventCreateWithoutStackInput, SwipeEventUncheckedCreateWithoutStackInput>
  }

  export type SwipeEventCreateManyStackInputEnvelope = {
    data: SwipeEventCreateManyStackInput | SwipeEventCreateManyStackInput[]
  }

  export type UserUpsertWithoutStacksInput = {
    update: XOR<UserUpdateWithoutStacksInput, UserUncheckedUpdateWithoutStacksInput>
    create: XOR<UserCreateWithoutStacksInput, UserUncheckedCreateWithoutStacksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStacksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStacksInput, UserUncheckedUpdateWithoutStacksInput>
  }

  export type UserUpdateWithoutStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUncheckedUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IdeaStackItemUpsertWithWhereUniqueWithoutStackInput = {
    where: IdeaStackItemWhereUniqueInput
    update: XOR<IdeaStackItemUpdateWithoutStackInput, IdeaStackItemUncheckedUpdateWithoutStackInput>
    create: XOR<IdeaStackItemCreateWithoutStackInput, IdeaStackItemUncheckedCreateWithoutStackInput>
  }

  export type IdeaStackItemUpdateWithWhereUniqueWithoutStackInput = {
    where: IdeaStackItemWhereUniqueInput
    data: XOR<IdeaStackItemUpdateWithoutStackInput, IdeaStackItemUncheckedUpdateWithoutStackInput>
  }

  export type IdeaStackItemUpdateManyWithWhereWithoutStackInput = {
    where: IdeaStackItemScalarWhereInput
    data: XOR<IdeaStackItemUpdateManyMutationInput, IdeaStackItemUncheckedUpdateManyWithoutStackInput>
  }

  export type SwipeEventUpsertWithWhereUniqueWithoutStackInput = {
    where: SwipeEventWhereUniqueInput
    update: XOR<SwipeEventUpdateWithoutStackInput, SwipeEventUncheckedUpdateWithoutStackInput>
    create: XOR<SwipeEventCreateWithoutStackInput, SwipeEventUncheckedCreateWithoutStackInput>
  }

  export type SwipeEventUpdateWithWhereUniqueWithoutStackInput = {
    where: SwipeEventWhereUniqueInput
    data: XOR<SwipeEventUpdateWithoutStackInput, SwipeEventUncheckedUpdateWithoutStackInput>
  }

  export type SwipeEventUpdateManyWithWhereWithoutStackInput = {
    where: SwipeEventScalarWhereInput
    data: XOR<SwipeEventUpdateManyMutationInput, SwipeEventUncheckedUpdateManyWithoutStackInput>
  }

  export type IdeaStackCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    refreshedAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutStacksInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutStackInput
  }

  export type IdeaStackUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    refreshedAt?: Date | string
    expiresAt: Date | string
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutStackInput
  }

  export type IdeaStackCreateOrConnectWithoutItemsInput = {
    where: IdeaStackWhereUniqueInput
    create: XOR<IdeaStackCreateWithoutItemsInput, IdeaStackUncheckedCreateWithoutItemsInput>
  }

  export type IdeaCreateWithoutStackItemsInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    field?: FieldCatalogCreateNestedOneWithoutIdeasInput
    chunks?: IdeaChunkEmbeddingCreateNestedManyWithoutIdeaInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutIdeaInput
    favorites?: FavoriteCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUncheckedCreateWithoutStackItemsInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldId?: string | null
    chunks?: IdeaChunkEmbeddingUncheckedCreateNestedManyWithoutIdeaInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutIdeaInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type IdeaCreateOrConnectWithoutStackItemsInput = {
    where: IdeaWhereUniqueInput
    create: XOR<IdeaCreateWithoutStackItemsInput, IdeaUncheckedCreateWithoutStackItemsInput>
  }

  export type IdeaStackUpsertWithoutItemsInput = {
    update: XOR<IdeaStackUpdateWithoutItemsInput, IdeaStackUncheckedUpdateWithoutItemsInput>
    create: XOR<IdeaStackCreateWithoutItemsInput, IdeaStackUncheckedCreateWithoutItemsInput>
    where?: IdeaStackWhereInput
  }

  export type IdeaStackUpdateToOneWithWhereWithoutItemsInput = {
    where?: IdeaStackWhereInput
    data: XOR<IdeaStackUpdateWithoutItemsInput, IdeaStackUncheckedUpdateWithoutItemsInput>
  }

  export type IdeaStackUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStacksNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutStackNestedInput
  }

  export type IdeaStackUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutStackNestedInput
  }

  export type IdeaUpsertWithoutStackItemsInput = {
    update: XOR<IdeaUpdateWithoutStackItemsInput, IdeaUncheckedUpdateWithoutStackItemsInput>
    create: XOR<IdeaCreateWithoutStackItemsInput, IdeaUncheckedCreateWithoutStackItemsInput>
    where?: IdeaWhereInput
  }

  export type IdeaUpdateToOneWithWhereWithoutStackItemsInput = {
    where?: IdeaWhereInput
    data: XOR<IdeaUpdateWithoutStackItemsInput, IdeaUncheckedUpdateWithoutStackItemsInput>
  }

  export type IdeaUpdateWithoutStackItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldCatalogUpdateOneWithoutIdeasNestedInput
    chunks?: IdeaChunkEmbeddingUpdateManyWithoutIdeaNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutIdeaNestedInput
    favorites?: FavoriteUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateWithoutStackItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    chunks?: IdeaChunkEmbeddingUncheckedUpdateManyWithoutIdeaNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutIdeaNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type UserCreateWithoutSwipeEventsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionCreateNestedManyWithoutUserInput
    stacks?: IdeaStackCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSwipeEventsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionUncheckedCreateNestedManyWithoutUserInput
    stacks?: IdeaStackUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSwipeEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwipeEventsInput, UserUncheckedCreateWithoutSwipeEventsInput>
  }

  export type IdeaCreateWithoutSwipeEventsInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    field?: FieldCatalogCreateNestedOneWithoutIdeasInput
    chunks?: IdeaChunkEmbeddingCreateNestedManyWithoutIdeaInput
    stackItems?: IdeaStackItemCreateNestedManyWithoutIdeaInput
    favorites?: FavoriteCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUncheckedCreateWithoutSwipeEventsInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldId?: string | null
    chunks?: IdeaChunkEmbeddingUncheckedCreateNestedManyWithoutIdeaInput
    stackItems?: IdeaStackItemUncheckedCreateNestedManyWithoutIdeaInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type IdeaCreateOrConnectWithoutSwipeEventsInput = {
    where: IdeaWhereUniqueInput
    create: XOR<IdeaCreateWithoutSwipeEventsInput, IdeaUncheckedCreateWithoutSwipeEventsInput>
  }

  export type IdeaStackCreateWithoutSwipeEventsInput = {
    id?: string
    createdAt?: Date | string
    refreshedAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutStacksInput
    items?: IdeaStackItemCreateNestedManyWithoutStackInput
  }

  export type IdeaStackUncheckedCreateWithoutSwipeEventsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    refreshedAt?: Date | string
    expiresAt: Date | string
    items?: IdeaStackItemUncheckedCreateNestedManyWithoutStackInput
  }

  export type IdeaStackCreateOrConnectWithoutSwipeEventsInput = {
    where: IdeaStackWhereUniqueInput
    create: XOR<IdeaStackCreateWithoutSwipeEventsInput, IdeaStackUncheckedCreateWithoutSwipeEventsInput>
  }

  export type UserUpsertWithoutSwipeEventsInput = {
    update: XOR<UserUpdateWithoutSwipeEventsInput, UserUncheckedUpdateWithoutSwipeEventsInput>
    create: XOR<UserCreateWithoutSwipeEventsInput, UserUncheckedCreateWithoutSwipeEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSwipeEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSwipeEventsInput, UserUncheckedUpdateWithoutSwipeEventsInput>
  }

  export type UserUpdateWithoutSwipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSwipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUncheckedUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IdeaUpsertWithoutSwipeEventsInput = {
    update: XOR<IdeaUpdateWithoutSwipeEventsInput, IdeaUncheckedUpdateWithoutSwipeEventsInput>
    create: XOR<IdeaCreateWithoutSwipeEventsInput, IdeaUncheckedCreateWithoutSwipeEventsInput>
    where?: IdeaWhereInput
  }

  export type IdeaUpdateToOneWithWhereWithoutSwipeEventsInput = {
    where?: IdeaWhereInput
    data: XOR<IdeaUpdateWithoutSwipeEventsInput, IdeaUncheckedUpdateWithoutSwipeEventsInput>
  }

  export type IdeaUpdateWithoutSwipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldCatalogUpdateOneWithoutIdeasNestedInput
    chunks?: IdeaChunkEmbeddingUpdateManyWithoutIdeaNestedInput
    stackItems?: IdeaStackItemUpdateManyWithoutIdeaNestedInput
    favorites?: FavoriteUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateWithoutSwipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    chunks?: IdeaChunkEmbeddingUncheckedUpdateManyWithoutIdeaNestedInput
    stackItems?: IdeaStackItemUncheckedUpdateManyWithoutIdeaNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaStackUpsertWithoutSwipeEventsInput = {
    update: XOR<IdeaStackUpdateWithoutSwipeEventsInput, IdeaStackUncheckedUpdateWithoutSwipeEventsInput>
    create: XOR<IdeaStackCreateWithoutSwipeEventsInput, IdeaStackUncheckedCreateWithoutSwipeEventsInput>
    where?: IdeaStackWhereInput
  }

  export type IdeaStackUpdateToOneWithWhereWithoutSwipeEventsInput = {
    where?: IdeaStackWhereInput
    data: XOR<IdeaStackUpdateWithoutSwipeEventsInput, IdeaStackUncheckedUpdateWithoutSwipeEventsInput>
  }

  export type IdeaStackUpdateWithoutSwipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStacksNestedInput
    items?: IdeaStackItemUpdateManyWithoutStackNestedInput
  }

  export type IdeaStackUncheckedUpdateWithoutSwipeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: IdeaStackItemUncheckedUpdateManyWithoutStackNestedInput
  }

  export type UserCreateWithoutFavoritesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionCreateNestedManyWithoutUserInput
    stacks?: IdeaStackCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionUncheckedCreateNestedManyWithoutUserInput
    stacks?: IdeaStackUncheckedCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type IdeaCreateWithoutFavoritesInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    field?: FieldCatalogCreateNestedOneWithoutIdeasInput
    chunks?: IdeaChunkEmbeddingCreateNestedManyWithoutIdeaInput
    stackItems?: IdeaStackItemCreateNestedManyWithoutIdeaInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUncheckedCreateWithoutFavoritesInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldId?: string | null
    chunks?: IdeaChunkEmbeddingUncheckedCreateNestedManyWithoutIdeaInput
    stackItems?: IdeaStackItemUncheckedCreateNestedManyWithoutIdeaInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type IdeaCreateOrConnectWithoutFavoritesInput = {
    where: IdeaWhereUniqueInput
    create: XOR<IdeaCreateWithoutFavoritesInput, IdeaUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUncheckedUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUncheckedUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IdeaUpsertWithoutFavoritesInput = {
    update: XOR<IdeaUpdateWithoutFavoritesInput, IdeaUncheckedUpdateWithoutFavoritesInput>
    create: XOR<IdeaCreateWithoutFavoritesInput, IdeaUncheckedCreateWithoutFavoritesInput>
    where?: IdeaWhereInput
  }

  export type IdeaUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: IdeaWhereInput
    data: XOR<IdeaUpdateWithoutFavoritesInput, IdeaUncheckedUpdateWithoutFavoritesInput>
  }

  export type IdeaUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldCatalogUpdateOneWithoutIdeasNestedInput
    chunks?: IdeaChunkEmbeddingUpdateManyWithoutIdeaNestedInput
    stackItems?: IdeaStackItemUpdateManyWithoutIdeaNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    chunks?: IdeaChunkEmbeddingUncheckedUpdateManyWithoutIdeaNestedInput
    stackItems?: IdeaStackItemUncheckedUpdateManyWithoutIdeaNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type UserCreateWithoutPreferenceLogsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionCreateNestedManyWithoutUserInput
    stacks?: IdeaStackCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferenceLogsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionUncheckedCreateNestedManyWithoutUserInput
    stacks?: IdeaStackUncheckedCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferenceLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferenceLogsInput, UserUncheckedCreateWithoutPreferenceLogsInput>
  }

  export type UserUpsertWithoutPreferenceLogsInput = {
    update: XOR<UserUpdateWithoutPreferenceLogsInput, UserUncheckedUpdateWithoutPreferenceLogsInput>
    create: XOR<UserCreateWithoutPreferenceLogsInput, UserUncheckedCreateWithoutPreferenceLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferenceLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferenceLogsInput, UserUncheckedUpdateWithoutPreferenceLogsInput>
  }

  export type UserUpdateWithoutPreferenceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferenceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUncheckedUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUncheckedUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionCreateNestedManyWithoutUserInput
    stacks?: IdeaStackCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionUncheckedCreateNestedManyWithoutUserInput
    stacks?: IdeaStackUncheckedCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUncheckedUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUncheckedUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionCreateNestedManyWithoutUserInput
    stacks?: IdeaStackCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingCompleted?: boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    fieldSelections?: UserFieldSelectionUncheckedCreateNestedManyWithoutUserInput
    stacks?: IdeaStackUncheckedCreateNestedManyWithoutUserInput
    swipeEvents?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    preferenceLogs?: PreferenceUpdateLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    preferenceVector?: NullableJsonNullValueInput | InputJsonValue
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    fieldSelections?: UserFieldSelectionUncheckedUpdateManyWithoutUserNestedInput
    stacks?: IdeaStackUncheckedUpdateManyWithoutUserNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    preferenceLogs?: PreferenceUpdateLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFieldSelectionCreateManyUserInput = {
    id?: string
    fieldId: string
    createdAt?: Date | string
  }

  export type IdeaStackCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    refreshedAt?: Date | string
    expiresAt: Date | string
  }

  export type SwipeEventCreateManyUserInput = {
    id?: string
    ideaId: string
    stackId?: string | null
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    ideaId: string
    createdAt?: Date | string
  }

  export type PreferenceUpdateLogCreateManyUserInput = {
    id?: string
    reason: string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFieldSelectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldCatalogUpdateOneRequiredWithoutUserSelectionsNestedInput
  }

  export type UserFieldSelectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFieldSelectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaStackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: IdeaStackItemUpdateManyWithoutStackNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutStackNestedInput
  }

  export type IdeaStackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: IdeaStackItemUncheckedUpdateManyWithoutStackNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutStackNestedInput
  }

  export type IdeaStackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idea?: IdeaUpdateOneRequiredWithoutSwipeEventsNestedInput
    stack?: IdeaStackUpdateOneWithoutSwipeEventsNestedInput
  }

  export type SwipeEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    stackId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    stackId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idea?: IdeaUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceUpdateLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceUpdateLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceUpdateLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    previousVector?: NullableJsonNullValueInput | InputJsonValue
    updatedVector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFieldSelectionCreateManyFieldInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type IdeaCreateManyFieldInput = {
    id?: string
    title: string
    description: string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFieldSelectionUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFieldSelectionsNestedInput
  }

  export type UserFieldSelectionUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFieldSelectionUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: IdeaChunkEmbeddingUpdateManyWithoutIdeaNestedInput
    stackItems?: IdeaStackItemUpdateManyWithoutIdeaNestedInput
    swipeEvents?: SwipeEventUpdateManyWithoutIdeaNestedInput
    favorites?: FavoriteUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: IdeaChunkEmbeddingUncheckedUpdateManyWithoutIdeaNestedInput
    stackItems?: IdeaStackItemUncheckedUpdateManyWithoutIdeaNestedInput
    swipeEvents?: SwipeEventUncheckedUpdateManyWithoutIdeaNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vector?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaChunkEmbeddingCreateManyIdeaInput = {
    id?: string
    chunkIndex: number
    content: string
    vector: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IdeaStackItemCreateManyIdeaInput = {
    id?: string
    stackId: string
    position: number
  }

  export type SwipeEventCreateManyIdeaInput = {
    id?: string
    userId: string
    stackId?: string | null
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
  }

  export type FavoriteCreateManyIdeaInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type IdeaChunkEmbeddingUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    vector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaChunkEmbeddingUncheckedUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    vector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaChunkEmbeddingUncheckedUpdateManyWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    vector?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaStackItemUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    stack?: IdeaStackUpdateOneRequiredWithoutItemsNestedInput
  }

  export type IdeaStackItemUncheckedUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    stackId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type IdeaStackItemUncheckedUpdateManyWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    stackId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type SwipeEventUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipeEventsNestedInput
    stack?: IdeaStackUpdateOneWithoutSwipeEventsNestedInput
  }

  export type SwipeEventUncheckedUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stackId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeEventUncheckedUpdateManyWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stackId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaStackItemCreateManyStackInput = {
    id?: string
    ideaId: string
    position: number
  }

  export type SwipeEventCreateManyStackInput = {
    id?: string
    userId: string
    ideaId: string
    action: $Enums.SwipeAction
    scoreDelta: number
    createdAt?: Date | string
  }

  export type IdeaStackItemUpdateWithoutStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    idea?: IdeaUpdateOneRequiredWithoutStackItemsNestedInput
  }

  export type IdeaStackItemUncheckedUpdateWithoutStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type IdeaStackItemUncheckedUpdateManyWithoutStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type SwipeEventUpdateWithoutStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipeEventsNestedInput
    idea?: IdeaUpdateOneRequiredWithoutSwipeEventsNestedInput
  }

  export type SwipeEventUncheckedUpdateWithoutStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeEventUncheckedUpdateManyWithoutStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    action?: EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction
    scoreDelta?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}