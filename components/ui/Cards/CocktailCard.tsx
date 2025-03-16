import { Cocktail } from "@/api/api.types";
import Link from "next/link";
import { FavoriteButton } from "../FavoriteButton";
import { motion } from "framer-motion";

interface CocktailCardProps {
  cocktail: Cocktail;
  isFavorite: boolean;
}

export const CocktailCard = ({ cocktail, isFavorite }: CocktailCardProps) => {
  return (
    <Link href={`/cocktail/${cocktail.id}`}>
      <section className="flex cursor-pointer flex-col gap-2">
        <div className="relative overflow-hidden rounded-lg">
          <motion.img
            src={cocktail.imageUrl}
            alt={cocktail.name}
            className="h-auto w-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          <FavoriteButton cocktailId={cocktail.id} isFavorite={isFavorite} />
        </div>

        <div>
          <span className="flex items-center justify-between">
            <h3 className="text-md tracking-wider text-red-900 uppercase">
              {cocktail.category}
            </h3>
            <div
              className={`rounded px-3 py-1 text-white ${cocktail.alcoholic ? "bg-red-700" : "bg-teal-700"}`}
            >
              {cocktail.alcoholic ? "Alcoholic" : "Non-alcoholic"}
            </div>
          </span>
          <h2 className="text-2xl font-semibold tracking-wide">
            {cocktail.name}
          </h2>
        </div>
      </section>
    </Link>
  );
};
