import "typeface-roboto/index.css"
import pink from "@material-ui/core/colors/pink"
import blue from "@material-ui/core/colors/blue"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
})

export default theme
