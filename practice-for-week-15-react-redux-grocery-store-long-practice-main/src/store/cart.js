const ADD_TO_CART = "cart/ADD";
const REMOVE_FROM_CART = "cart/REMOVE";
const INCREMENT_COUNT = "cart/INCREMENT";
const DECREMENT_COUNT = "cart/DECREMENT";
const UPDATE_COUNT = "cart/UPDATE";
const PURCHASE_CART = "cart/PURCHASE";

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

export const incrementCount = (id) => {
  return {
    type: INCREMENT_COUNT,
    id,
  };
};

export const decrementCount = (id) => {
  return {
    type: DECREMENT_COUNT,
    id,
  };
};

export const updateCount = (item) => {
  return {
    type: UPDATE_COUNT,
    item,
  };
};

export const purchaseCart = () => {
  return {
    type: PURCHASE_CART,
  };
};

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state[action.id]) {
        return {
          ...state,
          [action.id]: { id: action.id, count: state[action.id].count + 1 },
        };
      } else {
        return {
          ...state,
          [action.id]: { id: action.id, count: 1 },
        };
      }
    case REMOVE_FROM_CART:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case INCREMENT_COUNT:
      return {
        ...state,
        [action.id]: { id: action.id, count: state[action.id].count + 1 },
      };
    case DECREMENT_COUNT:
      const newCount = state[action.id].count - 1;
      return {
        ...state,
        [action.id]: { id: action.id, count: newCount },
      };
    case UPDATE_COUNT:
      return {
        ...state,
        [action.item.id]: { id: action.item.id, count: action.item.count },
      };
    case PURCHASE_CART:
      return {};
    default:
      return state;
  }
};

export default cartReducer;
