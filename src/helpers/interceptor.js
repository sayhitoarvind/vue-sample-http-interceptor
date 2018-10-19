// axios interceptor for the JWT token

import axios from 'axios'
import store from '@/store/index.js'

export default function execute () {
  axios.interceptors.request.use(function (config) {
    // used vue-persist plugin on auth Store
    // auth store is stored in localStorage along with the token
    const keycloak = store.getters['auth/keycloak']
    if (keycloak.token) {
      config.headers.Authorization = `Bearer ${keycloak.token}`
    }
    return config
  }, function (err) {
    return Promise.reject(err)
  })
}
