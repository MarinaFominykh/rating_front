import{UNITS} from "./../utils/constans"
const initialState = {
units: []
  };
  
  export const unitsReducer = (state = initialState, action) => {
    switch (action.type) {
      case UNITS:
        return {
          ...state,
          units: action.data 
        };
     
      default:
        return state;
    }
  };