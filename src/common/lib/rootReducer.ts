import { combineReducers, Reducer } from "redux"

import testCaseReducer from "../features/testCase/reducer"

const rootReducer = (): Reducer =>
  combineReducers({
    testCase: testCaseReducer
  })

export default rootReducer
