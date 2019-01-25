import axios from 'axios'
import { defaults } from 'lodash'
import { ENV } from '../config/index'


export default function apiMiddleware(
  path = '/',
  method = 'GET',
  headers = {},
) {
  const url = `${ENV.API_CALL}${path}`

  defaults(headers, {
    Accept: 'application/json; charset=UTF-8',
    'Content-Type': 'application/json; charset=UTF-8'
  })

  return axios({
    method,
    headers,
    url
  }).then((response) => {
    return response.data
  }).then((resp) => {
    if (resp.statusCode >= 400 || resp.statusCode === 500) {
      let error = new Error(resp.message)
      error.response = resp.message || ''
      throw error
    }
    return resp
  }).catch((er = {}) => {
    if (er.statusCode >= 400 || er.statusCode === 500) {
      let error = new Error(er.message)
      error.response = error.message || ''
      throw error
    }
  })
}
