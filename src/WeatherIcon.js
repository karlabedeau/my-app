import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    return (
        <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animated={defaults.animate} 
        />
    );
}