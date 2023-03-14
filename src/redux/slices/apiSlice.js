import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadClimate } from './weatherSlice';
import { loadCities } from './categorySlice';

const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const GET_WEATHER = 'GET_WEATHER';
const GET_CITY = 'GET_CITY';
// const weatherUrl = 'https://goweather.herokuapp.com/weather/';

export const asyncWeather = createAsyncThunk(
  GET_WEATHER,
  async (city, thunkAPI) => {
    const response = await fetch(`${weatherUrl}${city},&limit=5&APPID=fcdd7031561d406650452745d0b1a9c5`, {
      method: 'GET',
    });
    const data = await response.json();
    thunkAPI.dispatch(loadClimate(data));
    return data;
  },
);

export const asyncCities = createAsyncThunk(
  GET_CITY,
  async (country, thunkAPI) => {
    const response = await fetch(`${weatherUrl}${country}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(
        {
          country,
        },
      ),
    });
    const data = await response.json();
    console.log(data);
    thunkAPI.dispatch(loadCities(data));
    return data;
  },
);
