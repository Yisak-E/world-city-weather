export interface City {
  id: number
  name: string
  country: string
  country_code: string
  latitude: number
  longitude: number
  timezone: string
  population?: number
}

export interface CurrentWeather {
  time: string
  temperature: number
  windSpeed: number
}

export interface HourlyWeather {
  time: string
  temperature: number
  humidity: number
}

export interface DailyWeather {
  date: string
  minTemp: number
  maxTemp: number
}

export interface WeatherData {
  current: CurrentWeather | null
  hourly: HourlyWeather[]
  daily: DailyWeather[]
}

export interface WeatherState {
  selectedCity: City | null
  weather: WeatherData
  isLoading: boolean
  error: string | null

  setCity: (city: City) => void
  setWeather: (data: WeatherData) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}
