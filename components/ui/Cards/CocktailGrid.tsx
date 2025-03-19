"use client";

import { useFavoriteCocktails } from "@/hooks/useFavoriteCocktails";
import { CocktailCard } from "./CocktailCard";
import { useCocktails } from "@/hooks/useCocktails";
import { Suspense } from "react";

export const CocktailGrid = () => {
  const { data } = useCocktails();
  const favoriteCocktailsIds = useFavoriteCocktails();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 min-[125rem]:grid-cols-4">
        {data?.data.map((cocktail) => (
          <CocktailCard
            key={cocktail.id}
            cocktail={cocktail}
            isFavorite={favoriteCocktailsIds.includes(cocktail.id)}
          />
        ))}
      </section>
    </Suspense>
  );
};
