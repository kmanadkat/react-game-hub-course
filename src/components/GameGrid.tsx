import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

interface IGame {
  id: number
  name: string
}

interface IError {
  message: string
}

interface IFetchGamesResponse {
  count: number
  results: IGame[]
}

const GameGrid = () => {
  const [games, setGames] = useState<IGame[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await apiClient.get<IFetchGamesResponse>('/games')
        setGames(response.data.results)
      } catch (error) {
        setError((error as IError).message)
      }
    }
    fetchGames()
  }, [])

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid
