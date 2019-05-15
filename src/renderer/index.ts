import { createElement } from "react"
import { render } from "react-dom"

import App from "./containers/Root"

render(createElement(App), document.getElementById("app"))
