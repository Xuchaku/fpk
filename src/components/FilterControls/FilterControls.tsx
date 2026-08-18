import { cn } from '@/lib/utils'
import { Button } from '../shadcn-ui/Button'
import { CircleX } from 'lucide-react'
import { useFilters } from '@/context/FiltersContext'
import { SelectFilter } from '../ui/SelectFilter'
import { DatePicker } from '../ui/DatePicker'
import { Input } from '../shadcn-ui/Input'

interface FilterControlsProps {
  regions: { label: string; value: string | null }[]
  className?: string
  stretch?: boolean
}

export function FilterControls({
  regions,
  className,
  stretch,
}: FilterControlsProps) {
  const { filters, handleChange, handleClear } = useFilters()

  return (
    <div className={cn(className)}>
      <Input
        value={filters.search ?? ''}
        onChange={(e) => handleChange('search')(e.target.value)}
        placeholder="Поиск по названию"
        className={stretch ? 'w-full' : 'w-80'}
      />
      <DatePicker
        value={filters.date}
        handleChange={handleChange('date')}
        className={stretch ? 'w-full' : undefined}
      />
      <SelectFilter
        items={regions}
        value={filters.region}
        handleChange={handleChange('region')}
        label="Регион"
        className={stretch ? 'max-w-none' : undefined}
      />
      <Button
        variant={'outline'}
        onClick={handleClear}
        className={stretch ? 'w-full' : undefined}
      >
        <CircleX className="size-4 text-foreground" />
      </Button>
    </div>
  )
}
