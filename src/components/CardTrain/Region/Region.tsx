import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { CardDescription } from '@/components/shadcn-ui/Card'
import { useCardTrain } from '@/context/CardTrainContext'

interface RegionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export function Region({ className, ...props }: RegionProps) {
  const data = useCardTrain()

  return (
    <CardDescription className={cn(className)} {...props}>
      {data.region}
    </CardDescription>
  )
}