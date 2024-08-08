import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

interface IPlatform {
  id: number
  name: string
  slug: string
}

interface IGame {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: IPlatform }[]
  metacritic: number
}

interface IError {
  message: string
}

interface IFetchGamesResponse {
  count: number
  results: IGame[]
}

const useGames = () => {
  const [games, setGames] = useState<IGame[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const fetchGames = async () => {
      setIsLoading(true)
      try {
        const response = await apiClient.get<IFetchGamesResponse>('/games', { signal: controller.signal })
        setGames(response.data.results)
      } catch (error) {
        if (error instanceof CanceledError) return
        setError((error as IError).message)
      }
      setIsLoading(false)
    }
    fetchGames()

    // Cancel Request
    return () => controller.abort()
  }, [])

  return { games, error, isLoading }
}

export type { IGame, IPlatform }

export default useGames
