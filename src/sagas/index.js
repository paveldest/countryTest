import { takeLatest, all } from 'redux-saga/effects'
/* ------------- Types ------------- */

import {
  CouuntryTypes
} from '../stores/modules/country'


/* ------------- Sagas ------------- */

import {
  fetchCountry
} from './countrySage'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
// const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    // takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(CouuntryTypes.COUNTRY_LIST_REQUEST, fetchCountry)
 
  ])
}
