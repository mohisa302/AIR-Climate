const initialState = {
  climates: [],
};

const LOAD_CLIMATE = 'LOAD_CLIMATE';

export const loadClimate = (climate) => ({
  type: LOAD_CLIMATE,
  climate,
});

const weatherReducer = (state = initialState, action) => {
  if (action.type === LOAD_CLIMATE) {
    const climate = {
      temperature: action.climate.main.temp,
      humidity: action.climate.main.humidity,
      description: action.climate.weather[0].description,
      wind: action.climate.wind.speed,
      city: action.climate.name,
      id: action.climate.id,
      icon: `https://openweathermap.org/img/wn/${action.climate.weather[0].icon}@2x.png`,
      country: action.climate.sys.country,
    };
    return {
      ...state,
      climates: [...state.climates, climate],
    };
  }
  // const
  // const newMissions = state.missions.map((mission) => {
  //   if (mission.mission_id !== action.missions) return mission;
  //   return { ...mission, reserved: false };
  // });
  // newState.missions = newMissions;
  return state;
};

export default weatherReducer;
