import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { Tag } from 'lucide-react'

import { useTrainFullInformationCard } from '@/context/TrainFullInformationCardContext'

export function Tags({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const data = useTrainFullInformationCard()

  return (
    <div className={cn('flex flex-col gap-2', className)} {...props}>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Tag className="size-4" />
        <span>Теги</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-muted px-3 py-1 text-sm text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}