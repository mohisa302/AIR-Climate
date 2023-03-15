import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadClimate } from './weatherSlice';

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const GET_WEATHER = 'GET_WEATHER';
// const weatherUrl = 'https://goweather.herokuapp.com/weather/';
const asyncWeather = createAsyncThunk(
  GET_WEATHER,
  async (city, thunkAPI) => {
    const response = await fetch(`${weatherUrl}${city},&limit=5&units=metric&APPID=fcdd7031561d406650452745d0b1a9c5`, {
      method: 'GET',
    });
    const data = await response.json();
    thunkAPI.dispatch(loadClimate(data));
    return data;
  },
);

export default asyncWeather;
