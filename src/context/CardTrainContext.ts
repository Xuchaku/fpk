import { createContext, useContext } from 'react'

import type { Train } from '@/types'

export const CardTrainContext = createContext<Train | undefined>(undefined)

export function useCardTrain(): Train {
  const context = useContext(CardTrainContext)

  if (context === undefined) {
    throw new Error('useCardTrain must be used within a CardTrain')
  }

  return context
}