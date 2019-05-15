import React from "react"
import { HashRouter } from "react-router-dom"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { Helmet } from "react-helmet"
import Pages from "../pages"

const App: React.FunctionComponent = (): React.ReactElement => (
  <Container>
    <Box>
      <Helmet defaultTitle="Odioboek" titleTemplate="%s" />
      <HashRouter>
        <Pages />
      </HashRouter>
    </Box>
  </Container>
)

export default App
