import { City } from '@/types/weather'

const GEOCODING_BASE_URL =
  'https://geocoding-api.open-meteo.com/v1/search'

export async function searchCities(
  query: string,
  limit = 10
): Promise<City[]> {
  const url = `${GEOCODING_BASE_URL}?name=${encodeURIComponent(
    query
  )}&count=${limit}&language=en&format=json`

  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch cities')

  const data = await res.json()

  if (!data.results) return []

  return data.results.map((city: any) => ({
    id: city.id,
    name: city.name,
    country: city.country,
    country_code: city.country_code,
    latitude: city.latitude,
    longitude: city.longitude,
    timezone: city.timezone,
    population: city.population,
  }))
}
