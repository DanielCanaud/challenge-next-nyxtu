// src/components/product-card.tsx

import Image from "next/image";
import {
  convertUsdToBrl,
  formatCategory,
  formatRating,
  priceFormatterBRL,
} from "@/lib/formatters";
import type { product } from "@/types/product";

type ProductCardProps = {
  product: product;
};

function getStockLabel(stock: number) {
  if (stock === 0) {
    return "Indisponível";
  }

  if (stock <= 10) {
    return "Estoque baixo";
  }

  return `${stock} em estoque`;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.thumbnail || product.images[0] || "";
  const hasLowStock = product.stock > 0 && product.stock <= 10;
  const isUnavailable = product.stock === 0;
  const productLabel = product.brand || formatCategory(product.category);
  const priceInBrl = convertUsdToBrl(product.price);

  return ( 
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white shadow-sm ring-1 ring-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_18px_45px_rgba(28,25,23,0.10)]hover:ring-stone-200 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f1eee8] transition-colors duration-300 group-hover:bg-[#ebe6dc]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Imagem do produto ${product.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-7 transition duration-500 ease-out group-hover:scale-[1.04] group-hover:rotate-[-1deg] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-stone-500">
            Produto sem imagem
          </div>
        )}

        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
          <span className="max-w-[70%] truncate rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-stone-700 shadow-sm backdrop-blur">
            {productLabel}
          </span>

          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 shadow-sm">
            -{Math.round(product.discountPercentage)}%
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
          {formatCategory(product.category)}
        </p>

        <h2 className="line-clamp-2 text-lg font-semibold tracking-tight text-stone-950">
          {product.title}
        </h2>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-stone-600">
          {product.description}
        </p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-stone-500">Preço estimado</p>

            <p className="mt-1 text-xl font-semibold tracking-tight text-stone-950">
              {priceFormatterBRL.format(priceInBrl)}
            </p>
          </div>

          <span
            aria-label={`Avaliação ${formatRating(product.rating)} de 5`}
            className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-sm font-semibold text-stone-700"
          >
            <span aria-hidden="true">★</span> {formatRating(product.rating)}
          </span>
        </div>

        <div className="mt-5 border-t border-stone-100 pt-4">
          <span
            className={
              isUnavailable
                ? "inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700"
                : hasLowStock
                  ? "inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800"
                  : "inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"
            }
          >
            {getStockLabel(product.stock)}
          </span>
        </div>
      </div>
    </article>
  );
}