import { useState, useEffect } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";

export default function WeatherDisplay({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city) {
        setLoading(true);
        try {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=49fcc611ebcb4cb6a8860628252804&q=${city}`);
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error("Error fetching data: ", error);
          alert("Failed to fetch weather data");
        } finally {
          setLoading(false); 
        }
      }
    };

    fetchWeatherData(); 
  }, [city]);

  return (
    <div>
      {loading && <p>Loading data...</p>}
      {!loading && weatherData && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20
          }}
        >
          <WeatherCard
            title="Temperature"
            data={`${weatherData.current.temp_c}°C`}
          />
          <WeatherCard
            title="Humidity"
            data={`${weatherData.current.humidity}%`}
          />
          <WeatherCard
            title="Condition"
            data={weatherData.current.condition.text}
          />
          <WeatherCard
            title="Wind Speed"
            data={`${weatherData.current.wind_kph} kph`}
          />
        </div>
      )}
    </div>
  );
}
