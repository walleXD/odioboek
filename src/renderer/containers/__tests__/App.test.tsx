import "jest-dom/extend-expect"
import * as React from "react"
import { render, cleanup } from "@testing-library/react"

import App from "../App"

describe("App Component", (): void => {
  afterEach(cleanup)

  test("renders without crashing", (): void => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
})
