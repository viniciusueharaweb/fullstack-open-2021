import React from "react";
import CountryInfo from "./CountryInfo";
import Weather from "./Weather";

const Results = ({
    filteredCountries,
    setFilteredCountries,
    weather,
    setWeather,
}) => {
    if (filteredCountries.length === 0) {
        return "";
    }

    if (filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    }

    if (filteredCountries.length === 1) {
        return (
            <>
                <CountryInfo filteredCountries={filteredCountries} />
                <Weather
                    filteredCountries={filteredCountries}
                    weather={weather}
                    setWeather={setWeather}
                />
            </>
        );
    }
    return filteredCountries.map((country) => {
        return (
            <h3 key={country.alpha3Code}>
                {country.name}
                <button onClick={() => setFilteredCountries([country])}>
                    show
                </button>
            </h3>
        );
    });
};

export default Results;
