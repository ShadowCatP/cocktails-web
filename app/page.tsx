"use client";

import { CocktailGrid } from "@/components/ui/Cards/CocktailGrid";
import { CocktailPagination } from "@/components/ui/CocktailPagination";
import { CategoryFilter } from "@/components/ui/Filters/CategoryFilter";
import { GlassFilter } from "@/components/ui/Filters/GlassFilter";
import { useFiltersActions } from "@/hooks/useFilters";

export default function Home() {
  const { clearFilters } = useFiltersActions();

  return (
    <main className="flex flex-col gap-5 px-3 py-8 md:px-16">
      <div className="flex flex-col gap-3 md:flex-row">
        <CategoryFilter />
        <GlassFilter />
      </div>
      <button
        onClick={clearFilters}
        className="text-md w-full cursor-pointer rounded-md bg-red-400 py-2 font-bold tracking-wide text-white transition-colors duration-150 hover:bg-red-500 md:w-3/10"
      >
        Clear Filters
      </button>
      <CocktailGrid />
      <CocktailPagination />
    </main>
  );
}
