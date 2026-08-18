import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { useTrainFullInformationCard } from '@/context/TrainFullInformationCardContext'

export function Price({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const data = useTrainFullInformationCard()

  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <p className="text-3xl font-bold text-foreground">
        от {data.price_from.toLocaleString('ru-RU')} ₽
      </p>
    </div>
  )
}