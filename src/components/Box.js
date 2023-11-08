import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Box = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e1e4638fcf7ed9e4855fae4c14eb116a`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(response);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <div className="box">
      <div className="inputData">
      <i className="searchIcon fa-solid fa-magnifying-glass fa-beat"></i>
        <input
          type="search"
          placeholder="          search..."
          className="inputField"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          />
      </div>

      {!city ? (
        <p>miss typing</p>
      ) : (
        <div className="info">
          <h2 className="location">
            <i className="fa-solid fa-location-dot"></i>
            {search}
          </h2>
          <h1 className="temp">{city.temp}°C</h1>
          <h3 className="tempMinMax">
            Min : {city.temp_min}°C | Max : {city.temp_max}°C
          </h3>
          <h3 className="feel_like">
            Feels like : {city.feels_like}°C 
          </h3>
          <h3 className="humidity">
             Humidity : {city.humidity}%
          </h3>
          
        </div>
      )}
    </div>
  );
};

export default Box;
