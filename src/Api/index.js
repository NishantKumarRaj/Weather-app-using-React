const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=4e848f6576384fefb75132149250109";
export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return response.json(); 
};

export const getWeatherDataForLocation = async (lat,lng) => {
    const response = await fetch(`${baseURL}&q=${lat},${lng}&aqi=yes`);
    return response.json(); 
};
