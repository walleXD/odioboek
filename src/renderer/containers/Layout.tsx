import React, { FC, ReactElement } from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"

import TopBar from "../components/TopBar"
import NavDrawer from "../components/NavDrawer"

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
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
  const { content } = useStyles()

  const main = (
    <>
      <NavDrawer />
      <Container>
        <Box>{children}</Box>
      </Container>
    </>
  )

  return (
    <>
      <TopBar title={title} />
      <main className={content}>{main}</main>
    </>
  )
}

export default Layout
