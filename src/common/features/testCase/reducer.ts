import { createReducer } from "typesafe-actions"

import { increment, decrement } from "./actions"

export const testCaseReducer = createReducer(0)
  .handleAction(increment, (state): number => (state += 1))
  .handleAction(decrement, (state): number => (state -= 1))

export default testCaseReducer
export type TestCaseState = ReturnType<typeof testCaseReducer>
