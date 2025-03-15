import { CocktailGrid } from "@/components/ui/Cards/CocktailGrid";
import { CocktailPagination } from "@/components/ui/CocktailPagination";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 px-16 py-8">
      <CocktailGrid />
      <CocktailPagination />
    </main>
  );
}
