import { createContext, useContext } from 'react'

import type { Train } from '@/types'

export const TrainFullInformationCardContext = createContext<Train | undefined>(
  undefined
)

export function useTrainFullInformationCard(): Train {
  const context = useContext(TrainFullInformationCardContext)

  if (context === undefined) {
    throw new Error(
      'useTrainFullInformationCard must be used within a TrainFullInformationCard'
    )
  }

  return context
}