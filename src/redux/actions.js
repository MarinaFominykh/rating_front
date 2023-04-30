import {
  ADD,
  REMOVE,
  GAME_MASTER,
  SHERIFF,
  DONE,
  RED_ARRAY,
  BLACK_ARRAY,
  BP_ARRAY,
  MK_ARRAY,
} from "./types";
import {
  UNITS,
  TRANSFORM_UNITS,
  CHECKBOX,
  PERIOD_VALUE_MATCHES,
  PERIOD_VALUE_MAIN,
  CURRENT_MATCH,
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
export function addTest() {
  return {
    type: ADD,
  };
}

export function removeTest() {
  return {
    type: REMOVE,
  };
}
export function checkbox(value) {
   return {
    type: CHECKBOX,
    value,
  };
}
export function selectValue(value) {
  return {
    type: PERIOD_VALUE_MAIN,
    value,
  };
}
export function  selectValueMatches(value) {
  return {
    type: PERIOD_VALUE_MATCHES,
    value,
  };
}
export function matchData(data) {
  return {
    type: CURRENT_MATCH,
    data,
  };
}
export function newGameMaster(data) {
  return {
    type: GAME_MASTER,
    data,
  };
}
export function sheriffInAddMatch(data) {
  return {
    type: SHERIFF,
    data,
  };
}
export function doneInAddMatch(data) {
  return {
    type: DONE,
    data,
  };
}
export function redArrayInAddMatch(data) {
  return {
    type: RED_ARRAY,
    data,
  };
}
export function blackArrayInAddMatch(data) {
  return {
    type: BLACK_ARRAY,
    data,
  };
}
export function bestPlayerArrayInAddMatch(data) {
  return {
    type: BP_ARRAY,
    data,
  };
}
export function modKillArrayInAddMatch(data) {
  return {
    type: MK_ARRAY,
    data,
  };
}
export function titleInEditMatch(data) {
  
    return {
      type: TITLE_EDIT_MATCH,
      data,
    };
  }
export function gameMasterInEditMatch(data) {
  
  return {
    type: GAMEMASTER_EDIT_MATCH,
    data,
  };
}
export function dateInEditMatch(data) {
  
    return {
      type: DATE_EDIT_MATCH,
      data,
    };
  }
export function resultInEditMatch(data) {
  
    return {
      type: RESULT_EDIT_MATCH,
      data,
    };
  }
  export function bpInEditMatch(data) {
  
    return {
      type: BP_EDIT_MATCH,
      data,
    };
  }
  export function mkInEditMatch(data) {
  
    return {
      type: MK_EDIT_MATCH,
      data,
    };
  }
export function sheriffInEditMatch(data) {
  
    return {
      type: SHERIFF_EDIT_MATCH,
      data,
    };
  }
  export function doneInEditMatch(data) {
   
    return {
      type: DONE_EDIT_MATCH,
      data,
    };
  }
  export function black1InEditMatch(data) {
    
    return {
      type: BLACK1_EDIT_MATCH,
      data,
    };
  }
  export function black2InEditMatch(data) {
   
    return {
      type: BLACK2_EDIT_MATCH,
      data,
    };
  }
  export function red1InEditMatch(data) {
   
    return {
      type: RED1_EDIT_MATCH,
      data,
    };
  }
  export function red2InEditMatch(data) {
   
    return {
      type: RED2_EDIT_MATCH,
      data,
    };
  }
  export function red3InEditMatch(data) {
   
    return {
      type: RED3_EDIT_MATCH,
      data,
    };
  }
  export function red4InEditMatch(data) {
   
    return {
      type: RED4_EDIT_MATCH,
      data,
    };
  }
  export function red5InEditMatch(data) {
   
    return {
      type: RED5_EDIT_MATCH,
      data,
    };
  }
  export function red6InEditMatch(data) {
   
    return {
      type: RED6_EDIT_MATCH,
      data,
    };
  }

  export function unitsArray(data) {
    return {
      type: UNITS,
      data,
    }
  
  }

  export function unitsTransformArray (data) {
    return {
      type: TRANSFORM_UNITS,
      data,
    }
  
  }