import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import asyncWeather from '../redux/slices/apiSlice';
import { cityName, countyName } from './data';
import Card from './Card';
import map from '../img/europa.png';
import Germany from '../img/Germany.png';
import France from '../img/France.png';
import Italy from '../img/Italy.png';
import Spain from '../img/Spain.png';
import Netherland from '../img/Netherland.png';
import Greatbritain from '../img/greatBritain.png';

const Home = () => {
  console.log(Germany, France, Italy, Spain, Netherland, Greatbritain);
  // load data
  const dispatch = useDispatch();
  const { climates } = useSelector((state) => state.climates);
  const { categories } = useSelector((state) => state.categories);

  // category temp
  const [tempClimate, setTempClimate] = useState([]);

  // main temp
  let { europeTemp } = useSelector((state) => state.temp);
  europeTemp = (Math.round(europeTemp * 100) / 100).toFixed(2);

  const avgTemp = (country) => {
    let avg = 0;
    country.cities.forEach((city) => {
      avg += city.temperature / country.cities.length;
    });
    avg = (Math.round(avg * 100) / 100).toFixed(2);
    return avg;
  };

  // climates load handler
  useEffect(() => {
    if (climates.length < 1) {
      cityName.forEach((city) => dispatch(asyncWeather(city)));
    }
  }, [dispatch, climates]);

  // category handler
  useEffect(() => {
    if (categories.country) {
      const tempCountry = [];
      countyName.forEach((country) => {
        tempCountry.push(
          {
            cities: climates.filter((climate) => climate.country === country.name),
            name: country.name,
            icon: country.icon,
          },
        );

        tempCountry[tempCountry.length - 1].temperature = avgTemp(
          tempCountry[tempCountry.length - 1],
        );
      });
      setTempClimate(tempCountry);
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

          <div className="grid grid-cols-2 md:grid-cols-3 [&>*:nth-child(4n+3)]:bg-[#8979ff]  [&>*:nth-child(4n+2)]:bg-[#8979ff] [&>*:nth-child(4n+1)]:bg-[#5c4cd4] [&>*:nth-child(4n)]:bg-[#5c4cd4]">

            {/* all */}
            {categories.all && (
              climates.map((city) => (
                <Card
                  key={city.id}
                  country={city.country}
                  name={city.name}
                  description={city.description}
                  temperature={city.temperature}
                  wind={city.wind}
                  icon={city.icon}
                  humidity={city.humidity}
                  category={categories}
                />
              ))
            )}

            {/* parameter */}
            {!categories.all && (
              tempClimate.map((country) => (
                <Card
                  name={country.name}
                  key={country.name}
                  icon={country.icon}
                  cities={country.cities}
                  temperature={country.temperature}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
