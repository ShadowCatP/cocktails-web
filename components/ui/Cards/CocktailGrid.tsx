"use client";

import { useFavoriteCocktails } from "@/hooks/useFavoriteCocktails";
import { CocktailCard } from "./CocktailCard";
import { useCocktails } from "@/hooks/useCocktails";

export const CocktailGrid = () => {
  const { data, isLoading, error } = useCocktails();
  const favoriteCocktailsIds = useFavoriteCocktails();

  if (isLoading) return <section>Loading...</section>;
  if (error) return <section>An error occured: {error.message}</section>;

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 min-[125rem]:grid-cols-4">
      {data?.data.map((cocktail) => (
        <CocktailCard
          key={cocktail.id}
          cocktail={cocktail}
          isFavorite={favoriteCocktailsIds.includes(cocktail.id)}
        />
      ))}
    </section>
  );
};
