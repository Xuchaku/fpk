import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export function Row({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-row flex-wrap items-center justify-between',
        className
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}