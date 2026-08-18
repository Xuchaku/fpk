import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { useTrainFullInformationCard } from '@/context/TrainFullInformationCardContext'

export function Excursions({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const data = useTrainFullInformationCard()
  return (
    <div className={cn('flex flex-col gap-2', className)} {...props}>
      <p className="text-base font-semibold text-foreground">Экскурсии</p>
      <ul className="flex list-disc flex-col gap-1 pl-5 text-sm text-card-foreground/90">
        {data.excursions.map((excursion) => (
          <li key={excursion}>{excursion}</li>
        ))}
      </ul>
    </div>
  )
}