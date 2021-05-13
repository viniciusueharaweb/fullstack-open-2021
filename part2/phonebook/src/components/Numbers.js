import React from "react";

const Numbers = ({ persons, filtered, filteredInput }) => {
    if (filteredInput) {
        return (
            <div>
                <h2>Numbers</h2>
                {filtered.map((eachPerson) => (
                    <Person key={eachPerson.name} persons={eachPerson} />
                ))}
            </div>
        );
    }
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
            <p>
                {persons.name} {persons.number}
            </p>
        </div>
    );
};

export default Numbers;
