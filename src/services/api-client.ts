import axios from 'axios'

const baseURL = 'https://api.rawg.io/api'

export default axios.create({
  baseURL: baseURL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
})
