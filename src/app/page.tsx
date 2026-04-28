import { redirect } from "next/navigation";
import { Pagination } from "@/components/pagination";
import { ProductGrid } from "@/components/product-grid";
import { StateMessage } from "@/components/state-message";
import { API_CONFIG, APP_CONFIG } from "@/lib/constants";
import { getPageFromSearchParam, getTotalPages } from "@/lib/pagination";
import { getProducts } from "@/lib/products";
import type { ProductsResponse } from "@/types/product";

type HomeProps = {
  searchParams: Promise<{
    page?: string | string[] | undefined;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { page } = await searchParams;
  const pageParam = Array.isArray(page) ? page[0] : page;
  const currentPage = getPageFromSearchParam(page);

  if (pageParam && String(currentPage) !== pageParam) {
    redirect("/");
  }

  let productsData: ProductsResponse | null = null;
  let errorMessage = "";

  try {
    productsData = await getProducts({
      page: currentPage,
    });
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : "Erro inesperado ao carregar os produtos.";
  }

  const products = productsData?.products ?? [];
  const totalItems = productsData?.total ?? 0;
  const pageSize = productsData?.limit ?? API_CONFIG.productsPerPage;
  const totalPages = getTotalPages(totalItems, pageSize);

  if (productsData && totalItems > 0 && currentPage > totalPages) {
    redirect(`/?page=${totalPages}`);
  }

  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-8 md:py-16">
        <section className="grid gap-8 border-b border-stone-200 pb-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
              {APP_CONFIG.name}
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">
              Catálogo inteligente de produtos
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
              Uma interface simples, responsiva e profissional para listar
              produtos consumidos de uma API real com paginação.
            </p>
          </div>

          {productsData ? (
            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
              <article className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-stone-500">Produtos disponíveis</p>
                <strong className="mt-2 block text-2xl font-semibold text-stone-950">
                  {productsData.total}
                </strong>
              </article>

              <article className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-stone-500">Página atual</p>
                <strong className="mt-2 block text-2xl font-semibold text-stone-950">
                  {currentPage} de {totalPages}
                </strong>
              </article>

              <article className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-stone-500">Itens por página</p>
                <strong className="mt-2 block text-2xl font-semibold text-stone-950">
                  {productsData.limit}
                </strong>
              </article>
            </div>
          ) : null}
        </section>

        {errorMessage ? (
          <StateMessage
            status="error"
            title="Não foi possível carregar os produtos"
            description={errorMessage}
          />
        ) : products.length > 0 ? (
          <>
            <ProductGrid products={products} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
            />
          </>
        ) : (
          <StateMessage
            title="Nenhum produto encontrado"
            description="A API respondeu corretamente, mas não retornou produtos para esta página."
          />
        )}
      </div>
    </main>
  );
}