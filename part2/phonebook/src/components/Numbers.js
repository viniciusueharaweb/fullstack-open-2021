import React from "react";

const Numbers = ({ persons, filtered, filteredInput, handleDelete }) => {
    if (filteredInput) {
        return (
            <div>
                <h2>Numbers</h2>
                {filtered.map((eachPerson) => (
                    <Person
                        key={eachPerson.name}
                        persons={eachPerson}
                        handleDelete={() => handleDelete(eachPerson)}
                    />
                ))}
            </div>
        );
    }
    return (
        <div>
            <h2>Numbers</h2>
            {persons.map((eachPerson) => (
                <Person
                    key={eachPerson.name}
                    persons={eachPerson}
                    handleDelete={() => handleDelete(eachPerson)}
                />
            ))}
        </div>
    );
};

const Person = ({ persons, handleDelete }) => {
    return (
        <div>
            <p>
                {persons.name} {persons.number}{" "}
                <button onClick={handleDelete}>delete</button>
            </p>
        </div>
    );
};

export default Numbers;
