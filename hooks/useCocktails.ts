import { Cocktail } from "@/api/api.types";
import { getCocktails } from "@/api/cocktails";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useCocktailName, useFilters } from "./useFilters";

export const useCocktails = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const filters = useFilters();
  const name = useCocktailName();

  return useSuspenseQuery<{ data: Cocktail[] }>({
    queryKey: ["cocktails", page, filters, name],
    queryFn: async () => {
      const res = await getCocktails(page, filters, name.trim());
      return { data: res.data };
    },
  });
};
