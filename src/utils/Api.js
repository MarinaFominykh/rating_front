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

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
};
