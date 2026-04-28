import { redirect } from "next/navigation";
import { Pagination } from "@/components/pagination";
import { ProductGrid } from "@/components/product-grid";
import { ProductsHeader } from "@/components/products-header";
import { StateMessage } from "@/components/state-message";
import { API_CONFIG } from "@/lib/constants";
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
    <main className="min-h-screen text-stone-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-6 md:px-8 md:py-10">
        {productsData ? (
          <ProductsHeader
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            pageSize={pageSize}
          />
        ) : (
          <section className="rounded-[2rem] border border-stone-200 bg-white/75 p-6 shadow-sm backdrop-blur md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              ShelfWise
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-stone-950 md:text-6xl">
              Catálogo inteligente para explorar produtos reais
            </h1>
          </section>
        )}

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