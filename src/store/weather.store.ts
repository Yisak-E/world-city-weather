import { create } from 'zustand'
import { WeatherState } from '@/types/weather'

export const useWeatherStore = create<WeatherState>((set) => ({
  selectedCity: null,

  weather: {
    current: null,
    hourly: [],
    daily: [],
  },

  isLoading: false,
  error: null,

  setCity: (city) =>
    set({
      selectedCity: city,
      error: null,
    }),

  setWeather: (data) =>
    set({
      weather: data,
      isLoading: false,
    }),

  setLoading: (loading) =>
    set({ isLoading: loading }),

  setError: (error) =>
    set({
      error,
      isLoading: false,
    }),

  reset: () =>
    set({
      selectedCity: null,
      weather: {
        current: null,
        hourly: [],
        daily: [],
      },
      isLoading: false,
      error: null,
    }),
}))
