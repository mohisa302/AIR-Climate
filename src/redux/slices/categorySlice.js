const initialState = {
  cities: [],
};

const LOAD_CITIE = 'LOAD_CITIE';

export const loadCities = (cities) => ({
  type: LOAD_CITIE,
  cities,
});

const cityReducer = (state = initialState, action) => {
  if (action.type === LOAD_CITIE) {
    // const country = {

    // };
    return {
      ...state,
      cities: [...state.cities],
    };
  }
  return state;
};

export default cityReducer;
