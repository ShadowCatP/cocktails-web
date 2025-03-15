import { getGlasses } from "@/api/glasses";
import { useQuery } from "@tanstack/react-query";

export const useGlasses = () => {
  return useQuery<{ data: string[] }>({
    queryKey: ["glasses"],
    queryFn: getGlasses,
  });
};
