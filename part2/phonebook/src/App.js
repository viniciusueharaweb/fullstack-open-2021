import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Search from "./components/Search";
import personService from "./services/persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filteredInput, setFilteredInput] = useState("");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        personService.getAll().then((initialPersons) => {
            setPersons(initialPersons);
        });
    }, []);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].name === newName.name) {
                alert(`${newName.name} is already added to the phonebook`);
                return;
            }
        }
        const newPerson = { ...newName, ...newNumber };
        personService
            .createPerson(newPerson)
            .then((createdUser) => setPersons(persons.concat([createdUser])));
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Search persons={persons} filterController={filterController} />
            <Form
                handleSubmit={handleSubmit}
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
