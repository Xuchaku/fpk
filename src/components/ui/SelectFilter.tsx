import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../shadcn-ui/Select'
import { cn } from '@/lib/utils'

interface SelectFilterProps {
  value?: string | null
  handleChange: (value?: string | null) => void
  items: { label: string; value: string | null }[]
  label: string
  className?: string
}

function SelectFilter({
  items,
  label,
  handleChange,
  value,
  className,
}: SelectFilterProps) {
  return (
    <Select
      items={items}
      value={value ?? null}
      onValueChange={(value) => handleChange(value)}
    >
      <SelectTrigger className={cn('w-full max-w-48', className)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export { SelectFilter }
