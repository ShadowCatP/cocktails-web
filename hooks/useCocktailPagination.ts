"use client";

import { Meta } from "@/api/api.types";
import { getCocktails } from "@/api/cocktails";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCocktailName, useFilters } from "./useFilters";
import { useCallback, useEffect, useState } from "react";

export const useCocktailPagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const filters = useFilters();
  const name = useCocktailName();

  const currentPage = Number(searchParams.get("page") || 1);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  // Reset page number after filters change
  useEffect(() => {
    router.push(pathname + "?" + createQueryString("page", "1"));
  }, [filters]);

  const { data } = useQuery<{ meta: Meta }>({
    queryKey: ["cocktailsMeta", currentPage, filters, name],
    queryFn: async () => {
      const response = await getCocktails(currentPage, filters, name);
      return { meta: response.meta };
    },
  });

  const totalPages = data?.meta.lastPage || 1;

  return { currentPage, totalPages };
};
