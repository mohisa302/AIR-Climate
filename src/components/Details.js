import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const data = location.state.prop;
  const {
    // country,
    name,
    // description,
    // temperature,
    // wind,
    // icon,
    // humidity,
    // category,
  } = data;
  return (
    <div>
      {name}
    </div>
  );
};

export default Details;
