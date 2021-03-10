import React, { useState } from 'react';
import FormattedDate from "./FormattedDate";
import axios from 'axios';
import "./Weather.css";
import Loader from "react-loader-spinner";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  if (weatherData.ready) {
    return (
    <div className="App">
        <div className="vanilla-weather-app">
          <div className="card">
            <div className="card-body">
              <h1 id="city">{weatherData.city}</h1>
              <ul className="date-and-time">
                <li id="time">
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize" id="description">{weatherData.description}</li>
              </ul>
              <br />
              <form className="weather-app" id="search-form">
                <div className="row">
                  <input
                    type="text"
                    placeholder="Enter city name here"
                    className="form-control col-9"
                    autoFocus="on"
                    id="city-input"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="form-control col-3 btn btn-success"
                  />
                </div>
              </form>
              <br />
              <br />

              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl current-sky">
                      <img src={weatherData.iconUrl} alt={weatherData.description} id="icon" />
                      <span className="current-temperature">{Math.round (weatherData.temperature)}</span>
                      <span className="units">°C|°F</span>

                      <div className="col-12">
                        <forms className="float-right">
                          <ul className="weather-percentage">
                            <li>
                              Humidity: <span id="humidity">{weatherData.humidity}</span>%
                            </li>
                            <li>
                              Wind: <span id="wind">{Math.round (weatherData.wind)}</span>km/h
                            </li>
                          </ul>
                        </forms>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="seasons"
                src="images/season_changes.png"
                alt=""
                width="100"
              ></img>
              <p className="ending-remark">Have a nice Day!</p>

              <br />
              <p className="every">Forecast every 3 hours</p>

              <div className="row weather-forecast" id="forecast"></div>
            </div>
          </div>
        </div>
    </div>
  );
  } else {
    const apiKey = "cc18170596dd9fcd6f13e84c39a52c30";
    let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return <Loader type="Oval" color="purple" height={80} width={80} />;
  } 
}

