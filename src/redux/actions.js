import {
    ADD,
    REMOVE,
    SELECT_VALUE,
    MATCHES,
    GAME_MASTER,
    SHERIFF
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
export function MatchesLoad() {
    return async dispatch => {
        const response = await fetch("http://localhost:3001/matches");
        const jsonData = await response.json();
        dispatch({
            type: MATCHES,
            data: jsonData
        })
    }
}
