export const getCocktails = async () => {
  const res = await fetch("https://cocktails.solvro.pl/api/v1/cocktails");
  if (!res.ok) {
    throw new Error("Error fetching cocktails");
  }
  const data = await res.json();
  return data;
};
