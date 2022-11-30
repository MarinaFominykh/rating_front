export const BASE_URL = "http://localhost:3001";
// export const BASE_URL = "https://mafia-raiting.online";


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

export const addUnitsInMatch = (match, array) => {
    return fetch(`${BASE_URL}/matches/${match._id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            match,
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

export const removeMatch = (match) => {
    return fetch(`${BASE_URL}/matches/${match._id}`, {
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

export const updateResult = (match, result) => {
    return fetch(`${BASE_URL}/matches/result`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            match,
            result

        })
    }).then(checkResponse)
}

export const updateUnitInMatch = (unit, role, modKill, bestPlayer, match, currentUnit) => {
    return fetch(`${BASE_URL}/matches/unit`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            unit,
            role,
            modKill,
            bestPlayer,
            match,
            currentUnit
        })
    }).then(checkResponse)
}

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
};
