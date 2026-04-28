export const  priceFormatter = new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency:'USD',
});

export function formatCategory(category: string){
    return category.replace(/-/g,"");
}
export function formatRating(rating: number){
    return rating.toFixed(1);
}