export function LoadingState() {
    return (
        <div className="flex w-full max-w-5xl flex-col gap-6">
            <div className="relative mx-auto flex h-150 w-full max-w-sm flex-col items-center self-center md:max-w-2xl">
                <div className="border-border bg-background-surface flex h-112.5 w-full flex-col rounded-4xl border p-8 shadow-sm">
                    <div className="mb-auto flex items-center justify-between">
                        <div className="skeleton h-7 w-22 rounded-full" />
                        <div className="skeleton h-9 w-9 rounded-full" />
                    </div>

                    <div className="my-auto flex flex-col pt-4">
                        <div className="skeleton mb-3 h-10 w-4/5 rounded-xl" />
                        <div className="skeleton mb-2 h-5 w-full rounded-lg" />
                        <div className="skeleton h-5 w-10/12 rounded-lg" />
                    </div>

                    <div className="border-border mt-auto border-t pt-6">
                        <div className="skeleton h-3 w-2/3 rounded-lg" />
                    </div>
                </div>
            </div>

            <section className="border-border bg-background-surface rounded-2xl border p-4 shadow-sm">
                <div className="skeleton h-5 w-28 rounded-lg" />
                <div className="mt-3 space-y-2">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="border-border rounded-lg border p-3">
                            <div className="flex items-start justify-between gap-3">
                                <div className="skeleton h-4 w-3/4 rounded-lg" />
                                <div className="skeleton h-4 w-8 rounded-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
