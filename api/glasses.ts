export const getGlasses = async () => {
  const res = await fetch(
    "https://cocktails.solvro.pl/api/v1/cocktails/glasses",
  );
  if (!res.ok) {
    throw new Error("Error fetching glasses");
  }
  const data = await res.json();
  return data;
};
