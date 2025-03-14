"use client";

import { useCocktailById } from "@/hooks/useCocktailById";
import { useParams, notFound } from "next/navigation";

export default function CocktailPage() {
  const { cocktailId } = useParams();
  const { data, isLoading } = useCocktailById(Number(cocktailId));

  if (isLoading) return <main>Loading...</main>;

  if (!data) {
    notFound();
  }

  const { name, category, glass, instructions, imageUrl, ingredients } =
    data.data;

  return (
    <main>
      <h2>{name}</h2>
    </main>
  );
}
