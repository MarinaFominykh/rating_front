import {
    PERIOD_VALUE_MAIN
} from "./../utils/constans"
const initialState = {
    value: "allTime"
}

export const selectPeriodReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERIOD_VALUE_MAIN:
            return {
                ...state, value: action.value
            }
            default:
                return state;
    }
}
