import React, { useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-1234567" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const nameInputController = (event) => {
        setNewName({ name: event.target.value });
    };

    const numberInputController = (event) => {
        setNewNumber({ number: event.target.value });
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
            <Form
                handleNameSubmit={handleNameSubmit}
                nameInputController={nameInputController}
                numberInputController={numberInputController}
            />
            <Numbers persons={persons} />
        </div>
    );
};

export default App;
