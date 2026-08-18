export interface Train {
  id: string
  name: string
  region: string
  route: string[]
  duration_days: number
  departures: string[]
  price_from: number
  tags: string[]
  description: string
  excursions: string[]
  buy_url: string
}

export interface TrainsData {
  trains: Train[]
}

export interface Filter {
  search?: string
  date?: Date
  region?: string | null
}
