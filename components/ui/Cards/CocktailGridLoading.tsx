import { Skeleton } from "../skeleton";

export const CocktailGridLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 min-[125rem]:grid-cols-4">
      {Array.from({ length: 15 }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-[36rem] w-full rounded-2xl bg-gray-300"
        />
      ))}
    </div>
  );
};
