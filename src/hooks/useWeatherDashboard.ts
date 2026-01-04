import { searchCities } from "@/services/geocoding.service"
import { fetchWeatherRaw } from "@/services/weather.service"
import { normalizeWeather } from "@/utils/weather.normalizer"
import { useWeatherStore } from "@/store/weather.store"

export function useWeatherDashboard() {
  const {
    selectedCity,
    weather,
    isLoading,
    error,
    setCity,
    setWeather,
    setLoading,
    setError,
  } = useWeatherStore()

  async function searchCityAndLoadWeather(query: string) {
    try {
      setLoading(true)

      const cities = await searchCities(query)
      if (!cities.length) {
        setError("City not found")
        return
      }

      const city = cities[0] // first match only (dashboard simplicity)
      setCity(city)

      const raw = await fetchWeatherRaw(
        city.latitude,
        city.longitude,
        city.timezone
      )

      const normalized = normalizeWeather(raw)
      setWeather(normalized)
    } catch (err: any) {
      setError(err.message || "Failed to load weather")
    }
  }

  return {
    city: selectedCity,
    weather,
    isLoading,
    error,
    searchCityAndLoadWeather,
  }
}
