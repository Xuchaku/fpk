import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export function Content({ className, ...props }: ContentProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {props.children}
    </div>
  )
}