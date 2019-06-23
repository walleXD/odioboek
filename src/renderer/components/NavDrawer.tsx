import React, { FC, ReactElement } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import cn from "classnames"

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    drag: {
      userSelect: "none",
      WebkitAppRegion: "drag"
    }
  })
)

const NavDrawer: FC = (): ReactElement => {
  const classes = useStyles()

  return (
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
}

export default NavDrawer
