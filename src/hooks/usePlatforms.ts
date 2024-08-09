import useData from './useData'

interface IPlatform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () => {
  return useData<IPlatform>('/platforms/lists/parents')
}

export type { IPlatform }

export default usePlatforms
