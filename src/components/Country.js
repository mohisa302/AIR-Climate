import { useLocation, Link } from 'react-router-dom';

const Country = () => {
  const location = useLocation();
  const data = location.state.prop;
  const {
    cities,
  } = data;
  return (
    <main className="over-flow-auto">
      <div className="flex flex-col [&>*:nth-child(odd)]:bg-[#4a3bbb] font-semibold [&>*:nth-child(even)]:text-[#0a044a] [&>*:nth-child(odd)]:text-white">
        {cities.map((city) => (
          <Link
            to="/Details"
            state={{
              from: '/',
              prop: city,
            }}
            key={city.id}
          >
            <div className="flex flex-col items-center p-2">
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
