import React from "react"
import { HashRouter } from "react-router-dom"

import Pages from "./pages"

const App: React.FunctionComponent = (): React.ReactElement => (
  <div>
    <HashRouter>
      <Pages />
    </HashRouter>
  </div>
)

export default App
