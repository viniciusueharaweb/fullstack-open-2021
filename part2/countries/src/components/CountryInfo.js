import React from "react";

const CountryInfo = ({ filteredCountries }) => {
    const chosenCountry = filteredCountries[0];
    return (
        <>
            <h1>{chosenCountry.name}</h1>
            <p>{chosenCountry.capital}</p>
            <p>{chosenCountry.population}</p>

            <h2>languages</h2>
            <ul>
                {chosenCountry.languages.map((language) => {
                    return <li key={language.name}>{language.name}</li>;
                })}
            </ul>
            <img src={chosenCountry.flag} alt={`${chosenCountry.name} flag`} />
        </>
    );
};

export default CountryInfo;
