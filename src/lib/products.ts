// src/lib/products.ts

import { API_CONFIG } from "@/lib/constants";
import type { GetProductsParams, ProductsResponse } from "@/types/product";

export async function getProducts({
  page = 1,
  limit = API_CONFIG.productsPerPage,
}: GetProductsParams = {}): Promise<ProductsResponse> {
  const safePage = Math.max(1, Math.floor(page));

  const safeLimit = Math.max(1, Math.floor(limit));

  const skip = (safePage - 1) * safeLimit;

  const url = new URL("/products", API_CONFIG.baseUrl);

  url.searchParams.set("limit", String(safeLimit));
  url.searchParams.set("skip", String(skip));

  let response: Response;

  try {
    response = await fetch(url, {
      cache: "no-store",
    });
  } catch {
    throw new Error("Não foi possível conectar à API de produtos.");
  }

  if (!response.ok) {
    throw new Error("Não foi possível carregar os produtos.");
  }

  return response.json() as Promise<ProductsResponse>;
}