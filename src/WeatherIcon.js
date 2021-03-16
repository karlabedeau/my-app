import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG"
    }

    if (props.code === "01d") {
        return (
            <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="1e1e1e"
                size={64}
                animated={true} 
            />
        );
    } else {
        return (
            <ReactAnimatedWeather
                icon="CLEAR_NIGHT"
                color="1e1e1e"
                size={64}
                animated={true} 
            />
        );
    }
}
