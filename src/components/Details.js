import { useLocation } from 'react-router-dom';
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const Details = () => {
  const location = useLocation();
  const data = location.state.prop;
  console.log(data);
  const {
    name,
    description,
    temperature,
    wind,
    icon,
    humidity,
  } = data;
  return (
    <div className="flex flex-col mt-20 justify-center text-white items-center">
      <img src={icon} alt="weather icon" className="border-2 bg-[rgb(151,206,255)] shadow-2xl mb-5 border-[#2e0672]" />
      <h2 className="font-bold">{name}</h2>
      <h3>{description}</h3>
      <div className="flex justify-center items-center gap-x-3">
        <div>
          <div className="flex items-center">
            <WiHumidity className="text-[#1e1d4f] mt-[0.1rem] mr-1 w-7 h-7" />
            {humidity}
          &nbsp;%
          </div>
          <div className="flex items-center">
            <WiStrongWind className="text-[#1e1d4f] mt-[0.1rem] mr-1 w-7 h-7" />
            {wind}
          &nbsp;m/s
          </div>
          <div className="flex items-center">
            <WiThermometer className="text-[#1e1d4f] mr-1 mt-[0.1rem] w-7 h-7" />
            {temperature}
            &nbsp;
            &deg;C
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
