import { ProductCard } from "@/components/product-card";
import type { product } from "@/types/product";

type ProductGridProps  = {
    products: product[];
};

export function ProductGrid({products}:ProductGridProps){
    return (
        <section aria-labelledby="products-heading" className="mt-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
                        Coleção atual
                    </p>
                    <h2 id="products-heading" 
                    className="mt-2 text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">
                       Produtos em Destaque
                    </h2>
                </div>
                <p className="text-sm text-stone-500">
                    {products.length} items carregados nesta página
                </p>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) =>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
    );
}