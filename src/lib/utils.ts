import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import data from '@/data/index.json'
import type { Train } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTargetTrain(id: string | undefined): Train | undefined {
  if (!id) {
    return undefined
  }

  return data.trains.find((train) => train.id === id)
}

export function pluralDays(days: number) {
  const pluralRules = new Intl.PluralRules('ru')
  const DAYS: Record<Intl.LDMLPluralRule, string> = {
    one: 'день',
    few: 'дня',
    many: 'дней',
    other: 'дней',
    zero: 'дней',
    two: 'дней',
  }
  return `${days} ${DAYS[pluralRules.select(days)]}`
}
