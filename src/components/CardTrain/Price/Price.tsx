import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { useCardTrain } from '@/context/CardTrainContext'

export function Price({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  const data = useCardTrain()

  return (
    <p className={cn('text-3xl font-bold text-foreground', className)} {...props}>
      от {data.price_from.toLocaleString('ru-RU')} ₽
    </p>
  )
}