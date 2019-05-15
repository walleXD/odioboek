import { app, BrowserWindow } from "electron"
import * as path from "path"
import { format as formatUrl } from "url"
import windowStateKeeper from "electron-window-state"

import initExt from "./utils/initExtensions"

const isDevelopment = process.env.NODE_ENV !== "production"

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow: BrowserWindow | null

const createMainWindow = (): BrowserWindow => {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  })

  const window = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (isDevelopment) {
    // load devtools
    initExt()
    window.webContents.openDevTools()

    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    window.loadURL(
      formatUrl({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
      })
    )
  }

  window.on(
    "closed",
    (): void => {
      mainWindow = null
    }
  )

  window.webContents.on(
    "devtools-opened",
    (): void => {
      window.focus()
      setImmediate(
        (): void => {
          window.focus()
        }
      )
    }
  )

  mainWindowState.manage(window)
  return window
}

// quit application when all windows are closed
app.on(
  "window-all-closed",
  (): void => {
    // on macOS it is common for applications to stay open until the user explicitly quits
    if (process.platform !== "darwin") {
      app.quit()
    }
  }
)

app.on(
  "activate",
  (): void => {
    // on macOS it is common to re-create a window even after all windows have been closed
    if (mainWindow === null) {
      mainWindow = createMainWindow()
    }
  }
)

// create main BrowserWindow when electron is ready
app.on(
  "ready",
  (): void => {
    mainWindow = createMainWindow()
  }
)
