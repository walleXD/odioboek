import React, { FC, ReactElement } from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import { CSSProperties } from "@material-ui/styles"

import TopBar from "../componenets/TopBar"
import NavDrawer from "../componenets/NavDrawer"

const drawerWidth = 240

const useStyles = makeStyles(
  (theme: Theme): Record<"content", CSSProperties> =>
    createStyles({
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginLeft: drawerWidth
      }
    })
)

interface Props {
  title: string
  children: ReactElement | ReactElement[]
}

const Layout: FC<Props> = ({ title, children }): ReactElement => {
  const classes = useStyles()

  const main = (
    <Container>
      <Box>{children}</Box>
    </Container>
  )

  return (
    <>
      <header>
        <TopBar title={title} />
        <NavDrawer />
      </header>
      <main className={classes.content}>{main}</main>
    </>
  )
}

export default Layout
