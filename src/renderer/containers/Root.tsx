import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Provider } from "react-redux"

import App from "./App"
import theme from "../lib/theme"
import createStore from "common/lib/initRedux"

const dev = process.env.NODE_ENV === "development"
const store = createStore(dev)

const Root: React.FC = (): React.ReactElement => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
)

export default Root
