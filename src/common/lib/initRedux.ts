import { createStore, applyMiddleware, Middleware, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import { persistStore, Persistor, persistReducer } from "redux-persist"
import createElectronStorage from "redux-persist-electron-storage"
import thunk from "redux-thunk"

import rootReducer from "./rootReducer"

export interface CreateStore {
  store: Store
  persistor: Persistor
}

export default (dev: boolean): CreateStore => {
  // configure middlewares
  const middlewares: Middleware[] = [thunk]
  const devMiddlewares: Middleware[] = [logger]

  if (dev) middlewares.concat(devMiddlewares)

  // compose enhancers
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

  // rehydrate state on app start
  const initialState = {}
  const reducer = rootReducer()

  // redux persist setup
  const persistConfig = {
    key: "root",
    storage: createElectronStorage()
  }
  const persistedReducer = persistReducer(persistConfig, reducer)

  // create store
  const store = createStore(persistedReducer, initialState, enhancer)
  const persistor = persistStore(store)

  return {
    store,
    persistor
  }
}
