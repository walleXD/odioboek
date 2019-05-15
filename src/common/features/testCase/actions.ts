import { createStandardAction } from "typesafe-actions"

export const increment = createStandardAction("@testCase/add")<void>()
export const decrement = createStandardAction("@testCase/sub")<void>()

export default {
  increment,
  decrement
}
