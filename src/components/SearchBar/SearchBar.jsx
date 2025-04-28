import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div
        style={{
            height: "100px",
            width: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            margin: "20px"
        }}
    >
        <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            style={{
                height: "40px",
                width: "350px",
                borderStyle: "none",
                borderRadius: "4px",
                padding: "5px   "
            }}
        />
        <button 
            onClick={handleSearch}
            style={{
                height: "45px",
                width: "100px",
                borderStyle: "none",
                backgroundColor: "#4caf50",
                borderRadius: "4px",
                color: "#FFFFFF",
                cursor: "pointer"
            }}
        >
            Search
        </button>
    </div>
  );
}