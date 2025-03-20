"use client";

import { CocktailGrid } from "@/components/ui/Cards/CocktailGrid";
import { CocktailGridLoading } from "@/components/ui/Cards/CocktailGridLoading";
import { CocktailPagination } from "@/components/ui/CocktailPagination";
import { CategoryFilter } from "@/components/ui/Filters/CategoryFilter";
import { GlassFilter } from "@/components/ui/Filters/GlassFilter";
import { useFiltersActions } from "@/hooks/useFilters";
import { Suspense } from "react";
import { SearchBar } from "@/components/ui/SearchBar";

export default function Home() {
  const { clearFilters } = useFiltersActions();

  return (
    <main className="flex flex-col gap-5 px-3 pt-4 pb-8 md:px-12 md:py-8">
      <div className="flex w-full max-w-4xl flex-col items-center gap-3 md:flex-row">
        <SearchBar />
        <CategoryFilter />
        <GlassFilter />
        <button
          onClick={clearFilters}
          className="text-md w-full flex-1/2 cursor-pointer rounded-md bg-red-400 px-4 py-2 tracking-wide text-white shadow-md transition-colors duration-150 hover:bg-red-500"
        >
          Clear Filters
        </button>
      </div>
      <Suspense fallback={<CocktailGridLoading />}>
        <CocktailGrid />
      </Suspense>
      <CocktailPagination />
    </main>
  );
}
