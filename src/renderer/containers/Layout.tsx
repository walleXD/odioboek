import React, { FC, ReactElement } from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import { CSSProperties } from "@material-ui/styles"
import cn from "classnames"

import TopBar from "../componenets/TopBar"

const drawerWidth = 240

const useStyles = makeStyles(
  (
    theme: Theme
  ): Record<
    "root" | "drawer" | "drawerPaper" | "toolbar" | "content" | "drag",
    CSSProperties
  > =>
    createStyles({
      root: {
        display: "flex"
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0
      },
      drawerPaper: {
        width: drawerWidth
      },
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginLeft: drawerWidth
      },
      drag: {
        userSelect: "none",
        WebkitAppRegion: "drag"
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

  const drawer = (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={cn(classes.toolbar, classes.drag)} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Hello"} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Hello"} />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  )
  return (
    <>
      <header>
        <TopBar title={title} />
        {drawer}
      </header>
      <main className={classes.content}>{main}</main>
    </>
  )
}

export default Layout
