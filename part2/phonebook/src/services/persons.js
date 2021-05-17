import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => {
    const request = axios.get(url);
    return request.then((response) => response.data);
};

const createPerson = (newPerson) => {
    const request = axios.post(url, newPerson);
    return request.then((response) => response.data);
};

const deletePerson = (person) => {
    console.log(url + "/" + person.id);
    return axios.delete(url + "/" + person.id, person);
};

const personService = { getAll, createPerson, deletePerson };

export default personService;
