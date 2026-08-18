import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { CardHeader } from '@/components/shadcn-ui/Card'
import { TrainFront } from 'lucide-react'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <CardHeader className={cn('flex items-center gap-2', className)} {...props}>
      <TrainFront className="size-4" />
      {children}
    </CardHeader>
  )
}