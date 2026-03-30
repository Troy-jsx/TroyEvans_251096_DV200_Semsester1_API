import axios from 'axios';

const BASE_URL = 'https://swapi.info/api';
const endpoints = ["people", "planets", "starships", "vehicles", "species", "films"];

const DEFAULT_IDS = {
    planets:   [1, 4],
    people:    [1, 2],
    starships: [2, 3],
    vehicles:  [4, 6],
    species:   [1, 3],
    films:     [1, 2],
};


export const getDefaultItems = async (category) => {
    const [id1, id2] = DEFAULT_IDS[category];
    const [a, b] = await Promise.all([
        axios.get(`${BASE_URL}/${category}/${id1}/`).then(r => r.data),
        axios.get(`${BASE_URL}/${category}/${id2}/`).then(r => r.data),
    ]);
    return [a, b];
};

export const getEndpointCounts = async () => {
    const results = await Promise.all(
        endpoints.map(e => axios.get(`${BASE_URL}/${e}/`).then(r => r.data.length))
    );
    return endpoints.map((e, i) => ({ name: e, count: results[i] }));
};

export const getTotalEntries = async () => {
    const counts = await getEndpointCounts();
    return counts.reduce((sum, c) => sum + c.count, 0);
};

export const searchCategory = async (category) => {
    const result = await axios.get(`${BASE_URL}/${category}`);
    return result.data;
};

export const getFilms = () => axios.get(`${BASE_URL}/films/`).then(r => r.data);

export const getPerson = (id) => axios.get(`${BASE_URL}/people/${id}/`).then(r => r.data);
export const getPlanet = (id) => axios.get(`${BASE_URL}/planets/${id}/`).then(r => r.data);
export const getStarship = (id) => axios.get(`${BASE_URL}/starships/${id}/`).then(r => r.data);
export const getVehicle = (id) => axios.get(`${BASE_URL}/vehicles/${id}/`).then(r => r.data);
export const getSpecies = (id) => axios.get(`${BASE_URL}/species/${id}/`).then(r => r.data);
export const getFilm = (id) => axios.get(`${BASE_URL}/films/${id}/`).then(r => r.data);