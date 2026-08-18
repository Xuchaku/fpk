import { useMemo, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { TrainsData } from '@/types'
import { Button } from '../shadcn-ui/Button'
import { Funnel } from 'lucide-react'
import { useFilters } from '@/context/FiltersContext'
import { FilterControls } from '../FilterControls'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../shadcn-ui/Drawer'

interface FiltersProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  data: TrainsData
}

export function Filters({ children, className, data, ...props }: FiltersProps) {
  const { filters } = useFilters()

  const regions = useMemo(() => {
    const uniqueRegions = Array.from(
      new Set(data.trains.map(({ region }) => region))
    )

    return [
      { label: 'Регион', value: null },
      ...uniqueRegions.map((region) => ({ label: region, value: region })),
    ]
  }, [data])

  return (
    <div className={cn('bg-card-wrapper-foreground', className)} {...props}>
      <Drawer>
        <DrawerTrigger
          render={
            <Button variant="outline" className="md:hidden">
              <Funnel className="size-4 text-foreground" />
              {Object.keys(filters).length}
            </Button>
          }
        />
        <DrawerContent>
          <DrawerHeader className="mb-4">
            <DrawerTitle>Фильтры</DrawerTitle>
          </DrawerHeader>
          <FilterControls
            regions={regions}
            stretch
            className="flex flex-col gap-4 px-4 pb-6"
          />
        </DrawerContent>
      </Drawer>
      <FilterControls
        regions={regions}
        className="hidden flex-row items-center gap-4 md:flex"
      />
    </div>
  )
}
