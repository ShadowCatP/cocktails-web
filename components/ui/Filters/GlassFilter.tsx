import { FilterDropdown } from "@/components/ui/Filters/FilterDropdown";
import { useFilters, useFiltersActions } from "@/hooks/useFilters";
import { useGlasses } from "@/hooks/useGlasses";

export const GlassFilter = () => {
  const { data, isLoading } = useGlasses();
  const filters = useFilters();
  const { toggleFilter } = useFiltersActions();

  if (isLoading) return <main>Loading...</main>;

  return (
    <FilterDropdown
      options={data!.data}
      selectedOptions={filters.glass}
      label="glass"
      onToggleOption={toggleFilter}
    />
  );
};
