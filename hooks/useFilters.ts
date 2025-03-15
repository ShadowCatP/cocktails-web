import { create } from "zustand";

export type Filters = {
  category: string[];
  glass: string[];
};

interface FiltersState {
  filters: Filters;
  actions: {
    toggleFilter: (category: keyof Filters, value: string) => void;
    clearFilters: () => void;
  };
}

const useFiltersStore = create<FiltersState>((set) => ({
  filters: { category: [], glass: [] },
  actions: {
    toggleFilter: (category, value) =>
      set((state) => ({
        filters: {
          ...state.filters,
          [category]: state.filters[category].includes(value)
            ? state.filters[category].filter((v) => v !== value)
            : [...state.filters[category], value],
        },
      })),
    clearFilters: () => set({ filters: { category: [], glass: [] } }),
  },
}));

export const useFilters = () => useFiltersStore((state) => state.filters);
export const useFiltersActions = () =>
  useFiltersStore((state) => state.actions);
