import {
    PERIOD_VALUE_MATCHES,
} from "./../utils/constans"
const initialState = {
    value: "allTime"
}

export const selectPeriodMatchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERIOD_VALUE_MATCHES:
            return {
                ...state, value: action.value
            }
            default:
                return state;
    }
}
