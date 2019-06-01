import React, { FC, ReactElement } from "react"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import App from "./App"
import theme from "../lib/theme"
import createStore from "common/lib/initRedux"

const dev = process.env.NODE_ENV === "development"
const { store, persistor } = createStore(dev)

const Root: FC = (): ReactElement => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
)

export default Root
