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
                <li id="time">Saturday 6:00</li>
                <li id="description">Rain</li>
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
                      <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="rain" id="icon" />
                      <span className="current-temperature">6</span>
                      <span className="units">°C|°F</span>

                      <div className="col-12">
                        <forms className="float-right">
                          <ul className="weather-percentage">
                            <li>
                              Humidity: <span id="humidity">94</span>%
                            </li>
                            <li>
                              Wind: <span id="wind">23</span>km/h
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

