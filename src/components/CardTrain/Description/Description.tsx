import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { useCardTrain } from '@/context/CardTrainContext'

export function Description({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  const data = useCardTrain()

  return (
    <p className={cn('max-w-sm text-sm text-card-foreground', className)} {...props}>
      {data.description}
    </p>
  )
}