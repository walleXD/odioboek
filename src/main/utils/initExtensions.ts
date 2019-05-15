import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
  REACT_PERF
} from "electron-devtools-installer"
import devtron from "devtron"

export default (): void => {
  devtron.install()

  installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS, REACT_PERF])
    .then((name): void => console.log(`Added Extension:  ${name}`))
    .catch((err): void => console.log("An error occurred: ", err))
}
