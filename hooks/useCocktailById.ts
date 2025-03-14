import { GetCocktailResponse } from "@/api/api.types";
import { getCocktailById } from "@/api/cocktailWithId";
import { useQuery } from "@tanstack/react-query";

export const useCocktailById = (id: number) => {
  return useQuery<GetCocktailResponse, Error>({
    queryKey: ["cocktail", id],
    queryFn: async () => {
      return await getCocktailById(id);
    },
    enabled: !!id,
  });
};
