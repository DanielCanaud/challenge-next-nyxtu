import { APP_CONFIG } from "@/lib/constants";

type ProductsHeaderProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
};

export function ProductsHeader({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
}: ProductsHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white/75 p-6 shadow-sm backdrop-blur md:p-8 lg:p-10">
      <div className="absolute right-8 top-8 hidden h-28 w-28 rounded-full border border-stone-200 bg-stone-100/80 lg:block" />
      <div className="absolute right-20 top-24 hidden h-12 w-12 rounded-full bg-amber-100/80 lg:block" />

      <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            {APP_CONFIG.name}
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-stone-950 md:text-6xl">
            Catálogo inteligente para explorar produtos reais
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            Uma experiência limpa e responsiva para navegar por produtos,
            visualizar informações essenciais e testar paginação com dados de
            uma API pública.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 font-medium text-stone-700">
              API real
            </span>

            <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 font-medium text-stone-700">
              Paginação por URL
            </span>

            <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 font-medium text-stone-700">
              Layout responsivo
            </span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <article className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-stone-500">Produtos disponíveis</p>
            <strong className="mt-2 block text-2xl font-semibold tracking-tight text-stone-950">
              {totalItems}
            </strong>
          </article>

          <article className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-stone-500">Página atual</p>
            <strong className="mt-2 block text-2xl font-semibold tracking-tight text-stone-950">
              {currentPage} de {totalPages}
            </strong>
          </article>

          <article className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-stone-500">Itens por página</p>
            <strong className="mt-2 block text-2xl font-semibold tracking-tight text-stone-950">
              {pageSize}
            </strong>
          </article>
        </div>
      </div>
    </section>
  );
}