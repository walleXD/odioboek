import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import HomePage from "./home"

const Pages: React.FunctionComponent = (): React.ReactElement => (
  <Switch>
    <Route path="/" component={HomePage} />
    <Redirect from="*" to="/" />
  </Switch>
)

export default Pages
