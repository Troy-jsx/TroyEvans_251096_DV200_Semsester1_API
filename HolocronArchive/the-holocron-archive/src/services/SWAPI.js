import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';
const endpoints = ["people", "planets", "starships", "vehicles", "species", "films"];

export const getTotalEntries = async () => { //exporting and declaring in one line
    const results = await Promise.all( //we will wait for all to finish before moving on
        endpoints.map(endpoint =>
            axios.get(`${BASE_URL}/${endpoint}/`).then(r => r.data.count)
        )
    ); //we now have an array of numbers not promises
    return results.reduce((sum, count) => sum + count, 0);
};

export const getFilms = () => axios.get(`${BASE_URL}/films/`).then(r => r.data.results); //getting the films endpoint in json in one line with axios