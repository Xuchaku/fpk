import type { HTMLAttributes } from 'react'
import type { ReactNode } from 'react'

import { Card } from '@/components/shadcn-ui/Card'
import type { Train } from '@/types'

import { BuyButton } from './BuyButton'
import { Content } from './Content'
import { Departures } from './Departures'
import { Description } from './Description'
import { Duration } from './Duration'
import { Excursions } from './Excursions'
import { Header } from './Header'
import { Price } from './Price'
import { Region } from './Region'
import { Route } from './Route'
import { Tags } from './Tags'
import { Title } from './Title'
import { TrainFullInformationCardContext } from '@/context/TrainFullInformationCardContext'

interface TrainFullInformationCardProps
  extends HTMLAttributes<HTMLDivElement> {
  data: Train
  children: ReactNode
}

export function TrainFullInformationCard({
  data,
  children,
  ...props
}: TrainFullInformationCardProps) {
  return (
    <TrainFullInformationCardContext.Provider value={data}>
      <Card className="w-fit max-w-3xl flex-col gap-6 p-8" {...props}>
        {children}
      </Card>
    </TrainFullInformationCardContext.Provider>
  )
}

TrainFullInformationCard.Header = Header
TrainFullInformationCard.Title = Title
TrainFullInformationCard.Region = Region
TrainFullInformationCard.Content = Content
TrainFullInformationCard.Route = Route
TrainFullInformationCard.Description = Description
TrainFullInformationCard.Duration = Duration
TrainFullInformationCard.Departures = Departures
TrainFullInformationCard.Tags = Tags
TrainFullInformationCard.Excursions = Excursions
TrainFullInformationCard.Price = Price
TrainFullInformationCard.BuyButton = BuyButton

export default TrainFullInformationCard