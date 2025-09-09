import './App.css';
import { useEffect } from 'react';
import Card from './Components/Card';
import Button from './Components/Button';
import Input from './Components/Input';
import { useWeather } from './context/Weather';

function App() {
  const weather = useWeather();

  useEffect(() => {
    // Get Current Location on mount
    weather.fetchCurrentUserLocation();
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button onClick={weather.fetchCurrentUserLocation} value="Refresh" />
    </div>
  );
}

export default App;
