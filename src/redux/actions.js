import {
    ADD,
    REMOVE,
    SELECT_VALUE
} from "./types";
export function addTest() {
    return {
        type: ADD
    }
}

export function removeTest() {
    return {
        type: REMOVE
    }
}

export function selectValue(value) {
    return {
        type: SELECT_VALUE,
        value
    }
}
