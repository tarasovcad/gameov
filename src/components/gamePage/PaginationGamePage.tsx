"use client";

import {usePathname, useSearchParams} from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationGamePageProps {
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    totalPages: number;
    currentPage: number;
  };
}

const PaginationGamePage = ({pageInfo}: PaginationGamePageProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {hasNextPage, hasPreviousPage, totalPages, currentPage} = pageInfo;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 5;

    if (showEllipsis) {
      pages.push(1);

      // Show current page and surrounding pages
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
        if (pages[pages.length - 1] !== i - 1) {
          pages.push("...");
        }
        pages.push(i);
      }

      // Add last page if not already included
      if (pages[pages.length - 1] !== totalPages) {
        if (pages[pages.length - 1] !== totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    } else {
      // Show all pages if total pages <= 5
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages.map((page, index) => {
      if (page === "...") {
        return (
          <PaginationItem key={`ellipsis-${index}`}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      return (
        <PaginationItem key={page}>
          <PaginationLink
            href={currentPage === page ? "#" : createPageURL(page)}
            isActive={currentPage === page}
            className={
              currentPage === page ? "bg-bg border border-border/60" : ""
            }>
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    });
  };

  return (
    <div className="mt-[40px]">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={hasPreviousPage ? createPageURL(currentPage - 1) : "#"}
              className={`hover:bg-bg ${!hasPreviousPage ? "pointer-events-none opacity-50" : ""}`}
            />
          </PaginationItem>

          {renderPageNumbers()}

          <PaginationItem>
            <PaginationNext
              href={hasNextPage ? createPageURL(currentPage + 1) : "#"}
              className={`hover:bg-bg ${!hasNextPage ? "pointer-events-none opacity-50" : ""}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationGamePage;
