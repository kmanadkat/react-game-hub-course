import useData from './useData'

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

const useGames = () => useData<IGame>('/games')

export type { IGame, IPlatform }

export default useGames
