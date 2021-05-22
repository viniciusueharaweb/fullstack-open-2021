import axios from "axios";

const url = "/api/persons";

const getAll = () => {
    const request = axios.get(url);
    return request.then((response) => response.data);
};

const createPerson = (newPerson) => {
    const request = axios.post(url, newPerson);
    return request.then((response) => response.data);
};

const deletePerson = (person) => {
    return axios.delete(url + "/" + person.id, person);
};

const updatePerson = (person) => {
    const request = axios.put(url + "/" + person.id, person);
    return request.then((response) => response.data);
};

const personService = { getAll, createPerson, deletePerson, updatePerson };

export default personService;
