import { IGameQuery } from '../App'
import useData from './useData'
import { IPlatform } from './usePlatforms'

interface IGame {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: IPlatform }[]
  metacritic: number
}

const useGames = (gameQuery: IGameQuery) => {
  const obj = {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
    },
  }
  return useData<IGame>('/games', obj, [gameQuery])
}

export type { IGame }

export default useGames
