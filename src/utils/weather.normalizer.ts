import {
  WeatherData,
  HourlyWeather,
  DailyWeather,
} from '@/types/weather'

export function normalizeWeather(raw: any): WeatherData {
  // ---- Current ----
  const current = raw.current
    ? {
        time: raw.current.time,
        temperature: raw.current.temperature_2m,
        windSpeed: raw.current.wind_speed_10m,
      }
    : null

  // ---- Hourly ----
  const hourly: HourlyWeather[] = raw.hourly
    ? raw.hourly.time.map((time: string, index: number) => ({
        time,
        temperature: raw.hourly.temperature_2m[index],
        humidity: raw.hourly.relative_humidity_2m[index],
      }))
    : []

  // ---- Daily ----
  const daily: DailyWeather[] = raw.daily
    ? raw.daily.time.map((date: string, index: number) => ({
        date,
        minTemp: raw.daily.temperature_2m_min[index],
        maxTemp: raw.daily.temperature_2m_max[index],
      }))
    : []

  return {
    current,
    hourly,
    daily,
  }
}
