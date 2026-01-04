'use client'

import AnimatedText from "@/animations/AnimatedText"
import { useEffect, useState } from "react"
import { useWeatherDashboard } from "@/hooks/useWeatherDashboard"
import WeatherSummary from "@/components/weather/WeatherSummary"
import WeatherHourly from "@/components/weather/WeatherHourly"
import WeatherDaily from "@/components/weather/WeatherDaily"

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("Dubai")
  const {
    city,
    weather,
    isLoading,
    error,
    searchCityAndLoadWeather,
  } = useWeatherDashboard()

  // 🔍 Search handler (simple debounce)
  useEffect(() => {
    if (!searchTerm.trim()) return

    const timer = setTimeout(() => {
      searchCityAndLoadWeather(searchTerm)
    }, 600)

    return () => clearTimeout(timer)
  }, [searchTerm])

  return (
    <main className="max-w-6xl mx-auto mt-8 lg:grid grid-cols-7 bg-white/60 backdrop-blur rounded-xl border min-h-150">

      {/* -------- Sidebar -------- */}
      <aside className=" lg:col-span-2 p-4 border-r">
        <input
          type="text"
          placeholder="🔍 Search city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-lg text-gray-700 font-semibold"
        />

        {city && (
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-semibold">{city.name}</p>
            <p>{city.country}</p>
          </div>
        )}

        {error && (
          <p className="mt-4 text-red-500 text-sm">{error}</p>
        )}
      </aside>

      {/* -------- Main Content -------- */}
      <section className="col-span-5 p-6 space-y-6">
        <AnimatedText
          text={`Weather of ${city?.name}, ${city?.country} `}
          customClassName="text-3xl text-blue-600 font-serif font-semibold"
        />

        {isLoading && (
          <p className="text-gray-500">Loading weather…</p>
        )}

        {!isLoading && weather.current && (
          <>
            <WeatherSummary />
            <WeatherHourly />
            <WeatherDaily />
          </>
        )}
      </section>
    </main>
  )
}
