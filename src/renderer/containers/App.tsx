import React, { ReactElement, FC } from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { MemoryRouter as Router } from "react-router-dom"

import Pages from "../pages"

const App: FC = (): ReactElement => {
  return (
    <Container>
      <Box>
        <Router>
          <Pages />
        </Router>
      </Box>
    </Container>
  )
}

export default App
