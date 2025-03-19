import { FilterDropdown } from "@/components/ui/Filters/FilterDropdown";
import { useFilters, useFiltersActions } from "@/hooks/useFilters";
import { useGlasses } from "@/hooks/useGlasses";

export const GlassFilter = () => {
  const { data } = useGlasses();
  const filters = useFilters();
  const { toggleFilter } = useFiltersActions();

  return (
    <FilterDropdown
      options={data ? data.data : []}
      selectedOptions={filters.glass}
      label="glass"
      onToggleOption={toggleFilter}
    />
  );
};
