import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { selectPeriodReducer } from "./selectPeriodReducer";
import { selectPeriodMatchesReducer } from "./selectPeriodMatchesReducer";
import {newMatchReducer} from "./newMatchReducer";
import { editMatchReducer } from "./editMatchReducer";
import { currentMatchReducer } from "./currentMatchReducer";
import {checkboxReducer} from "./checkboxReducer";
import { unitsReducer } from "./unitsReducer";
import { transformUnitsReducer } from "./transformUnitsReducer";
export const rootReducer = combineReducers({
  testReducer,
  checkboxReducer,
  selectPeriodReducer,
  selectPeriodMatchesReducer,
  newMatchReducer,
  editMatchReducer,
  currentMatchReducer,
  unitsReducer,
  transformUnitsReducer
});
