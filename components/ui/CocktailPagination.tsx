"use client";

import { useCocktailPagination } from "@/hooks/useCocktailPagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const CocktailPagination = () => {
  const { currentPage, totalPages } = useCocktailPagination();

  const createPageLink = (page: number) => `/?page=${page}`;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageLink(Math.max(currentPage - 1, 1))}
            isActive={currentPage === 1}
          />
        </PaginationItem>
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationLink href={createPageLink(1)}>1</PaginationLink>
          </PaginationItem>
        )}

        {currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink href={createPageLink(currentPage - 1)}>
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href={createPageLink(currentPage)} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink href={createPageLink(currentPage + 1)}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationLink href={createPageLink(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            href={createPageLink(Math.min(currentPage + 1, totalPages))}
            isActive={currentPage !== totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
