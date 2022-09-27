export const BASE_URL = "http://localhost:3001";

export const getMatches = () => {
    return fetch(`${BASE_URL}/matches`, {
        headers: {
            "Content-Type": "application/json"

        },
    }).then(checkResponse)
}

export const getUnits = () => {
    return fetch(`${BASE_URL}/units`, {
        headers: {
            "Content-Type": "application/json"

        },
    }).then(checkResponse)
}

export const addNewMatch = (title, gameMaster, date, result) => {
    return fetch(`${BASE_URL}/matches`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            title,
            gameMaster,
            date,
            result
        })
    }).then(checkResponse)
}

export const addUnitsInMatch = (id, array) => {
    return fetch(`${BASE_URL}/matches/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            id,
            array
        })
    }).then(checkResponse)
}

export const createUnit = (name) => {
    return fetch(`${BASE_URL}/units`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            name
        })
    }).then(checkResponse)
}

export const updateUnit = (unit, newUnit) => {
    return fetch(`${BASE_URL}/units`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            unit,
            newUnit
        })
    }).then(checkResponse)
}

export const removeUnit = (id) => {
    return fetch(`${BASE_URL}/units/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"

        },
    }).then(checkResponse)
}

export const removeMatch = (id) => {
    return fetch(`${BASE_URL}/matches/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"

        },
    }).then(checkResponse)
}

export const updateGameMaster = (match, gameMaster) => {
    return fetch(`${BASE_URL}/matches/gameMaster`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            match,
            gameMaster
        })
    }).then(checkResponse)
}

export const updateTitle = (match, title) => {
    return fetch(`${BASE_URL}/matches/title`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            match,
            title
        })
    }).then(checkResponse)
}

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
};
