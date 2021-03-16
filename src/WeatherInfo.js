import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return  (
    <div className="WeatherInfo">
        <h1 id="city">{props.data.city}</h1>
        <ul className="date-and-time">
            <li id="time">
                <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize" id="description">{props.data.description}</li>
        </ul>
        <br />

        
        <div className="card">
        <div className="card-body">      
        <div className="row">
            <div className="col-xl current-sky">
                <div className="float-left">
                    <WeatherIcon code={props.data.icon} />
                </div>
            
                <span className="current-temperature">{Math.round (props.data.temperature)}</span>
                <span className="units">°C|°F</span>

                <div className="col-12">
                    <forms className="float-right">
                        <ul className="weather-percentage">
                            <li>
                                Humidity: <span id="humidity">{props.data.humidity}</span>%
                            </li>
                            <li>
                                Wind: <span id="wind">{Math.round (props.data.wind)}</span>km/h
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
        <p className="every">Forecast of the Day</p>

        <div className="row weather-forecast" id="forecast"></div>
                    
                
            
        
    </div>
)};