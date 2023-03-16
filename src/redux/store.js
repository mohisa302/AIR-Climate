import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import categortReducer from './slices/categorySlice';
import tempReducer from './slices/tempSlice';

const store = configureStore({
  reducer: {
    climates: weatherReducer,
    categories: categortReducer,
    temp: tempReducer,
  },
});

export default store;
