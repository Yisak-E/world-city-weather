import { useWeatherStore } from "@/store/weather.store"

export default function WeatherDaily() {
  const daily = useWeatherStore((s) => s.weather.daily)

  return (
    <div className="p-4 rounded-lg border bg-white">
      <h3 className="font-semibold mb-2">7-Day Forecast</h3>
      <ul className="space-y-2">
        {daily.map((d) => (
          <li key={d.date} className="flex justify-between">
            <span>{d.date}</span>
            <span>
              {d.minTemp}° / {d.maxTemp}°
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
