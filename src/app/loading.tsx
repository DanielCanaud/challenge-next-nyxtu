// src/app/loading.tsx

import { API_CONFIG } from "@/lib/constants";

export default function Loading() {
  return (
    <main className="min-h-screen text-stone-950" aria-busy="true">
      <div className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-6 md:px-8 md:py-10">
        <section className="rounded-[2rem] border border-stone-200 bg-white/75 p-6 shadow-sm backdrop-blur md:p-8 lg:p-10">
          <div className="max-w-3xl">
            <div className="h-3 w-28 animate-pulse rounded-full bg-stone-200" />
            <div className="mt-5 h-12 w-full max-w-2xl animate-pulse rounded-2xl bg-stone-200 md:h-16" />
            <div className="mt-4 h-5 w-full max-w-xl animate-pulse rounded-full bg-stone-200" />
            <div className="mt-2 h-5 w-4/5 animate-pulse rounded-full bg-stone-200" />
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="h-24 animate-pulse rounded-3xl bg-stone-100" />
            <div className="h-24 animate-pulse rounded-3xl bg-stone-100" />
            <div className="h-24 animate-pulse rounded-3xl bg-stone-100" />
          </div>
        </section>

        <section className="mt-12">
          <div className="h-8 w-64 animate-pulse rounded-full bg-stone-200" />

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: API_CONFIG.productsPerPage }).map(
              (_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm"
                >
                  <div className="aspect-[4/3] animate-pulse bg-stone-100" />

                  <div className="p-5">
                    <div className="h-3 w-24 animate-pulse rounded-full bg-stone-200" />
                    <div className="mt-4 h-5 w-4/5 animate-pulse rounded-full bg-stone-200" />
                    <div className="mt-3 h-4 w-full animate-pulse rounded-full bg-stone-200" />
                    <div className="mt-2 h-4 w-3/4 animate-pulse rounded-full bg-stone-200" />

                    <div className="mt-6 flex items-center justify-between">
                      <div className="h-7 w-24 animate-pulse rounded-full bg-stone-200" />
                      <div className="h-8 w-14 animate-pulse rounded-full bg-stone-200" />
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}