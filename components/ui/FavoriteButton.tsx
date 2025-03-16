import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartFull } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartEmpty } from "@fortawesome/free-regular-svg-icons";
import { useFavoriteCocktailsActions } from "@/hooks/useFavoriteCocktails";
import { motion } from "framer-motion";

interface FavoriteButtonProps {
  cocktailId: number;
  isFavorite: boolean;
}

export const FavoriteButton = ({
  cocktailId,
  isFavorite,
}: FavoriteButtonProps) => {
  const { toggleFavoriteCocktail } = useFavoriteCocktailsActions();

  return (
    <button
      className="absolute top-2 right-2 flex items-center justify-center overflow-hidden rounded-full bg-white p-5 text-xl"
      onClick={(e) => {
        e.preventDefault();
        toggleFavoriteCocktail(cocktailId);
      }}
    >
      <motion.span
        className="absolute flex items-center justify-center"
        animate={{
          scale: isFavorite ? [1, 1.3, 1] : [1, 0.8, 1], // Overshoot effect
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <FontAwesomeIcon
          icon={isFavorite ? heartFull : heartEmpty}
          className={isFavorite ? "text-red-500" : ""}
        />
      </motion.span>
    </button>
  );
};
