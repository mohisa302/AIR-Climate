import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadClimate } from './weatherSlice';

// const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fcdd7031561d406650452745d0b1a9c5';
const GET_WEATHER = 'GET_WEATHER';
const weatherUrl = 'https://goweather.herokuapp.com/weather/';
const asyncWeather = createAsyncThunk(
  GET_WEATHER,
  async (city, thunkAPI) => {
    const response = await fetch(`${weatherUrl}${city}`, {
      method: 'GET',
    });
    const data = await response.json();
    data.city = city;
    thunkAPI.dispatch(loadClimate(data));
    return data;
  },
);

export default asyncWeather;
