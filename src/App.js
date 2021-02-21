import React from 'react';
import "./styles.css";
import Weather from "./Weather"


export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="vanilla-weather-app">
          <div class="card">
            <div class="card-body">
              <h1 id="city">#</h1>
              <ul class="date-and-time">
                <li id="time"></li>
                <li id="description"></li>
              </ul>
              <br />
              <form class="weather-app" id="search-form">
                <div class="row">
                  <input
                    type="text"
                    placeholder="Enter city name here"
                    class="form-control col-9"
                    id="city-input"
                  />
                  <input
                    type="submit"
                    value="Search"
                    class="form-control col-3 btn btn-success"
                  />
                </div>
              </form>
              <br />
              <br />

              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-xl current-sky">
                      <img src="#" alt="cloudy" id="icon" />
                      <span class="current-temperature"></span>
                      <span class="units">°C</span>

                      <div class="col-12">
                        <forms class="float-right">
                          <ul class="weather-percentage">
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
                class="seasons"
                src="images/season_change.png"
                alt=""
                width="100"
              ></img>
              <p class="ending-remark">Have a nice Day!</p>
              <Weather />

              <br />
              <p class="every">Forecast every 3 hours</p>

              <div class="row weather-forecast" id="forecast"></div>
              <div class="footer">
                This
                <a
                  class="open"
                  href="https://github.com/karlabedeau/my-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open-source code
                </a>
                and
                <a
                  href="https://practical-allen-6acde0.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hosted on Netlify
                </a>
                weather report was build by Karla Bedeau
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

