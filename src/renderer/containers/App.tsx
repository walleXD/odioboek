import React, { ReactElement, FC } from "react"
import { MemoryRouter as Router } from "react-router-dom"

import Pages from "../pages"

const App: FC = (): ReactElement => {
  return (
    <Router>
      <Pages />
    </Router>
  )
}

export default App
