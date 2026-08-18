import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { useCardTrain } from '@/context/CardTrainContext'

export function Route({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  const data = useCardTrain()

  return (
    <p className={cn('text-sm font-medium text-foreground', className)} {...props}>
      {data.route.join(' → ')}
    </p>
  )
}