import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import loger from 'redux-logger'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [loger] // loger
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  // const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  // const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  // middleware.push(sagaMiddleware)
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Thunk Middleware ------------- */
  middleware.push(thunk)
  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))


  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  // const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
  // const store = createAppropriateStore(rootReducer, compose(...enhancers))
  const store = createStore(rootReducer, compose(...enhancers))

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
