import { getCategories } from "@/api/categories";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  return useQuery<{ data: string[] }>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
