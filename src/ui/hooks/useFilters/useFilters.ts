import { useState } from 'react'

import { Character } from '@/apptypes'

type FilterState = Record<string, Character[]>

const useFilters = () => {
  const [filters, setFilters] = useState<FilterState>({ 
    search: [],
    orderByName: [],
  });

  const updateFilter = (filterType: keyof FilterState, value: Character[]) => {
    setFilters({
      [filterType]: value,
    });
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
}

export default useFilters