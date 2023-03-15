import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import asyncWeather from '../redux/slices/apiSlice';
import { cityName, countyName } from './data';
import Card from './Card';
import map from '../img/europa.png';
// import Country from './Country';

// #dd4883 #d04379

const Home = () => {
  // load data
  const dispatch = useDispatch();
  const { climates } = useSelector((state) => state.climates);

  let { europeTemp } = useSelector((state) => state.temp);
  europeTemp = (Math.round(europeTemp * 100) / 100).toFixed(2);
  let tempClimate = [];
  const { categories } = useSelector((state) => state.categories);
  // console.log(climates);

  // climates load handler
  useEffect(() => {
    if (climates.length < 1) {
      cityName.forEach((city) => dispatch(asyncWeather(city)));
    }
  }, [dispatch, climates]);

  // category handler
  useEffect(() => {
    tempClimate = [];
    if (categories.country) {
      // tempClimate = climates.filter((climate) => climate.country === 'France');
      countyName.forEach((countryname) => {
        tempClimate.push(climates.filter((climate) => climate.country === countryname));
      });
      console.log(tempClimate);
    }
  }, [dispatch, categories]);

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
            <h5 className="text-xs">
              {europeTemp}
              &deg;C
            </h5>
          </div>
        </div>

        {/* cards */}
        <div className="text-white">
          <h4 className="bg-[#6e44eb] text-xs font-bold p-1">
            STATS BY&nbsp;
            {categories.country && (
              <span>Country</span>
            )}
            {!categories.country && (
              <span>All</span>
            )}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4  [&>*:nth-child(n)]:bg-[#8f81fd]">
            {!categories.country && (
              climates.map((city) => (
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
              ))
            )}
            {/* {categories.country && (
              climates.map((city) => (
                <Country
                  key={city.country}
                  country={city.country}

                />
              ))
            )} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
