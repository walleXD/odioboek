import React, { FC, ReactElement } from "react"
import { Helmet } from "react-helmet"

interface Props {
  title: string
  children: ReactElement | ReactElement[]
}

const Layout: FC<Props> = ({ title, children }): ReactElement => {
  return (
    <>
      <Helmet title={title} />
      <main>{children}</main>
    </>
  )
}

export default Layout
