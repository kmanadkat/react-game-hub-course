import useData from './useData'
import { IGenre } from './useGenres'

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

const useGames = (selectedGenre: IGenre | null) => {
  const obj = { params: { genres: selectedGenre?.id } }
  return useData<IGame>('/games', obj, [selectedGenre?.id])
}

export type { IGame, IPlatform }

export default useGames
