import axios from 'axios';

const BASE_URL = 'https://swapi.info/api';
const endpoints = ["people", "planets", "starships", "vehicles", "species", "films"];

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

export const getFilms = () => axios.get(`${BASE_URL}/films/`).then(r => r.data);

export const getPerson = (id) => axios.get(`${BASE_URL}/people/${id}/`).then(r => r.data);
export const getPlanet = (id) => axios.get(`${BASE_URL}/planets/${id}/`).then(r => r.data);
export const getStarship = (id) => axios.get(`${BASE_URL}/starships/${id}/`).then(r => r.data);
export const getVehicle = (id) => axios.get(`${BASE_URL}/vehicles/${id}/`).then(r => r.data);
export const getSpecies = (id) => axios.get(`${BASE_URL}/species/${id}/`).then(r => r.data);
export const getFilm = (id) => axios.get(`${BASE_URL}/films/${id}/`).then(r => r.data);