import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { pluralDays } from '@/lib/utils'

import { useCardTrain } from '@/context/CardTrainContext'

export function Duration({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  const data = useCardTrain()

  return (
    <p className={cn('text-lg font-medium text-orange-300', className)} {...props}>
      Длительность - {pluralDays(data.duration_days)}
    </p>
  )
}