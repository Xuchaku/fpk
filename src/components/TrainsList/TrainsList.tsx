import { useMemo } from 'react'
import { CardsWrapper } from '@/components/CardsWrapper'
import { CardTrain } from '@/components/CardTrain'
import type { Train } from '@/types'
import data from '../../data/index.json'
import { useNavigate } from 'react-router'
import { Filters } from '../Filters'
import { useFilters } from '@/context/FiltersContext'

export function TrainsList() {
  const navigate = useNavigate()
  const { filters } = useFilters()

  const filteredTrains = useMemo(() => {
    return data.trains.filter((train) => {
      const matchesSearch =
        !filters.search ||
        train.name.toLowerCase().includes(filters.search.toLowerCase())

      const matchesRegion = !filters.region || train.region === filters.region

      const matchesMonth =
        !filters.date ||
        train.departures.some((dateStr) => {
          const departure = new Date(dateStr)
          const selected = filters.date!

          return (
            departure.getFullYear() === selected.getFullYear() &&
            departure.getMonth() === selected.getMonth()
          )
        })

      return matchesSearch && matchesRegion && matchesMonth
    })
  }, [filters])

  return (
    <>
      <Filters className="flex flex-row flex-wrap gap-4" data={data} />
      <CardsWrapper className="flex flex-row flex-wrap items-stretch gap-4 rounded-sm">
        {filteredTrains.map((train: Train) => (
          <CardTrain
            key={train.id}
            data={train}
            onClick={() => navigate(train.id)}
          >
            <CardTrain.Header>
              <CardTrain.Title />
              <CardTrain.Region />
            </CardTrain.Header>
            <CardTrain.Content>
              <CardTrain.Route />
              <CardTrain.Tags />
              <CardTrain.Description />
              <CardTrain.Row>
                <CardTrain.Duration />
                <CardTrain.Departures />
              </CardTrain.Row>
              <CardTrain.Price />
            </CardTrain.Content>
            <CardTrain.Footer />
          </CardTrain>
        ))}
      </CardsWrapper>
    </>
  )
}
