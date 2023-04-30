import{TRANSFORM_UNITS} from "../utils/constans"
const initialState = {
units: []
  };
  
  export const transformUnitsReducer = (state = initialState, action) => {
    switch (action.type) {
      case TRANSFORM_UNITS:
        return {
          ...state,
          units: action.data 
        };
     
      default:
        return state;
    }
  };