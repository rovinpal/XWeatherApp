import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";

export default function App() {
  const [city, setCity] = useState("");

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div 
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f8ff", 
      }}
    >
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}