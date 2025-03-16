"use client";

import { IngredientCard } from "@/components/ui/Cards/IngredientCard";
import { useCocktailById } from "@/hooks/useCocktailById";
import { useParams, notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { faList, faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useFavoriteCocktails } from "@/hooks/useFavoriteCocktails";
import { FavoriteButton } from "@/components/ui/FavoriteButton";

export default function CocktailPage() {
  const { cocktailId } = useParams();
  const { data, isLoading } = useCocktailById(Number(cocktailId));
  const favoriteCocktailsIds = useFavoriteCocktails();
  const router = useRouter();

  if (isLoading) return <main>Loading...</main>;

  if (!data) {
    notFound();
  }

  const { id, name, category, glass, instructions, imageUrl, ingredients } =
    data.data;

  return (
    <main className="mx-auto my-6 flex w-95/100 max-w-[1024px] flex-col gap-6 rounded-4xl bg-gray-200 p-6">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <button onClick={() => router.back()}>Cocktails</button>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative max-w-6/10">
          <img src={imageUrl} alt={name} className="rounded-2xl" />
          <FavoriteButton
            cocktailId={id}
            isFavorite={favoriteCocktailsIds.includes(id)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-wider">{name}</h2>
            <div className="flex gap-3">
              <span className="rounded-xl bg-purple-500 px-3 py-1 text-white">
                <FontAwesomeIcon className="mr-2" icon={faList} />
                {category}
              </span>
              <span className="rounded-xl bg-blue-500 px-2 py-1 text-white">
                <FontAwesomeIcon className="mr-2" icon={faMartiniGlass} />
                {glass}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-medium">Intructions</h3>
            <p>{instructions}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-medium">Ingredients</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ingredients?.map((ingredient) => (
            <IngredientCard ingredient={ingredient} key={ingredient.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
