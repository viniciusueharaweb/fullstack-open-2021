import React, { useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    const inputController = (event) => {
        setNewName({ name: event.target.value });
    };

    const handleNameSubmit = (event) => {
        event.preventDefault();
        console.log(persons);
        console.log(newName);
        if (persons.includes(newName)) {
            alert(`${newName} is already added to the phonebook`);
            return;
        }
        setPersons(persons.concat([newName]));
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Form
                newName={newName}
                setNewName={setNewName}
                persons={persons}
                setPersons={setPersons}
                handleNameSubmit={handleNameSubmit}
                inputController={inputController}
            />
            <Numbers persons={persons} />
        </div>
    );
};

export default App;
