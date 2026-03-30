import { Pie } from "react-chartjs-2";
import "../App.css";

function ComparePie({ leftItem, rightItem, field }) {
    const l = parseFloat(leftItem[field.key]);
    const r = parseFloat(rightItem[field.key]);

    if (isNaN(l) || isNaN(r)) return(
        <div className="CompareChartCard"  style={{display: "flex", justifyContent: "center"}}>
            <p className="CompareChartTitle">pie chart</p>
            <p className="StatLabel">no data available</p>
        </div>
    );

    const data = {
        labels: [leftItem.name, rightItem.name],
        datasets: [{
            data: [l, r],
            backgroundColor: ['#f0ff20', '#00cfff'],
            borderColor: ['#1a1a1a'],
            borderWidth: 2,
        }]
    };

    const options = {
        responsive: true,
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
                callbacks: {
                    label: (item) => ` ${item.formattedValue} (${field.label})`
                }
            }
        }
    };

    return (
        <div className="CompareChartCard">
            <p className="CompareChartTitle">{field.label} comparison</p>
            <Pie className="ComparePieChart" data={data} options={options} />
        </div>
    );
}

export default ComparePie;