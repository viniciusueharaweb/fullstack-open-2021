import React from "react";

const Numbers = ({ persons }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {persons.map((eachPerson) => (
                <Person key={eachPerson.name} persons={eachPerson} />
            ))}
        </div>
    );
};

const Person = ({ persons }) => {
    return (
        <div>
            <p>{persons.name}</p>
        </div>
    );
};

export default Numbers;
