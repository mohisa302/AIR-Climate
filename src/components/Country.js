import { useLocation, Link } from 'react-router-dom';

const Country = () => {
  const location = useLocation();
  const data = location.state.prop;
  const {
    cities,
  } = data;
  return (
    <main className="over-flow-auto">
      <div className="flex flex-col">
        {cities.map((city) => (
          <Link
            to="/Details"
            state={{
              from: '/',
              prop: city,
            }}
            key={city.id}
          >
            <div className="flex text-white flex-col items-center text-right border-2 border-[#ab93f4] p-2">
              <img src={city.icon} className="h-15 w-20" alt="map" />
              <h6 className="">{city.name}</h6>
              <h6>
                {city.temperature}
                &deg;C
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Country;
