import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteCocktailsState {
  favoriteCocktailsIds: number[];
  actions: {
    toggleFavoriteCocktail: (cocktailId: number) => void;
  };
}

const useFavoriteCocktailsStore = create<FavoriteCocktailsState>()(
  persist(
    (set) => ({
      favoriteCocktailsIds: [],
      actions: {
        toggleFavoriteCocktail: (cocktailId) =>
          set((state) => ({
            favoriteCocktailsIds: state.favoriteCocktailsIds.includes(
              cocktailId,
            )
              ? state.favoriteCocktailsIds.filter((id) => cocktailId !== id)
              : [...state.favoriteCocktailsIds, cocktailId],
          })),
      },
    }),
    {
      name: "favorite-cocktails-storage",
      partialize: ({ actions, ...rest }) => rest,
    },
  ),
);

export const useFavoriteCocktails = () =>
  useFavoriteCocktailsStore((state) => state.favoriteCocktailsIds);
export const useFavoriteCocktailsActions = () =>
  useFavoriteCocktailsStore((state) => state.actions);
