import { Cocktail } from "@/api/api.types";
import { getCocktails } from "@/api/cocktails";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useFilters } from "./useFilters";

export const useCocktails = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const filters = useFilters();

  return useQuery<{ data: Cocktail[] }>({
    queryKey: ["cocktails", page, filters],
    queryFn: async () => {
      const res = await getCocktails(page, filters);
      return { data: res.data };
    },
  });
};
