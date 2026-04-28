import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
};

type PaginationItem = number | "ellipsis";

function getPageHref(page: number) {

    return page === 1 ? "/" : `/?page=${page}`;
}

function getVisiblePages(
  currentPage: number,
  totalPages: number,
): PaginationItem[] {
  const pages = new Set<number>([1, totalPages, currentPage]);

  if (currentPage > 1) {
    pages.add(currentPage - 1);
  }

  if (currentPage < totalPages) {
    pages.add(currentPage + 1);
  }

  const sortedPages = Array.from(pages)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  return sortedPages.reduce<PaginationItem[]>((acc, page, index) => {
    const previousPage = sortedPages[index - 1];

    if (previousPage && page - previousPage > 1) {
      acc.push("ellipsis");
    }

    acc.push(page);

    return acc;
  }, []);
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
}: PaginationProps) {
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;
  const visiblePages = getVisiblePages(currentPage, totalPages);

  if (totalPages <= 1) {
    return null;
  }

  const baseButtonClasses =
    "inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-medium transition";

  const activeButtonClasses =
    "border-stone-950 bg-stone-950 text-white shadow-sm";

  const defaultButtonClasses =
    "border-stone-200 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-100";

  const disabledButtonClasses =
    "cursor-not-allowed border-stone-200 bg-stone-100 text-stone-400";

  return (
    <nav
      aria-label="Paginação de produtos"
      className="mt-10 flex flex-col gap-4 border-t border-stone-200 pt-8 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-sm text-stone-500">
        Página{" "}
        <strong className="font-semibold text-stone-950">{currentPage}</strong>{" "}
        de <strong className="font-semibold text-stone-950">{totalPages}</strong>{" "}
        · {totalItems} produtos encontrados
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {hasPreviousPage ? (
          <Link
            href={getPageHref(currentPage - 1)}
            className={`${baseButtonClasses} ${defaultButtonClasses}`}
          >
            Anterior
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className={`${baseButtonClasses} ${disabledButtonClasses}`}
          >
            Anterior
          </span>
        )}

        <div className="flex items-center gap-2" aria-label="Páginas">
          {visiblePages.map((page, index) => {
            if (page === "ellipsis") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-1 text-sm text-stone-400"
                  aria-hidden="true"
                >
                  ...
                </span>
              );
            }

            const isCurrentPage = page === currentPage;

            if (isCurrentPage) {
              return (
                <span
                  key={page}
                  aria-current="page"
                  className={`${baseButtonClasses} ${activeButtonClasses} min-w-10 px-3`}
                >
                  {page}
                </span>
              );
            }

            return (
              <Link
                key={page}
                href={getPageHref(page)}
                className={`${baseButtonClasses} ${defaultButtonClasses} min-w-10 px-3`}
                aria-label={`Ir para a página ${page}`}
              >
                {page}
              </Link>
            );
          })}
        </div>

        {hasNextPage ? (
          <Link
            href={getPageHref(currentPage + 1)}
            className={`${baseButtonClasses} ${defaultButtonClasses}`}
          >
            Próxima
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className={`${baseButtonClasses} ${disabledButtonClasses}`}
          >
            Próxima
          </span>
        )}
      </div>
    </nav>
  );
}