import type { HTMLAttributes } from 'react'
import type { ReactNode } from 'react'

import { Card } from '@/components/shadcn-ui/Card'
import type { Train } from '@/types'

import { CardTrainContext } from '@/context/CardTrainContext'
import { Content } from './Content'
import { Departures } from './Departures'
import { Description } from './Description'
import { Duration } from './Duration'
import { Footer } from './Footer'
import { Header } from './Header'
import { Price } from './Price'
import { Region } from './Region'
import { Route } from './Route'
import { Tags } from './Tags'
import { Title } from './Title'
import { Row } from './Row'

interface CardTrainProps extends HTMLAttributes<HTMLDivElement> {
  data: Train
  children: ReactNode
}

export function CardTrain({ data, children, ...props }: CardTrainProps) {
  return (
    <CardTrainContext.Provider value={data}>
      <Card className="cursor-pointer justify-between" {...props}>
        {children}
      </Card>
    </CardTrainContext.Provider>
  )
}

CardTrain.Header = Header
CardTrain.Title = Title
CardTrain.Region = Region
CardTrain.Content = Content
CardTrain.Route = Route
CardTrain.Description = Description
CardTrain.Duration = Duration
CardTrain.Departures = Departures
CardTrain.Tags = Tags
CardTrain.Price = Price
CardTrain.Footer = Footer
CardTrain.Row = Row

export default CardTrain
