export const getCategories = async () => {
  const res = await fetch(
    "https://cocktails.solvro.pl/api/v1/cocktails/categories",
  );
  if (!res.ok) {
    throw new Error("Erorr fetching categories");
  }
  const data = await res.json();
  return data;
};
