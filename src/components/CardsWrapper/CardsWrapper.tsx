import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardsWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export function CardsWrapper({
  children,
  className,
  ...props
}: CardsWrapperProps) {
  return (
    <div className={cn('bg-card-wrapper-foreground', className)} {...props}>
      {children}
    </div>
  )
}
