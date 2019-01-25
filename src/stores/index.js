import { combineReducers } from 'redux'
import configureStore from './createStore'
import rootSaga from '../sagas'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  country: require('./modules/country').reducer,
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(
    reducers,
    rootSaga
  )
  // Hot realod store state
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
