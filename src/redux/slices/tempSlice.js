const initialState = {
  europeTemp: '0',
};

const CHANGE_TEMP = 'CHANGE_TEMP';

export const changeTemp = (temp) => ({
  type: CHANGE_TEMP,
  temp,
});

const tempReducer = (state = initialState, action) => {
  if (action.type === CHANGE_TEMP) {
    return (
      {
        ...state,
        europeTemp: action.temp,
      }
    );
  }
  return state;
};

export default tempReducer;
