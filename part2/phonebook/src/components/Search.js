import React from "react";

const Search = ({ filterController }) => {
    return (
        <div>
            <p>
                filter shown with <input onChange={filterController} />
            </p>
        </div>
    );
};

export default Search;
