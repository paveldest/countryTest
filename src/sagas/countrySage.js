import { call, put } from 'redux-saga/effects'
import CountryActions from '../stores/modules/country'
import { apiMiddleware } from '../utils'

export function* fetchCountry(action) {
  try {
    const countries = yield call(apiMiddleware, action.path)
    yield put(CountryActions.countryListSuccess(countries))
  } catch (e) {
    yield put(CountryActions.countryListFailure(e))
  }
}

export default {}
