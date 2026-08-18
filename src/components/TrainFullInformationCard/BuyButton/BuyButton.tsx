import type { AnchorHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { useTrainFullInformationCard } from '@/context/TrainFullInformationCardContext'

export function BuyButton({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const data = useTrainFullInformationCard()
  return (
    <a
      href={data.buy_url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'self-start rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90',
        className
      )}
      {...props}
    >
      Купить билеты
    </a>
  )
}