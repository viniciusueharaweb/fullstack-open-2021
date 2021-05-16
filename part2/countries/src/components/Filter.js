import React from "react";
import Results from "./Results";

const Filter = ({
    filteredCountries,
    filterController,
    setFilteredCountries,
    weather,
    setWeather,
}) => {
    return (
        <div>
            <p>
                find countries <input onChange={filterController} />
            </p>
            <Results
                filteredCountries={filteredCountries}
                setFilteredCountries={setFilteredCountries}
                weather={weather}
                setWeather={setWeather}
            />
        </div>
    );
};

export default Filter;
