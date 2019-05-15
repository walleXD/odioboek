import { createStore, applyMiddleware, Middleware, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"

import rootReducer from "./rootReducer"

export default (dev: boolean): Store => {
  // configure middlewares
  const middlewares: Middleware[] = []
  const devMiddlewares: Middleware[] = [logger]

  if (dev) middlewares.concat(devMiddlewares)

  // compose enhancers
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

  // rehydrate state on app start
  const initialState = {}
  const reducer = rootReducer()

  // create store
  const store = createStore(reducer, initialState, enhancer)

  return store
}
