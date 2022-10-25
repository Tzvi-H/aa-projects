const ADD_TO_CART = "cart/ADD";
const REMOVE_FROM_CART = "cart/REMOVE";

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.id]: { id: action.id, count: 1 },
      };
    case REMOVE_FROM_CART:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
