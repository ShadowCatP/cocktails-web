import { CocktailsResponse } from "./api.types";

export const getCocktails = async (
  page: number = 1,
): Promise<CocktailsResponse> => {
  const res = await fetch(
    `https://cocktails.solvro.pl/api/v1/cocktails?page=${page}`,
  );
  if (!res.ok) {
    throw new Error("Error fetching cocktails");
  }
  return res.json();
};
