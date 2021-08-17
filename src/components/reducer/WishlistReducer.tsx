import { mockData } from "../../utils/mockData";

export const initalState = {
  cart: mockData,
};

const addToBox = () => {
  console.log("Add to box called");
  return [];
};
const removeFromBox = () => {
  //some ops
  return [];
};
const updateInBox = () => {
  //some ops
  return [];
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToBox(action.dispatch, state);
    case "REMOVE_FROM_CART":
      return removeFromBox(action.dispatch, state);
    case "UPDATE_QUANTITY_IN_CART":
      return updateInBox(action.dispatch, state);
    default:
      return state;
  }
};
