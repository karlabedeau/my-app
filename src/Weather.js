import React, { useState } from 'react';
import WeatherInfo from "./WeatherInfo";
import axios from 'axios';
import "./Weather.css";
import Loader from "react-loader-spinner";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }
  
  function search() {
    const apiKey = "cc18170596dd9fcd6f13e84c39a52c30";
    let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
    <div className="App">
        <div className="vanilla-weather-app">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="weather-app" id="search-form">
                <div className="row">
                  <input
                    type="text"
                    placeholder="Enter city name here"
                    className="form-control col-9"
                    autoFocus="on"
                    onChange={handleCityChange}
                    id="city-input"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="form-control col-3 btn btn-success"
                  />
                </div>
              </form>
              <WeatherInfo data={weatherData} />
              <br />
              <br />

            </div>
          </div>
        </div>
    </div>
  );
  } else {
    search();
    return <Loader type="Oval" color="purple" height={80} width={80} />;
  } 
}

