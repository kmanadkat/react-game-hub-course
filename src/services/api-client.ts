import axios from 'axios'

// const baseURL = import.meta.env.DEV ? 'https://8172bb16-7f42-4e8d-9611-37ea8a9e6dfe.mock.pstmn.io/api' : 'https://api.rawg.io/api'
const baseURL = 'https://api.rawg.io/api'

export default axios.create({
  baseURL: baseURL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
})
