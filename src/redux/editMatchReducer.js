import {
   TITLE_EDIT_MATCH,
  SHERIFF_EDIT_MATCH,
  GAMEMASTER_EDIT_MATCH,
  DATE_EDIT_MATCH,
  RESULT_EDIT_MATCH,
  BP_EDIT_MATCH,
  MK_EDIT_MATCH,
  DONE_EDIT_MATCH,
  BLACK1_EDIT_MATCH,
  BLACK2_EDIT_MATCH,
  RED1_EDIT_MATCH,
  RED2_EDIT_MATCH,
  RED3_EDIT_MATCH,
  RED4_EDIT_MATCH,
  RED5_EDIT_MATCH,
  RED6_EDIT_MATCH,
} from "./../utils/constans";

const initialState = {
  title: "",
  gameMaster: {
    value: "",
    label: "",
  },
  date: "",
  result: {
    value: "",
    label: "",
  },
  bestPlayer: [],
  modKill: [],
  sheriff: {
    value: "",
    label: "",
  },
  done: {
    value: "",
    label: "",
  },
  black1: {
    value: "",
    label: "",
  },
  black2: {
    value: "",
    label: "",
  },
  red1: {
    value: "",
    label: "",
  },
  red2: {
    value: "",
    label: "",
  },
  red3: {
    value: "",
    label: "",
  },
  red4: {
    value: "",
    label: "",
  },
  red5: {
    value: "",
    label: "",
  },
  red6: {
    value: "",
    label: "",
  },
};
export const editMatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TITLE_EDIT_MATCH:
      return {
        ...state,
        title: action.data,
      };
    case GAMEMASTER_EDIT_MATCH:
      return {
        ...state,
        gameMaster: action.data,
      };
    case DATE_EDIT_MATCH:
      return {
        ...state,
        date: action.data,
      };
    case RESULT_EDIT_MATCH:
      return {
        ...state,
        result: action.data,
      };
    case BP_EDIT_MATCH:
      return {
        ...state,
        bestPlayer: action.data,
      };
    case MK_EDIT_MATCH:
      return {
        ...state,
        modKill: action.data,
      };
    case SHERIFF_EDIT_MATCH:
      return {
        ...state,
        sheriff: action.data,
      };
    case DONE_EDIT_MATCH:
      return {
        ...state,
        done: action.data,
      };
    case BLACK1_EDIT_MATCH:
      return {
        ...state,
        black1: action.data,
      };
    case BLACK2_EDIT_MATCH:
      return {
        ...state,
        black2: action.data,
      };
    case RED1_EDIT_MATCH:
      return {
        ...state,
        red1: action.data,
      };
    case RED2_EDIT_MATCH:
      return {
        ...state,
        red2: action.data,
      };
    case RED3_EDIT_MATCH:
      return {
        ...state,
        red3: action.data,
      };
    case RED4_EDIT_MATCH:
      return {
        ...state,
        red4: action.data,
      };
    case RED5_EDIT_MATCH:
      return {
        ...state,
        red5: action.data,
      };
    case RED6_EDIT_MATCH:
      return {
        ...state,
        red6: action.data,
      };

    default:
      return state;
  }
};
