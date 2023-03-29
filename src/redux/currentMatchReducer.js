import{CURRENT_MATCH} from "./../utils/constans"
const initialState = {
match: {}
  };
  
  export const currentMatchReducer = (state = initialState, action) => {
    switch (action.type) {
      case CURRENT_MATCH:
        return {
          ...state,
        match: action.data 
        };
     
      default:
        return state;
    }
  };
