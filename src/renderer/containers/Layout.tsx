import React, { FC, ReactElement } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
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

const drawerWidth = 240

const useStyles = makeStyles(
  (
    theme: Theme
  ): Record<
    | "root"
    | "appBar"
    | "drawer"
    | "drawerPaper"
    | "toolbar"
    | "content"
    | "drag",
    CSSProperties
  > =>
    createStyles({
      root: {
        display: "flex"
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
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

  const header = (
    <AppBar position="sticky" className={cn(classes.appBar, classes.drag)}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )

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
        {header}
        {drawer}
      </header>
      <main className={classes.content}>{main}</main>
    </>
  )
}

export default Layout
