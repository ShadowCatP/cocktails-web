export type Ingredient = {
  id: number;
  name: string;
  description: string;
  alcohol: boolean;
  type: string;
  percentage: number;
  imageUrl: string;
  measure: string;
};

export type Cocktail = {
  id: number;
  name: string;
  category: string;
  glass: string;
  instructions: string;
  imageUrl: string;
  alcoholic: boolean;
  ingredients?: Ingredient[];
};

export type Meta = {
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string | null;
  previousPageUrl: string | null;
};

export type CocktailsResponse = {
  meta: Meta;
  data: Cocktail[];
};

export type GetCocktailResponse = {
  data: Cocktail;
};
