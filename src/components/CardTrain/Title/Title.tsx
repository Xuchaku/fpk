import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { CardTitle } from '@/components/shadcn-ui/Card'
import { useCardTrain } from '@/context/CardTrainContext'

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export function Title({ className, ...props }: TitleProps) {
  const data = useCardTrain()

  return (
    <CardTitle className={cn(className)} {...props}>
      {data.name}
    </CardTitle>
  )
}