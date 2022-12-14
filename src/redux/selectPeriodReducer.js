import {
    SELECT_VALUE
} from "./types"
const initialState = {
    value: "allTime"
}

export const selectPeriodReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_VALUE:
            return {
                ...state, value: action.value
            }
            default:
                return state;
    }
}
