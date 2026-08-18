import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { useTrainFullInformationCard } from '@/context/TrainFullInformationCardContext'

export function Region({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  const data = useTrainFullInformationCard()

  return (
    <span
      className={cn(
        'rounded bg-muted px-3 py-1 text-sm text-muted-foreground',
        className
      )}
      {...props}
    >
      {data.region}
    </span>
  )
}