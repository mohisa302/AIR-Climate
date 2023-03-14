const initialState = {
  climates: [],
};

const LOAD_CLIMATE = 'LOAD_CLIMATE';
const BY_CITY = 'BY_CITY';

export const loadClimate = (climate) => ({
  type: LOAD_CLIMATE,
  climate,
});

export const cityFilter = (climate) => ({
  type: BY_CITY,
  climate,
});

const weatherReducer = (state = initialState, action) => {
  if (action.type === LOAD_CLIMATE) {
    const climate = {
      temperature: action.climate.temperature,
      wind: action.climate.wind,
      description: action.climate.description,
      forecast: action.climate.forecast,
      city: action.climate.city,
    };
    return {
      ...state,
      climates: [...state.climates, climate],
    };
  }
  // const newMissions = state.missions.map((mission) => {
  //   if (mission.mission_id !== action.missions) return mission;
  //   return { ...mission, reserved: false };
  // });
  // newState.missions = newMissions;
  return state;
};

export default weatherReducer;
