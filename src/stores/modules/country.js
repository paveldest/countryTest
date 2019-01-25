import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  countryListRequest: ['path'],
  countryListSuccess: ['countries'],
  countryListFailure: ['error']
})

export const CouuntryTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  countries: []
})

/* ------------- Reducers ------------- */

/**
 * LOGIN reducer
 */
export const countryListRequest = state => state.merge({ fetching: true })
export const countryListSuccess = (state, { countries }) => state.merge({
  fetching: false,
  error: null,
  countries
})
export const countryListFailure = (state, { error }) => state.merge({
  fetching: false,
  error
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COUNTRY_LIST_REQUEST]: countryListRequest,
  [Types.COUNTRY_LIST_SUCCESS]: countryListSuccess,
  [Types.COUNTRY_LIST_FAILURE]: countryListFailure
})
