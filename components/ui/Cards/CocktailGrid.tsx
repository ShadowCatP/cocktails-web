"use client";

import { CocktailCard } from "./CocktailCard";
import { useCocktails } from "@/hooks/useCocktails";

export const CocktailGrid = () => {
  const { data, isLoading, error } = useCocktails();

  if (isLoading) return <section>Loading...</section>;
  if (error) return <section>An error occured: {error.message}</section>;

  return (
    <section className="grid grid-cols-3 gap-6">
      {data?.data.map((cocktail) => (
        <CocktailCard
          key={cocktail.id}
          cocktail={cocktail}
          isFavorite={false}
        />
      ))}
    </section>
  );
};
