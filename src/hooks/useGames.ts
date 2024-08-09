import useData from './useData'
import { IGenre } from './useGenres'
import { IPlatform } from './usePlatforms'

interface IGame {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: IPlatform }[]
  metacritic: number
}

const useGames = (selectedGenre: IGenre | null, selectedPlatform: IPlatform | null) => {
  const obj = {
    params: {
      genres: selectedGenre?.id,
      parent_platforms: selectedPlatform?.id,
    },
  }
  return useData<IGame>('/games', obj, [selectedGenre?.id, selectedPlatform?.id])
}

export type { IGame }

export default useGames
