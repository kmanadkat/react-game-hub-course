import useData from './useData'

interface IApiPlatform {
  id: string
  name: string
  slug: string
}

const usePlatforms = () => {
  return useData<IApiPlatform>('/platforms/lists/parents')
}

export default usePlatforms
