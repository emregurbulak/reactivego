import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: []
};

const reactiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.PAGE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    default:
      return state;
  }
};

export default reactiveReducer;
