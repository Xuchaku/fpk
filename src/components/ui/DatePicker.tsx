import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { ChevronDownIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn-ui/Popover'
import { Button } from '../shadcn-ui/Button'
import { Calendar } from '../shadcn-ui/Calendar'
import { cn } from '@/lib/utils'

interface DatePickerProps {
  value?: Date
  handleChange: (value?: Date) => void
  className?: string
}

function DatePicker({ className, ...props }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant={'outline'}
            data-empty={!props.value}
            className={cn(
              'w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground',
              className
            )}
          >
            {props.value ? (
              format(props.value, 'LLLL yyyy', { locale: ru })
            ) : (
              <span>Месяц</span>
            )}
            <ChevronDownIcon data-icon="inline-end" />
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={props.value}
          onSelect={props.handleChange}
        />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
