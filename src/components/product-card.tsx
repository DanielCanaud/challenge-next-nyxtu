import Image from "next/image";
import type { product } from "@/types/product";

type ProductCardProps = {
  product: product;
};

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "USD",
});

function formatCategory(category: string) {
  return category.replaceAll("-", " ");
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.thumbnail || product.images[0] || "";
  const hasLowStock = product.stock <= 10;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/70">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Imagem do produto ${product.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-6 transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-stone-500">
            Produto sem imagem
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium capitalize text-stone-700 shadow-sm backdrop-blur">
          {formatCategory(product.category)}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 shadow-sm">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="line-clamp-2 text-lg font-semibold tracking-tight text-stone-950">
            {product.title}
          </h2>

          <p className="shrink-0 rounded-full bg-stone-950 px-3 py-1 text-sm font-semibold text-white">
            {priceFormatter.format(product.price)}
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-stone-600">
          {product.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium">
          <span
            aria-label={`Avaliação ${product.rating.toFixed(1)} de 5`}
            className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-stone-700"
          >
            <span aria-hidden="true">★</span> {product.rating.toFixed(1)}
          </span>

          <span
            className={
              hasLowStock
                ? "rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800"
                : "rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800"
            }
          >
            {hasLowStock ? "Estoque baixo" : `${product.stock} em estoque`}
          </span>
        </div>
      </div>
    </article>
  );
}