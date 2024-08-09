import useData from './useData'

interface IGenre {
  id: number
  name: string
  image_background: string
}

const useGeneres = () => useData<IGenre>('/genres')

export type { IGenre }

export default useGeneres
