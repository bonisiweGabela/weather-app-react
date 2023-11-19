import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp(props) {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState("");
  let [loading, setLoading] = useState(false);

  function showWeather(response) {
    setLoading(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "acadd51453277cb7d8750d962599ac34";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  let searchForm = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        autoFocus="on"
        placeholder="Enter a city"
        onChange={getCity}
      />
      <button type="Submit"> Search </button>
    </form>
  );

  function getCity(event) {
    setCity(event.target.value);
  }

  if (loading) {
    return (
      <div>
        {searchForm}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li className="description">Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)}km/hr</li>
        </ul>
      </div>
    );
  } else {
    return searchForm;
  }
}
