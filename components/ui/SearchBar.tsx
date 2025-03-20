"use client";

import { useFiltersActions } from "@/hooks/useFilters";
import { debounce } from "@/lib/debounce";
import { KeyboardEvent, useCallback, useEffect, useState } from "react";

export const SearchBar = () => {
  const [name, setName] = useState("");
  const { setCocktailName } = useFiltersActions();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCocktailName(name);
    }
  };

  const debouncedSetName = useCallback(debounce(setCocktailName, 500), [
    setCocktailName,
  ]);

  useEffect(() => {
    debouncedSetName(name);
  }, [name, debouncedSetName]);

  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-2 shadow-md">
      <input
        onKeyDown={handleKeyDown}
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="🔍 Search for a cocktail..."
        className="w-full outline-none"
      />
    </div>
  );
};
