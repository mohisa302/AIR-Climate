const initialState = {
  climates: [],
};

const LOAD_CLIMATE = 'LOAD_CLIMATE';

const country = (code) => {
  if (code === 'ES') return 'Spain';
  if (code === 'IT') return 'Italy';
  if (code === 'FR') return 'France';
  if (code === 'NL') return 'Netherland';
  if (code === 'GB') return 'Greatbritain';
  if (code === 'DE') return 'Germany';
  return code;
};

export const loadClimate = (climate) => ({
  type: LOAD_CLIMATE,
  climate,
});

export const replaceClimate = (climate) => ({
  type: 'REPLACE_CLIMATE',
  climate,
});

const weatherReducer = (state = initialState, action) => {
  if (action.type === LOAD_CLIMATE) {
    const climate = {
      name: action.climate.name,
      temperature: action.climate.main.temp,
      humidity: action.climate.main.humidity,
      description: action.climate.weather[0].description,
      wind: action.climate.wind.speed,
      id: action.climate.id,
      icon: `https://openweathermap.org/img/wn/${action.climate.weather[0].icon}@2x.png`,
      country: country(action.climate.sys.country),
    };
    return {
      ...state,
      climates: [...state.climates, climate],
    };
  }

  if (action.type === 'REPLACE_CLIMATE') {
    return {
      ...state,
      climates: action.climate,
    };
  }
  return state;
};

export default weatherReducer;
