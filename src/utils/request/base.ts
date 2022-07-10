import axios from 'axios'
const { VITE_BASE_URL } = import.meta.env

// create an axios instance
const service = axios.create({
  baseURL: VITE_BASE_URL,
  timeout: 5 * 60 * 1000
})

/**
 * request interceptor, used to preset token
 */
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // const token = store.getters.accessToken
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  error => {
    console.error('send api failed: ', error)
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  ({ status, data }) => {
    if (status === 401) {
      // TODO 跳转登录页
    }

    return data
  },
  error => {
    console.error('api request failed: ', error)
    return Promise.reject(error)
  }
)

export default service
