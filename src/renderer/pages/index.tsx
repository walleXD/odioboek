import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import HomePage from "./home"
import TestPage from "./test"

const Pages: React.FunctionComponent = (): React.ReactElement => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/test" component={TestPage} />
    <Redirect from="*" to="/" />
  </Switch>
)

export default Pages
