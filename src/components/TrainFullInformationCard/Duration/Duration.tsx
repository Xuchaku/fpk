import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { Clock } from 'lucide-react'

import { pluralDays } from '@/lib/utils'

import { useTrainFullInformationCard } from '@/context/TrainFullInformationCardContext'

export function Duration({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const data = useTrainFullInformationCard()

  return (
    <div className={cn('flex flex-col gap-2', className)} {...props}>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="size-4" />
        <span>Длительность</span>
      </div>
      <p className="text-lg font-semibold text-foreground">
        {pluralDays(data.duration_days)}
      </p>
    </div>
  )
}