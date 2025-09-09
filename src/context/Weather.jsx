import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../Api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};
export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    setData(response);
  };
const fetchCurrentUserLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      getWeatherDataForLocation(latitude, longitude)
        .then((data) => setData(data))
        .catch((err) => console.error("API fetch failed:", err));
    },
    (error) => {
      console.error("Geolocation error:", error);
      alert("Unable to retrieve your location");
    }
  );
};

    return (
    <WeatherContext.Provider
      value={{ searchCity, data, setSearchCity, fetchData, fetchCurrentUserLocation }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
