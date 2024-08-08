import axios from 'axios'

const baseURL = import.meta.env.DEV ? 'https://c38fba0b-daee-4b86-840f-c2a9628b2367.mock.pstmn.io/api' : 'https://api.rawg.io/api'

export default axios.create({
  baseURL: baseURL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
})
