import axios from 'axios'
const { VITE_MOFISH_BASE_URL, VITE_MOFISH_LOCAL_URL } = import.meta.env

// create an axios instance
const service = axios.create({
  baseURL: VITE_MOFISH_BASE_URL,
  timeout: 5 * 60 * 1000
})

/**
 * request interceptor, used to preset token
 */
service.interceptors.request.use(
  request => {
    request.url = request.url?.replace(VITE_MOFISH_LOCAL_URL, '')
    return request
  },
  error => {
    console.error('send api failed: ', error)
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  ({ data }) => {
    return data
  },
  error => {
    console.error('api request failed: ', error)
    return Promise.reject(error)
  }
)

export default service
