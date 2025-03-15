import { FilterDropdown } from "@/components/ui/Filters/FilterDropdown";
import { useCategories } from "@/hooks/useCategories";
import { useFilters, useFiltersActions } from "@/hooks/useFilters";

export const CategoryFilter = () => {
  const { data, isLoading } = useCategories();
  const filters = useFilters();
  const { toggleFilter } = useFiltersActions();

  if (isLoading) return <main>Loading...</main>;

  return (
    <FilterDropdown
      options={data!.data}
      selectedOptions={filters.category}
      label="category"
      onToggleOption={toggleFilter}
    />
  );
};
