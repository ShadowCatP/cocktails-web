"use client";

import { useFiltersActions } from "@/hooks/useFilters";
import { debounce } from "@/lib/debounce";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="relative">
      <input
        onKeyDown={handleKeyDown}
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Search for a cocktail..."
        className="w-64 border-b-2 border-blue-900 outline-none"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute right-1 bottom-2"
      />
    </div>
  );
};
