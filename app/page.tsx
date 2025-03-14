import { CocktailGrid } from "@/components/ui/Cards/CocktailGrid";
import { CocktailPagination } from "@/components/ui/CocktailPagination";

export default function Home() {
  return (
    <main className="px-16 py-8">
      <CocktailGrid />
      <CocktailPagination />
    </main>
  );
}
