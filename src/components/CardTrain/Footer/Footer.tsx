import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { CardFooter } from '@/components/shadcn-ui/Card'
import { Button } from '@/components/shadcn-ui/Button'

export function Footer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <CardFooter className={cn(className)} {...props}>
      <Button variant="default" size="sm" className="self-start p-4">
        Подробнее
      </Button>
    </CardFooter>
  )
}