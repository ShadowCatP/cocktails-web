import { Filters } from "@/hooks/useFilters";
import { CocktailsResponse } from "./api.types";

export const getCocktails = async (
  page: number = 1,
  filters: Filters,
  name?: string,
): Promise<CocktailsResponse> => {
  const baseUrl = "https://cocktails.solvro.pl/api/v1/cocktails";

  const params = new URLSearchParams();

  params.append("page", page.toString());
  if (filters.category.length > 0)
    filters.category.forEach((category) => params.append("category", category));
  if (filters.glass.length > 0)
    filters.glass.forEach((glass) => params.append("glass", glass));
  if (name) params.append("name", name);

  const res = await fetch(`${baseUrl}?${params}`);
  if (!res.ok) {
    throw new Error("Error fetching cocktails");
  }
  return res.json();
};
