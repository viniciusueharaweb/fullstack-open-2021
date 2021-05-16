import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";

function App() {
    const [countriesInfo, setCountriesInfo] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [weather, setWeather] = useState({
        main: { temp: 0 },
        wind: { speed: 0 },
        weather: [{ icon: "", description: "" }],
    });

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
            setCountriesInfo(response.data);
        });
    }, []);

    const filterController = (event) => {
        const filtered = countriesInfo.filter((eachCountry) =>
            eachCountry.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
        );
        setFilteredCountries(filtered);
    };
    return (
        <Filter
            filteredCountries={filteredCountries}
            filterController={filterController}
            setFilteredCountries={setFilteredCountries}
            weather={weather}
            setWeather={setWeather}
        />
    );
}

export default App;
