import React from 'react';
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
        <div className="vanilla-weather-app">
          <div className="card">
            <div className="card-body">
              <h1 id="city">Montreal</h1>
              <ul className="date-and-time">
                <li id="time">Tuesday 7:00</li>
                <li id="description">Snow</li>
              </ul>
              <br />
              <form className="weather-app" id="search-form">
                <div className="row">
                  <input
                    type="text"
                    placeholder="Enter city name here"
                    className="form-control col-9"
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
                      <img src="#" alt="cloudy" id="icon" />
                      <span className="current-temperature"></span>
                      <span className="units">°C</span>

                      <div className="col-12">
                        <forms className="float-right">
                          <ul className="weather-percentage">
                            <li>
                              Humidity: <span id="humidity"></span>%
                            </li>
                            <li>
                              Wind: <span id="wind"></span>km/h
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
              <div className="Weather">Hello</div>

              <br />
              <p className="every">Forecast every 3 hours</p>

              <div className="row weather-forecast" id="forecast"></div>
            </div>
          </div>
        </div>
    </div>
  );
}

