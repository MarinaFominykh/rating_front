// export const BASE_URL = "http://localhost:3001";
// export const BASE_URL = "https://mafia-raiting.online"; 
export const BASE_URL = "https://api.pilona.ru"; 

// Авторизация
export const authorize = (login, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
    }),
  }).then(checkResponse);
};

export const getMatches = () => {
  return fetch(`${BASE_URL}/matches`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
export const getUnits = () => {
  return fetch(`${BASE_URL}/units`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const addNewMatch = (data) => {
  return fetch(`${BASE_URL}/matches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      gameMaster: data.gameMaster,
      date: data.date,
      result: data.result,
      black: data.black,
      red: data.red,
      sheriff: data.sheriff,
      done: data.done,
      modKill: data.modKill,
      bestPlayer: data.bestPlayer,
    }),
  }).then(checkResponse);
};

export const createUnit = (name) => {
  return fetch(`${BASE_URL}/units`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  }).then(checkResponse);
};
export const createUnits = (names) => {
  return fetch(`${BASE_URL}/units/many-units`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(names),
  }).then(checkResponse);
};
export const updateUnit = (id, name) => {
  return fetch(`${BASE_URL}/units/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  })
    // .then((response) => response.text())
    // .then((responseText) => console.log(responseText));
    .then(checkResponse);

};

export const removeUnit = (id) => {
  return fetch(`${BASE_URL}/units/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const removeMatch = (match) => {
  return fetch(`${BASE_URL}/matches/${match._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const updateMatch = (data) => {
  return fetch(`${BASE_URL}/matches/${data.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: data.id,
      title: data.title,
      gameMaster: data.gameMaster,
      date: data.date,
      result: data.result,
      sheriff: data.sheriff,
      done: data.done,
      red: data.red,
      black: data.black,
      modKill: data.modKill,
      bestPlayer: data.bestPlayer,
    }),
  }).then(checkResponse);
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

// const checkResponseUpdateUnit = (res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(res);
//     return Promise.reject(res.text())
//     .catch((resText) => {return resText})
//   };


    // .then((response) => response.text())
    // .then((responseText) => console.log(responseText));
