import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/shadcn-ui/Button'
import { Calendar } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/shadcn-ui/Tooltip'

import { useCardTrain } from '@/context/CardTrainContext'

export function Departures({
  className,
}: HTMLAttributes<HTMLButtonElement>) {
  const data = useCardTrain()

  return (
    <TooltipProvider delay={0}>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" className={cn('self-start', className)}>
              Доступные даты
              <Calendar className="size-4 text-muted-foreground" />
            </Button>
          }
        />
        <TooltipContent>
          <div className="flex flex-col gap-1">
            {data.departures.map((date) => (
              <span key={date} className="text-nowrap">
                {date}
              </span>
            ))}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}