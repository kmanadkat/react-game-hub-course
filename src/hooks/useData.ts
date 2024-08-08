import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import apiClient from '../services/api-client'

interface IFetchResponse<T> {
  count: number
  results: T[]
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const fetchGames = async () => {
      setIsLoading(true)
      try {
        const response = await apiClient.get<IFetchResponse<T>>(endpoint, { signal: controller.signal })
        setData(response.data.results)
      } catch (error) {
        if (error instanceof CanceledError) return
        setError((error as { message: string }).message)
      }
      setIsLoading(false)
    }
    fetchGames()

    // Cancel Request
    return () => controller.abort()
  }, [endpoint])

  return { data, error, isLoading }
}

export default useData
