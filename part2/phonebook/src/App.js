import React, { useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Search from "./components/Search";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-1234567" },
        { name: "Vini Hellas", number: "45467" },
        { name: "Estela Aurora", number: "044544567" },
        { name: "Arthur Hellas", number: "0403734567" },
        { name: "Bio Hel", number: "888888888567" },
        { name: "asda Hellas", number: "999999999" },
        { name: "qqqqqq Hellas", number: "11111111111" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filteredInput, setFilteredInput] = useState("");
    const [filtered, setFiltered] = useState([]);

    const nameInputController = (event) => {
        setNewName({ name: event.target.value });
    };

    const numberInputController = (event) => {
        setNewNumber({ number: event.target.value });
    };

    const filterController = (event) => {
        setFilteredInput(event.target.value);
        const filteredPersons = persons.filter(
            (eachPerson) =>
                eachPerson.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase()) ||
                eachPerson.number.includes(event.target.value)
        );
        setFiltered(filteredPersons);
    };

    const handleNameSubmit = (event) => {
        event.preventDefault();
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].name === newName.name) {
                alert(`${newName.name} is already added to the phonebook`);
                return;
            }
        }
        const newPerson = { ...newName, ...newNumber };
        setPersons(persons.concat([newPerson]));
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Search persons={persons} filterController={filterController} />
            <Form
                handleNameSubmit={handleNameSubmit}
                nameInputController={nameInputController}
                numberInputController={numberInputController}
            />
            <Numbers
                persons={persons}
                filtered={filtered}
                filteredInput={filteredInput}
            />
        </div>
    );
};

export default App;
