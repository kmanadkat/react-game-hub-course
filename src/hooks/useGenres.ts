// import useData from './useData'
import genres from '../data/genres'

interface IGenre {
  id: number
  name: string
  image_background: string
}

// const useGeneres = () => useData<IGenre>('/genres')
const useGeneres = () => ({ data: genres, isLoading: false, error: null })

export type { IGenre }

export default useGeneres
