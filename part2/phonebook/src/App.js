import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Search from "./components/Search";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filteredInput, setFilteredInput] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [failMessage, setFailMessage] = useState("");

    useEffect(() => {
        //set initial persons from json-server db.json (backend)
        personService.getAll().then((initialPersons) => {
            setPersons(initialPersons);
        });
    }, []);

    const nameInputController = (event) => {
        //name controlled input
        setNewName(event.target.value);
    };

    const numberInputController = (event) => {
        // number controlled input
        setNewNumber(event.target.value);
    };

    const filterController = (event) => {
        //filters people in the phonebook, than change filtered state,
        //that will be rendered instead of "persons" state
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
            //logic to the case when the user tries to add a person that already is in the phonebook
            if (persons[i].name === newName) {
                if (
                    window.confirm(
                        `${newName} is already added to the phonebook. Do you want to replace the old number with this new one?`
                    )
                ) {
                    //send put request and then change state
                    personService
                        .updatePerson({
                            ...persons[i],
                            number: newNumber,
                        })
                        .then((response) => {
                            //change state after resolving promise
                            setPersons(
                                persons.map((eachPerson) => {
                                    return eachPerson.id !== persons[i].id
                                        ? eachPerson
                                        : response;
                                })
                            );
                            setSuccessMessage(`Changed ${newName}'s number`);
                            removeNotification();
                            setNewName("");
                            setNewNumber("");
                        })
                        .catch((err) => {
                            //error handling
                            setFailMessage(
                                `Information of ${newName} has already been removed from the server.`
                            );
                            removeNotification();
                        });
                }
                return;
            }
        }
        //logic to add a new person: only happens if it is a new person name
        const newPerson = { name: newName, number: newNumber };
        personService
            .createPerson(newPerson)
            .then((createdUser) => setPersons(persons.concat([createdUser])));
        setSuccessMessage(`Added ${newName}`);
        removeNotification();
        setNewName("");
        setNewNumber("");
    };

    const handleDelete = (personToBeDeleted) => {
        //logic to delete a contact number
        if (
            window.confirm(
                `Are you sure you want to delete ${personToBeDeleted.name}'s contact?`
            )
        ) {
            personService.deletePerson(personToBeDeleted);
            setPersons(
                persons.filter((eachPerson) => eachPerson !== personToBeDeleted)
            );
            setSuccessMessage(`Deleted ${personToBeDeleted.name}`);
            removeNotification();
        }
    };

    const removeNotification = () => {
        //settimeout function to keep the code dry
        return setTimeout(() => {
            setSuccessMessage(null);
            setFailMessage(null);
        }, 3000);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification
                successMessage={successMessage}
                failMessage={failMessage}
            />
            <Search filterController={filterController} />
            <Form
                handleSubmit={handleSubmit}
                nameInputController={nameInputController}
                numberInputController={numberInputController}
                newName={newName}
                newNumber={newNumber}
            />
            <Numbers
                persons={persons}
                filtered={filtered}
                filteredInput={filteredInput}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default App;
