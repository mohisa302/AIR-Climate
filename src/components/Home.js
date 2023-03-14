import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import asyncWeather from '../redux/slices/apiSlice';
import { cityName } from './data';
import Card from './Card';
// import Card from './Card';
import map from '../img/europa.png';
// #dd4883 #d04379

const Home = () => {
  // load data
  const dispatch = useDispatch();
  const { climates } = useSelector((state) => state.climates);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (climates.length < 1) {
      cityName.forEach((city) => dispatch(asyncWeather(city)));
    }
  }, [dispatch, climates, categories]);

  return (
    <main className="overflow-auto">

      <div className="flex flex-col">
        {/* fist part */}
        <div className="flex text-white items-center  justify-center gap-x-3">
          <img
            alt="map"
            src={map}
            className="h-40 w-21"
          />
          <div className="flex flex-col">
            <h3 className="font-bold">EUROPE</h3>
            <h5 className="text-xs">degree</h5>
          </div>
        </div>

        {/* cards */}
        <div className="text-white">
          <h4 className="bg-[#6e44eb] text-xs font-bold p-1">STATS BY COUNTRY</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 [&>*:nth-child(odd)]:bg-[#7462fc] [&>*:nth-child(even)]:bg-[#8677fc]">
            {climates.map((city) => (
              <Card
                key={city.id}
                country={city.country}
                name={city.city}
                description={city.description}
                temperature={city.temperature}
                wind={city.wind}
                icon={city.icon}
                humidity={city.humidity}
                category={categories}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
