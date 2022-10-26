import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";
const LIKE = "produce/LIKE";

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export const likeProduce = (id) => {
  return {
    type: LIKE,
    id,
  };
};

const produceReducer = (state = {}, action) => {
  switch (action.type) {
    case POPULATE:
      const newState = {};
      action.produce.forEach((produce) => {
        newState[produce.id] = produce;
      });
      return newState;
    case LIKE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          liked: !state[action.id].liked,
        },
      };
    default:
      return state;
  }
};

export const getAllProduce = (state) => Object.values(state.produce);

export default produceReducer;
