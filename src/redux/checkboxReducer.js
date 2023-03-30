import{CHECKBOX} from "./../utils/constans"
const initialState = {
value: false
  };
  
  export const checkboxReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHECKBOX:
        return {
          ...state,
          value: action.value 
        };
     
      default:
        return state;
    }
  };
