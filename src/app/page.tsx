import { APP_CONFIG } from "@/lib/constants";
import { getProducts } from "@/lib/products";
import type { ProductsResponse } from "@/types/product";

export default async function Home() {
  let productsData: ProductsResponse | null = null;
  let errorMessage = "";

  try {
    productsData = await getProducts();
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : "Erro inesperado ao carregar os produtos.";
  }

  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
          {APP_CONFIG.name}
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">
          Catálogo inteligente de produtos
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
          Uma interface simples, responsiva e profissional para listar produtos
          consumidos de uma API real com paginação.
        </p>

        {errorMessage ? (
          <div
            role="alert"
            className="mt-10 max-w-xl rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700"
          >
            {errorMessage}
          </div>
        ) : (
          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-stone-500">Produtos disponíveis</p>
              <strong className="mt-2 block text-2xl font-semibold text-stone-950">
                {productsData?.total}
              </strong>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-stone-500">Itens por página</p>
              <strong className="mt-2 block text-2xl font-semibold text-stone-950">
                {productsData?.limit}
              </strong>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-stone-500">Origem dos dados</p>
              <strong className="mt-2 block text-2xl font-semibold text-stone-950">
                API real
              </strong>
            </article>
          </div>
        )}
      </section>
    </main>
  );
}