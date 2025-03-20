"use client";

import { Filters } from "@/hooks/useFilters";
import { useState } from "react";

interface FilterDropdownProps {
  options: string[];
  selectedOptions: string[];
  label: keyof Filters;
  onToggleOption: (category: keyof Filters, option: string) => void;
}

export const FilterDropdown = ({
  options,
  selectedOptions,
  label,
  onToggleOption,
}: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white p-2 shadow-md"
      >
        <span>
          {selectedOptions.length === 0
            ? `Filter by ${label.toLowerCase()}`
            : `${selectedOptions.length} ${label.toLowerCase()} selected`}
        </span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() =>
                onToggleOption(label.toLowerCase() as keyof Filters, option)
              }
              className="flex cursor-pointer items-center p-2 hover:bg-gray-100"
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => {}}
                className="mr-2"
              />
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
