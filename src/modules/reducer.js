import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  isDemoPage: false
};

const reactiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_REACTIVE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    default:
      return state;
  }
};

export default reactiveReducer;
