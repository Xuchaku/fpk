import { createBrowserRouter } from 'react-router'
import { TrainsList } from '../components/TrainsList'
import { FiltersProvider } from '@/context/FiltersContext'
import { getTargetTrain } from '../lib/utils'
import { Root } from './Root'
import { TrainInformation } from '@/components/TrainInformation'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <FiltersProvider>
            <TrainsList />
          </FiltersProvider>
        ),
      },
      {
        path: ':id',
        loader: async ({ params }) => {
          const train = getTargetTrain(params.id)
          return train
        },
        Component: TrainInformation,
      },
    ],
  },
])
