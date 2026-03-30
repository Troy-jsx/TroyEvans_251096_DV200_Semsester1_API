import { Radar } from "react-chartjs-2";
import "../App.css";

function CompareRadar({ leftItem, rightItem, fields }) {
    const validFields = fields.filter(f => {
        return !isNaN(parseFloat(leftItem[f.key])) && !isNaN(parseFloat(rightItem[f.key]));
    });

    const normalize = (val, max) => max === 0 ? 0 : (val / max) * 100;

    const normalizedLeft = validFields.map(f => {
        const l = parseFloat(leftItem[f.key]);
        const r = parseFloat(rightItem[f.key]);
        return normalize(l, Math.max(l, r));
    });

    const normalizedRight = validFields.map(f => {
        const l = parseFloat(leftItem[f.key]);
        const r = parseFloat(rightItem[f.key]);
        return normalize(r, Math.max(l, r));
    });

    const data = {
        labels: validFields.map(f => f.label),
        datasets: [
            {
                label: leftItem.name,
                data: normalizedLeft,
                borderColor: '#f0ff20',
                backgroundColor: 'rgba(240, 255, 32, 0.15)',
                pointBackgroundColor: '#f0ff20',
            },
            {
                label: rightItem.name,
                data: normalizedRight,
                borderColor: '#00cfff',
                backgroundColor: 'rgba(0, 207, 255, 0.15)',
                pointBackgroundColor: '#00cfff',
            }
        ]
    };

    const options = {
        responsive: true,
        scales: {
            r: {
                ticks: { display: false },
                grid: { color: 'rgba(255,255,255,0.1)' },
                angleLines: { color: 'rgba(255,255,255,0.1)' },
                pointLabels: {
                    color: '#e7e7e7',
                    font: { family: "'Julius Sans One', sans-serif", size: 12 }
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#e7e7e7',
                    font: { family: "'Julius Sans One', sans-serif", size: 14 },
                    padding: 20,
                }
            },
            tooltip: {
                backgroundColor: '#1a1a2e',
                titleColor: '#f0ff20',
                bodyColor: '#d8d8d8',
                padding: 12,
            }
        }
    };

    return (
        <div className="CompareChartCard">
            <p className="CompareChartTitle">overall comparison</p>
            <Radar className="CompareRadarChart" data={data} options={options}/>
        </div>
    );
}

export default CompareRadar;