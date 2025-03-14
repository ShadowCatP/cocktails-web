"use client";

import { Meta } from "@/api/api.types";
import { getCocktails } from "@/api/cocktails";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export const useCocktailPagination = () => {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const { data } = useQuery<{ meta: Meta }>({
    queryKey: ["cocktailsMeta", currentPage],
    queryFn: async () => {
      const response = await getCocktails(currentPage);
      return { meta: response.meta };
    },
  });

  const totalPages = data?.meta.lastPage || 1;

  return { currentPage, totalPages };
};
