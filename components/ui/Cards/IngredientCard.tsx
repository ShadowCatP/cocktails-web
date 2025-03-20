import { Ingredient } from "@/api/api.types";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface IngredientCardProps extends HTMLAttributes<HTMLDivElement> {
  ingredient: Ingredient;
}

export const IngredientCard = ({
  ingredient,
  className,
  ...rest
}: IngredientCardProps) => {
  return (
    <div
      className={`flex gap-6 rounded-lg bg-gray-100 p-4 shadow-md transition-transform hover:scale-105 ${className}`}
      {...rest}
    >
      <div className="relative mr-0 flex-shrink-0">
        {ingredient.imageUrl && (
          <Image
            width={700}
            height={700}
            src={ingredient.imageUrl}
            alt={ingredient.name}
            className="h-24 w-24 rounded-full border-2 border-gray-200 object-cover p-2"
          />
        )}
        {(ingredient.alcohol, ingredient.percentage) && (
          <span
            className="absolute right-0 bottom-0 grid h-8 w-8 place-content-center rounded-full bg-red-500 text-xs text-white"
            title={`${ingredient.percentage}% alcohol`}
          >
            {ingredient.percentage}%
          </span>
        )}
      </div>
      <div>
        <p className="text-lg font-bold tracking-wide uppercase">
          {ingredient.name}
        </p>
        <p className="text-sm text-gray-500">{ingredient.measure}</p>
      </div>
    </div>
  );
};
