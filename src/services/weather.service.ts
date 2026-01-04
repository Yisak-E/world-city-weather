const WEATHER_BASE_URL =
  'https://api.open-meteo.com/v1/forecast'

export async function fetchWeatherRaw(
  latitude: number,
  longitude: number,
  timezone = 'auto'
) {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    current: 'temperature_2m,wind_speed_10m',
    hourly: 'temperature_2m,relative_humidity_2m',
    daily: 'temperature_2m_max,temperature_2m_min',
    timezone,
  })

  const res = await fetch(`${WEATHER_BASE_URL}?${params}`)
  if (!res.ok) throw new Error('Failed to fetch weather')

  return res.json()
}
