import { useLoaderData } from 'react-router'

import { TrainFullInformationCard } from '@/components/TrainFullInformationCard'
import type { Train } from '@/types'

export function TrainInformation() {
  const train = useLoaderData<Train>()

  if (!train) {
    return <p className="text-foreground">Маршрут не найден</p>
  }

  return (
    <TrainFullInformationCard data={train}>
      <TrainFullInformationCard.Header className="flex-col items-start gap-4 md:flex-row md:items-center">
        <TrainFullInformationCard.Title />
        <TrainFullInformationCard.Region />
      </TrainFullInformationCard.Header>
      <TrainFullInformationCard.Content>
        <TrainFullInformationCard.Route />
        <TrainFullInformationCard.Duration />
        <TrainFullInformationCard.Departures />
        <TrainFullInformationCard.Description />
        <TrainFullInformationCard.Excursions />
        <TrainFullInformationCard.Tags />
      </TrainFullInformationCard.Content>
      <TrainFullInformationCard.Price />
      <TrainFullInformationCard.BuyButton />
    </TrainFullInformationCard>
  )
}
