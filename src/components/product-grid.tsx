// src/components/product-grid.tsx

import { ProductCard } from "@/components/product-card";
import type { product } from "@/types/product";

type ProductGridProps = {
  products: product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section aria-labelledby="products-heading" className="mt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            Coleção atual
          </p>

          <h2
            id="products-heading"
            className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-stone-950 md:text-3xl"
          >
            Produtos encontrados
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">
            Cards organizados para leitura rápida, com imagem, preço,
            avaliação, categoria e disponibilidade em estoque.
          </p>
        </div>

        <div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm">
          {products.length} itens nesta página
        </div>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}