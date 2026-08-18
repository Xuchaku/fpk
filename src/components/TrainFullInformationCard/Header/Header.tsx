import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { TrainFront } from 'lucide-react'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <div className={cn('flex items-center gap-4', className)} {...props}>
      <TrainFront className="size-8 text-foreground" />
      {children}
    </div>
  )
}