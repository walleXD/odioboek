import React, { FC, ReactElement } from "react"
import Typography from "@material-ui/core/Typography"
import { Link as RouterLink } from "react-router-dom"
import Link from "@material-ui/core/Link"

const HomePage: FC = (): ReactElement => (
  <>
    <Typography variant="body2" color="textSecondary" align="center">
      Odioboek
    </Typography>
    <Link component={RouterLink} to="/test">
      to test
    </Link>
  </>
)

export default HomePage
