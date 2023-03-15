import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { changeTemp } from '../redux/slices/tempSlice';

const Card = (city) => {
  const {
    name,
    temperature,
    icon,
  } = city;

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
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
    <Link
      to={`${categories.all === true ? '/Details' : '/Country'}`}
      state={{
        from: '/',
        prop: city,
      }}
    >
      <div className="flex flex-col text-right border-2 border-indigo-500/100 p-1">
        <img src={icon} className="h-15 w-20" alt="map" />
        <h6 className="">{nameTemp}</h6>
        <h6>
          {temperature}
          &deg;C
        </h6>
      </div>
    </Link>
  );
};

export default Card;
