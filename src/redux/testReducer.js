import {
    ADD,
    REMOVE
} from "./types"
const initialState = {
    test: 23
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state, test: state.test + 1
            }
            case REMOVE:
                return {
                    ...state, test: state.test - 1
                }
                default:
                    return state;
    }
}
