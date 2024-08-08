import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

interface IGenre {
  id: number
  name: string
}

interface IFetchGenresResponse {
  count: number
  results: IGenre[]
}

const useGeneres = () => {
  const [genres, setGenres] = useState<IGenre[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const fetchGames = async () => {
      setIsLoading(true)
      try {
        const response = await apiClient.get<IFetchGenresResponse>('/genres', { signal: controller.signal })
        setGenres(response.data.results)
      } catch (error) {
        if (error instanceof CanceledError) return
        setError((error as { message: string }).message)
      }
      setIsLoading(false)
    }
    fetchGames()

    // Cancel Request
    return () => controller.abort()
  }, [])

  return { genres, error, isLoading }
}

export default useGeneres
