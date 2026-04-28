type SearchParamValue  = string | string[] | undefined;

export function getPageFromSearchParam(value: SearchParamValue ): number{
    const page = Array.isArray(value)? value[0]: value;

    const pageNumber = Number(page);

    if (!Number.isInteger(pageNumber) || pageNumber < 1){
        return 1;
    }
    return pageNumber;
}
export function getTotalPages(totalItems: number, itemsPerPage: number): number {
    if (itemsPerPage <= 0){
        return 1;
    }
    return Math.max(1, Math.ceil(totalItems / itemsPerPage));
}