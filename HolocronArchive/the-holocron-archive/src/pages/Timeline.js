import {Chart as ChartJS} from "chart.js/auto";
import {Line} from "react-chartjs-2";

function Timeline() {
    const labels = ["I", "II", "III", "IV", "V", "VI"];
    const data = {
    labels: labels,
    datasets: [{
        label: 'Characters over time',
        data: [23, 24, 29],
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
                family: "'Georgia', serif",
                size: 13,
                },

                callbacks: {
                title: (items) => `Episode ${items[0].label}`,
                label: (item) => `Characters: ${item.formattedValue}`,
                //add in release date 
                //director
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
                }
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
                }
            },
        },
    };
    
    
    return(     /*We send the actual component html down here using the stuff from up there  */
        <div className="TimelineGraphHolder">
            <div className="TimelineGraph">
                <Line data={data} options={options} ></Line>
            </div>
        </div>
    );
}

export default Timeline;