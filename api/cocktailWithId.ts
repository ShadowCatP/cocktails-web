import { GetCocktailResponse } from "./api.types";

export const getCocktailById = async (
  id: number,
): Promise<GetCocktailResponse> => {
  const res = await fetch(`https://cocktails.solvro.pl/api/v1/cocktails/${id}`);
  if (!res.ok) {
    throw new Error("Error fetching cocktail data");
  }
  const data = await res.json();
  return data;
};
