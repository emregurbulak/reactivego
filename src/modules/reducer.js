import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  isDemoPage: false
};

const reactiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_REACTIVE_ITEM: {
      console.log(action);
      return{...state, isDemoPage: action.payload}
    }

    default:
      return state;
  }
};

export default reactiveReducer;
