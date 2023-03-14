import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import categortReducer from './slices/categorySlice';

const store = configureStore({
  reducer: {
    climates: weatherReducer,
    categories: categortReducer,
  },
});

export default store;
