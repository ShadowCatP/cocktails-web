import { Cocktail } from "@/api/api.types";
import { getCocktails } from "@/api/cocktails";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useCocktails = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  return useQuery<{ data: Cocktail[] }>({
    queryKey: ["cocktails", page],
    queryFn: async () => {
      const res = await getCocktails(page);
      return { data: res.data };
    },
  });
};
