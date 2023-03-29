import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { selectPeriodReducer } from "./selectPeriodReducer";
import {newMatchReducer} from "./newMatchReducer";
import { editMatchReducer } from "./editMatchReducer";
import { currentMatchReducer } from "./currentMatchReducer";
export const rootReducer = combineReducers({
  testReducer,
  selectPeriodReducer,
  newMatchReducer,
  editMatchReducer,
  currentMatchReducer
});
