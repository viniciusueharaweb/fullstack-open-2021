import React from "react";

const Search = ({ persons, filterController }) => {
    return (
        <div>
            <p>
                filter shown with <input onChange={filterController} />
            </p>
        </div>
    );
};

export default Search;
