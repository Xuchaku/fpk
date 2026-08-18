import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { useTrainFullInformationCard } from '@/context/TrainFullInformationCardContext'

export function Description({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  const data = useTrainFullInformationCard()

  return (
    <p
      className={cn('text-sm leading-relaxed text-card-foreground/90', className)}
      {...props}
    >
      {data.description}
    </p>
  )
}