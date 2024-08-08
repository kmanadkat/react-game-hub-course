import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

interface IGame {
  id: number
  name: string
  background_image: string
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

  useEffect(() => {
    const controller = new AbortController()

    const fetchGames = async () => {
      try {
        const response = await apiClient.get<IFetchGamesResponse>('/games', { signal: controller.signal })
        setGames(response.data.results)
      } catch (error) {
        if (error instanceof CanceledError) return
        setError((error as IError).message)
      }
    }
    fetchGames()

    // Cancel Request
    return () => controller.abort()
  }, [])

  return { games, error }
}

export type { IGame }

export default useGames
