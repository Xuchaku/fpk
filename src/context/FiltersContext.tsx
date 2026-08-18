/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import type { Filter } from '@/types'

interface FiltersContextValue {
  filters: Filter
  handleChange: <K extends keyof Filter>(key: K) => (value: Filter[K]) => void
  handleClear: () => void
}

const FiltersContext = createContext<FiltersContextValue | undefined>(undefined)

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filter>({})

  const handleChange = useCallback(
    <K extends keyof Filter>(key: K) =>
      (value: Filter[K]) => {
        setFilters((prev) => ({ ...prev, [key]: value }))
      },
    []
  )

  const handleClear = useCallback(() => {
    setFilters({})
  }, [])

  const value = useMemo(
    () => ({ filters, handleChange, handleClear }),
    [filters, handleChange, handleClear]
  )

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  )
}

export function useFilters(): FiltersContextValue {
  const context = useContext(FiltersContext)

  if (context === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider')
  }

  return context
}