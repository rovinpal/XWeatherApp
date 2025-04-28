import React from "react";

export default function WeatherCard({ title, data }) {
    return (
      <div
        style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            width: "200px",
            padding: "10px",
            boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}
      >
        <h3 style={{marginBottom: "2px"}}>{title}</h3>
        <p>{data}</p>
      </div>
    );
  };