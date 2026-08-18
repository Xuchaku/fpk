import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { useCardTrain } from '@/context/CardTrainContext'

export function Tags({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const data = useCardTrain()

  return (
    <div className={cn('flex flex-wrap gap-1', className)} {...props}>
      {data.tags.map((tag) => (
        <span
          key={tag}
          className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}