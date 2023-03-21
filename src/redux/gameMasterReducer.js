import { GAME_MASTER, SHERIFF } from "./types";

const intialState = {
  name: "",
  label: "",
};

export const gameMasterReducer = (state = intialState, action) => {
  switch (action.type) {
    case GAME_MASTER:
      return {
        ...state,
        data: action.data,
      };
      
    default:
      return state;
  }
};
