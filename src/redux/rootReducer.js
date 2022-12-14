import {
    combineReducers
} from "redux";
import {
    testReducer
} from "./testReducer";
import {
    selectPeriodReducer
} from "./selectPeriodReducer";
export const rootReducer = combineReducers({
    testReducer,
    selectPeriodReducer
})
