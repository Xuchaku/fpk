import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { useTrainFullInformationCard } from '@/context/TrainFullInformationCardContext'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

export function Title({ className, ...props }: TitleProps) {
  const data = useTrainFullInformationCard()

  return (
    <h2
      className={cn('font-heading text-3xl font-bold text-foreground', className)}
      {...props}
    >
      {data.name}
    </h2>
  )
}