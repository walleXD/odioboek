import React, { FC, ReactElement } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import { CSSProperties } from "@material-ui/styles"
import cn from "classnames"
import IconButton from "@material-ui/core/IconButton"
import InputBase from "@material-ui/core/InputBase"
import ArrowBack from "@material-ui/icons/ArrowBack"
import SearchIcon from "@material-ui/icons/Search"
import { fade } from "@material-ui/core/styles/colorManipulator"
import { withRouter } from "react-router"
import { RouteComponentProps } from "react-router"

const drawerWidth = 240

const useStyles = makeStyles(
  (
    theme: Theme
  ): Record<
    | "appBar"
    | "drag"
    | "title"
    | "search"
    | "searchIcon"
    | "inputRoot"
    | "inputInput",
    CSSProperties
  > =>
    createStyles({
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      },
      drag: {
        userSelect: "none",
        WebkitAppRegion: "drag"
      },
      title: {
        flexGrow: 1
      },
      search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1),
          width: "auto"
        }
      },
      searchIcon: {
        width: theme.spacing(7),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      inputRoot: {
        color: "inherit"
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: 120,
          "&:focus": {
            width: 200
          }
        }
      }
    })
)

interface Props extends RouteComponentProps {
  title: string
}

const TopBar: FC<Props> = ({ title, history }): ReactElement => {
  const classes = useStyles()
  // const { history } = useReactRouter()

  const arrows = (
    <IconButton
      onClick={(): void => history.goBack()}
      edge="start"
      color="inherit"
      aria-label="Go Back"
    >
      <ArrowBack />
    </IconButton>
  )

  const pageTitle = (
    <Typography variant="h6" color="inherit" className={classes.title}>
      {title}
    </Typography>
  )

  const search = (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    </div>
  )

  return (
    <AppBar position="sticky" className={cn(classes.appBar, classes.drag)}>
      <Toolbar variant="dense">
        {arrows}
        {pageTitle}
        {search}
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(TopBar)
