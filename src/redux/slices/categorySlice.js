const initialState = {
  categories: [{
    country: false,
    all: true,
  }],
};

const CHANGE_CAT = 'CHANGE_CAT';

export const changeCat = (category) => ({
  type: CHANGE_CAT,
  category,
});

const categortReducer = (state = initialState, action) => {
  if (action.type === CHANGE_CAT) {
    return {
      ...state,
      categories: action.category,
    };
  }
  return state;
};

export default categortReducer;
