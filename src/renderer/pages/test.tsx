import React, { FC, ReactElement, useState } from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Layout from "../containers/Layout"

const TestPage: FC = (): ReactElement => {
  const [num, updateNum] = useState(0)

  return (
    <Layout title="Test">
      <Typography>{num}</Typography>
      <Button onClick={(): void => updateNum(num + 1)}>+</Button>
      <Button onClick={(): void => updateNum(num - 1)}>-</Button>
    </Layout>
  )
}

export default TestPage
