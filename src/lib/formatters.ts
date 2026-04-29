// src/lib/formatters.ts

export const priceFormatterUSD = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "USD",
  });
  
  export const priceFormatterBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  
  export function convertUsdToBrl(value: number) {
    const exchangeRate = 5; // taxa aproximada usada apenas para exibição
    return value * exchangeRate;
  }
  
  export function formatCategory(category: string) {
    return category.replace(/-/g, " ");
  }
  
  export function formatRating(rating: number) {
    return rating.toFixed(1);
  }