import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { asyncWeather } from '../redux/slices/apiSlice';
import map from '../img/europa.png';
// #dd4883 #d04379

const Home = () => {
  // load data
  const cityName = ['London', 'Liverpool', 'Leeds', 'Manchester', 'Lester',
    'Berlin', 'Hamburg', 'Mainz', 'Leipzig', 'Brunswick',
    'Lille', 'Paris', 'Lyon', 'Marseille', 'Nantes',
    'Barcelona', 'Madrid', 'Sevilla', 'Toledo', 'Bilbao',
    'Milan', 'Lecce', 'Florence', 'Venice', 'Naples',
    'Almere', 'Tilburg', 'Enschede', 'Doetinchem', 'Weert'];
  const dispatch = useDispatch();
  const { climates } = useSelector((state) => state.climates);

  useEffect(() => {
    if (climates.length < 1) {
      cityName.forEach((city) => dispatch(asyncWeather(city)));
    }
  }, [dispatch, climates]);

  return (
    <main className="overflow-auto">

      <div className="flex flex-col">
        {/* fist part */}
        <div className="flex text-white items-center  justify-center gap-x-3">
          <img
            alt="map"
            src={map}
            className="filter contrast-200 h-40 w-21"
          />
          <div className="flex flex-col">
            <h3 className="font-bold">EUROPE</h3>
            <h5 className="text-xs">degree</h5>
          </div>
        </div>

        {/* cards */}
        <div className="text-white">
          <h4 className="bg-[#df4783] text-xs font-bold p-1">STATS BY COUNTRY</h4>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <h6>jjjj</h6>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
