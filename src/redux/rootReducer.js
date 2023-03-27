import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { selectPeriodReducer } from "./selectPeriodReducer";
import {newMatchReducer} from "./newMatchReducer"
export const rootReducer = combineReducers({
  testReducer,
  selectPeriodReducer,
  newMatchReducer,
});
