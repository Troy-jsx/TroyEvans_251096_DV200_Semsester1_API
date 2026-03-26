import {Chart as ChartJS} from "chart.js/auto";
import { useState, useEffect } from "react";
import {Line} from "react-chartjs-2";
import {getFilms} from "../services/SWAPI";

function Linegraph()
{
    const [films, setFilms] = useState([]);

     useEffect(() => {
        getFilms().then(data => {
            const sortedFilms = data.sort((a, b) => a.episode_id - b.episode_id); // api doenst return in order so i have to sort
            setFilms(sortedFilms);
        });
    }, []);

    const toRoman = (num) => {
        const map = { V:5, IV:4, I:1 }; //this is a lookup table ordered highest to lowest
        return Object.entries(map).reduce((result, [roman, value]) => { //object.entries turns map into array of pairs [[V,5], [...]]. THEN we attach a funciton to that
            while (num >= value) { result += roman; num -= value; } //keep going until no value left(add a numeral; minus its value)
            return result;
        }, '');
    };

    const labels = films.map(film => film.episode_id);

    const data = {
    labels: labels,
    datasets: [{
            label: 'Characters over time',
            data: films.map(film => film.characters.length),
            fill: false,
            borderColor: '#f5ff3d',
            backgroundColor: '#f5ff3d',
            pointRadius: 3,
            tension: 0.1,
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: '#ffffff',
            pointHoverRadius: 10, 
        }]
    };

    const options = {
        responsive: true,
        plugins: { //plugins.
            legend: { //plugins.legend
                position: "top", 
                labels: { //plugins.legend.labels
                    color: '#d8d8d8',
                    boxWidth: 0,
                    font:{
                        family:"'Star Jedi', serif",
                        size: 40,
                    }
                },
            },

            tooltip: {
                padding: 20,
                backgroundColor: '#1a1a2e',
                displayColors: false,

                titleColor: '#f5ff3d', 
                titleFont: {
                family: "'Julius Sans One', sans-serif",
                size: 14,
                weight: 'bold',
                },

                bodyColor: '#d8d8d8',
                bodyFont: {
                family: "'Hepta Slab', serif",
                size: 13,
                },

                callbacks: {
                    title: (items) => {
                            const film = films[items[0].dataIndex];
                            return film ? `Episode ${toRoman(film.episode_id)}: ` + film.title : ''; // if data hasnt loaded yet
                        },

                    label: (item) => {
                            const film = films[item.dataIndex];
                            return [
                                `Characters: ${item.formattedValue}`,
                                `Director: ${film.director}`,      
                                `Released: ${film.release_date}`,       
                            ];
                    },
            },
        },

        scales: {
            x: {
                title:{
                    display: true,
                    text: "episode",
                    font: {
                        family: "'Star Jedi', serif",
                        size: 35,
                    },

                },
                ticks:{
                    font:{
                        family: "'Julius Sans One', sans-serif",
                        size: 20,
                    },
                    color: '#dfdfdf',
                },
                
            },

            y: {
                beginAtZero: true,
                title:{
                    display: true,
                    text: "characters",
                    font: {
                        family: "'Star Jedi', serif",
                        size: 35,
                    },
                },
                ticks:{
                    font:{
                        family: "'Julius Sans One', sans-serif",
                        size: 20,
                    },
                    color: '#dfdfdf',
                    },
                },
            },
        }
    };

    return(
        <div className="TimelineGraph">
            <Line data={data} options={options} ></Line>
        </div>
    )
}

export default Linegraph;