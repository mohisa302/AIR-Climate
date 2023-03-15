const initialState = {
  categories: {
    country: false,
    all: true,
    search: '',
  },
};

const CHANGE_CAT = 'CHANGE_CAT';
const SEARCH_WORD = 'SEARCH_WORD';

export const changeCat = (category) => ({
  type: CHANGE_CAT,
  category,
});

export const serachWord = (word) => ({
  type: SEARCH_WORD,
  word,
});

const categortReducer = (state = initialState, action) => {
  if (action.type === CHANGE_CAT) {
    return {
      ...state,
      categories: action.category,
    };
  }

  if (action.type === SEARCH_WORD) {
    return {
      ...state,
      categories: {
        search: action.word,
        country: state.categories.country,
        all: state.categories.all,
      },
    };
  }

  return state;
};

export default categortReducer;
