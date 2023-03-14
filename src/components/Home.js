import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import asyncWeather from '../redux/slices/apiSlice';

const Home = () => {
  const cityName = ['Tehran',
    'Chengdu', 'Osaka', 'Manila', 'Shenzhen', 'Istanbul',
    'Quanzhou', 'Bangalore', 'Seoul', 'Kuala Lumpur',
    'Shanghai', 'Beijing', 'Hanoi', 'Taipei', 'Hangzhou',
    'Riyadh', 'Chennai', 'Tokyo'];
  const dispatch = useDispatch();
  const { climates } = useSelector((state) => state.climates);
  useEffect(() => {
    if (climates.length < 1) {
      cityName.forEach((city) => dispatch(asyncWeather(city)));
    }
  }, [dispatch, climates]);
  console.log(climates);
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        click
      </button>
    </div>
  );
};

export default Home;
