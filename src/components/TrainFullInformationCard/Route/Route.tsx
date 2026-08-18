import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { MapPin } from 'lucide-react'

import { useTrainFullInformationCard } from '@/context/TrainFullInformationCardContext'

export function Route({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const data = useTrainFullInformationCard()

  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4" />
        <span>Маршрут</span>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-base font-medium text-foreground">
        {data.route.map((city, index) => (
          <span key={city} className="flex items-center gap-2">
            {city}
            {index < data.route.length - 1 && (
              <span className="text-muted-foreground">→</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}