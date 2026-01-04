import { useWeatherStore } from "@/store/weather.store"

export default function WeatherHourly() {
  // 🔑 Select RAW state only
  const hourly = useWeatherStore((s) => s.weather.hourly)

  // 🔑 Derive locally (safe)
  const visibleHours = hourly.slice(0, 6)

  return (
    <div className="p-4 rounded-lg border bg-white">
      <h3 className="font-semibold mb-2">Next Hours</h3>
      <div className="grid grid-cols-6 gap-2 text-sm">
        {visibleHours.map((h) => (
          <div key={h.time} className="text-center">
            <p>{h.time.slice(11, 16)}</p>
            <p className="font-bold">{h.temperature}°</p>
            <p className="text-gray-500">{h.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}
