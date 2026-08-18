import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { CalendarDays } from 'lucide-react'

import { useTrainFullInformationCard } from '@/context/TrainFullInformationCardContext'

export function Departures({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const data = useTrainFullInformationCard()

  return (
    <div className={cn('flex flex-col gap-2', className)} {...props}>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <CalendarDays className="size-4" />
        <span>Даты отправления</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.departures.map((date) => (
          <span
            key={date}
            className="rounded bg-muted px-3 py-1 text-sm text-muted-foreground"
          >
            {date}
          </span>
        ))}
      </div>
    </div>
  )
}