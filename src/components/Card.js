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
  return (
    <div className="flex flex-col text-right">
      <img src={icon} className="h-15 w-20" alt="map" />
      <h6 className="">{name}</h6>
      <h6>
        {temperature}
        &deg;C
      </h6>
    </div>
  );
};

export default Card;
