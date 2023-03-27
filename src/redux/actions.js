import {
    ADD,
    REMOVE,
    SELECT_VALUE,
    MATCHES,
    GAME_MASTER,
    SHERIFF,
    DONE,
    RED_ARRAY,
    BLACK_ARRAY,
    BP_ARRAY,
    MK_ARRAY
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
export function newGameMaster(data) {
    return {
        type: GAME_MASTER,
        data
    }
}
export function sheriffInAddMatch(data) {
    return {
        type: SHERIFF,
        data
    }
}
export function doneInAddMatch(data) {
    return {
        type: DONE,
        data
    }
}
export function redArrayInAddMatch(data) {
    return {
        type: RED_ARRAY,
        data
    }
}
export function blackArrayInAddMatch(data) {
    return {
        type: BLACK_ARRAY,
        data
    }
}
export function bestPlayerArrayInAddMatch(data) {
    return {
        type: BP_ARRAY,
        data
    }
}
export function modKillArrayInAddMatch(data) {
    return {
        type: MK_ARRAY,
        data
    }
}

