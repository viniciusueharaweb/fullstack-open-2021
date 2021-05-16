import React, { useEffect } from "react";
import axios from "axios";

const Weather = ({ filteredCountries, weather, setWeather }) => {
    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY;
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${filteredCountries[0].capital}&units=metric&appid=${api_key}`
            )
            .then((response) => {
                console.log("oi");
                setWeather(response.data);
            });
    }, [setWeather]);

    return (
        <>
            <h2>{`Weather in ${filteredCountries[0].capital}`}</h2>
            <p>
                <strong>temperature:</strong> {weather.main.temp} Celsius
            </p>

            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description + " icon"}
            />
            <p>
                <strong>wind speed:</strong> {weather.wind.speed}km/h
            </p>
        </>
    );
};

export default Weather;
