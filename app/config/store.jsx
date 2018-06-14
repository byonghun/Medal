import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from '../reducers'
import middleware from '../middleware'

const loggerMiddleware =
  createLogger({ predicate: (getState, action) => __DEV__ })

export function store(initialState={}) {
  const enhancer = compose(
    applyMiddleware(
      middleware,
      thunkMiddleware,
      loggerMiddleware
    )
  )

  return createStore(combineReducers({reducer}),
                     initialState, enhancer)
}
