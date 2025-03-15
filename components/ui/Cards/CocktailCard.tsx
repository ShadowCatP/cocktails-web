import { Cocktail } from "@/api/api.types";
import { faHeart as heartFull } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartEmpty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useFavoriteCocktailsActions } from "@/hooks/useFavoriteCocktails";

interface CocktailCardProps {
  cocktail: Cocktail;
  isFavorite: boolean;
}

export const CocktailCard = ({ cocktail, isFavorite }: CocktailCardProps) => {
  const { toggleFavoriteCocktail } = useFavoriteCocktailsActions();

  return (
    <Link href={`/cocktail/${cocktail.id}`}>
      <section className="flex flex-col gap-2">
        <div className="relative">
          <img src={cocktail.imageUrl} alt={cocktail.name} />
          <button
            className="absolute top-2 right-2 grid place-content-center rounded-full bg-white p-3 text-xl"
            onClick={(e) => {
              e.preventDefault();
              toggleFavoriteCocktail(cocktail.id);
            }}
          >
            {isFavorite ? (
              <FontAwesomeIcon icon={heartFull} className="text-red-500" />
            ) : (
              <FontAwesomeIcon icon={heartEmpty} />
            )}
          </button>
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
