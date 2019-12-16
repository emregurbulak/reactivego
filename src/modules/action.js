// types of action
const Types = {
  PAGE_ITEM: "PAGE_ITEM"
};
// actions
const pageItem = task => ({
  type: Types.PAGE_ITEM,
  payload: task
});

export default {
  createItem,
  Types
};
