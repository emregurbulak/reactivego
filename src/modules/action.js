// types of action
const SET_REACTIVE_ITEM = "setReactiveItem";

// actions
const reactiveItem = item => ({
  type: SET_REACTIVE_ITEM, 
  payload: item
});

export default {
  reactiveItem,
  SET_REACTIVE_ITEM
};
