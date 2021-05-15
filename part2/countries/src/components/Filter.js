import React from "react";
import Results from "./Results";

const Filter = ({
    filteredCountries,
    filterController,
    setFilteredCountries,
}) => {
    return (
        <div>
            <p>
                find countries <input onChange={filterController} />
            </p>
            <Results
                filteredCountries={filteredCountries}
                setFilteredCountries={setFilteredCountries}
            />
        </div>
    );
};

export default Filter;
