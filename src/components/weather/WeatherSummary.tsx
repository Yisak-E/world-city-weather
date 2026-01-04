import { useWeatherStore } from "@/store/weather.store"

export default function WeatherSummary() {
  const current = useWeatherStore((s) => s.weather.current)

  if (!current) return null

  return (
    <div className="p-4 rounded-lg border bg-white">
      <h2 className="text-lg font-semibold">Current Weather</h2>
      <p className="text-3xl font-bold">{current.temperature}°C</p>
      <p className="text-gray-600">
        Wind: {current.windSpeed} km/h
      </p>
    </div>
  )
}
