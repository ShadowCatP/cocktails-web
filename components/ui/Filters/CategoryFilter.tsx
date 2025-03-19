import { FilterDropdown } from "@/components/ui/Filters/FilterDropdown";
import { useCategories } from "@/hooks/useCategories";
import { useFilters, useFiltersActions } from "@/hooks/useFilters";

export const CategoryFilter = () => {
  const { data } = useCategories();
  const filters = useFilters();
  const { toggleFilter } = useFiltersActions();

  return (
    <FilterDropdown
      options={data ? data.data : []}
      selectedOptions={filters.category}
      label="category"
      onToggleOption={toggleFilter}
    />
  );
};
