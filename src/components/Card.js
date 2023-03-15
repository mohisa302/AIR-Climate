import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeTemp } from '../redux/slices/tempSlice';

const Card = (city) => {
  const {
    // country,
    name,
    // description,
    temperature,
    // wind,
    icon,
    // humidity,
    // category,
  } = city;
  const dispatch = useDispatch();
  const nameTemp = name.length > 10
    ? `${name.substring(0, 10)}...`
    : name;
  let { europeTemp } = useSelector((state) => state.temp);
  europeTemp = parseInt(europeTemp, 10);
  useEffect(() => {
    europeTemp += temperature / 60;
    dispatch(changeTemp(europeTemp.toString()));
  }, [dispatch, temperature]);

  return (
    <div className="flex flex-col text-right border-2 border-indigo-500/100 p-1">
      <img src={icon} className="h-15 w-20" alt="map" />
      <h6 className="">{nameTemp}</h6>
      <h6>
        {temperature}
        &deg;C
      </h6>
    </div>
  );
};

export default Card;
