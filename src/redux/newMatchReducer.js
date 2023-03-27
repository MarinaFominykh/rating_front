import {
  DONE,
  GAME_MASTER,
  SHERIFF,
  RED_ARRAY,
  BLACK_ARRAY,
  BP_ARRAY,
  MK_ARRAY,
} from "./types";

const intialState = {
  gameMaster: {
    value: "",
    label: "",
  },
  sheriff: {
    value: "",
    label: "",
  },
  done: {
    value: "",
    label: "",
  },
  red: [],
  black: [],
  bestPlayer: [],
  modKill: [],
};

export const newMatchReducer = (state = intialState, action) => {
  switch (action.type) {
    case GAME_MASTER:
      return {
        ...state,
        gameMaster: action.data,
      };
    case SHERIFF:
      return {
        ...state,
        sheriff: action.data,
      };
    case DONE:
      return {
        ...state,
        done: action.data,
      };
    case RED_ARRAY:
      return {
        ...state,
        red: action.data,
      };
    case BLACK_ARRAY:
      return {
        ...state,
        black: action.data,
      };
    case BP_ARRAY:
      return {
        ...state,
        bestPlayer: action.data,
      };
    case MK_ARRAY:
      return {
        ...state,
        modKill: action.data,
      };
    default:
      return state;
  }
};
