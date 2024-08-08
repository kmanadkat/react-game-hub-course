import useData from './useData'

interface IGenre {
  id: number
  name: string
}

const useGeneres = () => useData<IGenre>('/generes')

export type { IGenre }

export default useGeneres
