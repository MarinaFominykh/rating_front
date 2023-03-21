import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { selectPeriodReducer } from "./selectPeriodReducer";
import {gameMasterReducer} from "./gameMasterReducer"
export const rootReducer = combineReducers({
  testReducer,
  selectPeriodReducer,
  gameMasterReducer
});
