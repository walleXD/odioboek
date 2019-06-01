import "typeface-roboto/index.css"
import { blue, pink } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
})

export default theme
