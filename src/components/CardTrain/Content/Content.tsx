import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { CardContent } from '@/components/shadcn-ui/Card'

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export function Content({ className, ...props }: ContentProps) {
  return (
    <CardContent
      className={cn('flex w-fit flex-col gap-3', className)}
      {...props}
    />
  )
}