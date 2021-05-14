import React from "react";

const Filter = ({ filteredCountries, filterController }) => {
    return (
        <div>
            <p>
                find countries <input onChange={filterController} />
            </p>
            {/* <p>{filteredCountries[0].name}</p> */}
            <Results filteredCountries={filteredCountries} />
        </div>
    );
};

const Results = ({ filteredCountries }) => {
    if (filteredCountries.length === 0) {
        return "";
    }

    if (filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    }

    if (filteredCountries.length === 1) {
        return (
            <>
                <h1>{filteredCountries[0].name}</h1>
                <p>{filteredCountries[0].capital}</p>
                <p>{filteredCountries[0].population}</p>

                <h2>languages</h2>
                <ul>
                    {filteredCountries[0].languages.map((language) => {
                        return <li>{language.name}</li>;
                    })}
                </ul>
                <img
                    src={filteredCountries[0].flag}
                    alt={`${filteredCountries[0].name} flag`}
                />
            </>
        );
    }
    return filteredCountries.map((country) => {
        return <h3>{country.name}</h3>;
    });
};

export default Filter;
