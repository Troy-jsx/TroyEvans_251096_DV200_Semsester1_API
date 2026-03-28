import { useState, useEffect } from "react";
import "../App.css";
import { getEndpointCounts } from "../services/SWAPI";
import Tooltip from "../components/Tooltip";

const tooltipText = { //REMEMBER TO LINK THE CARDS TO THE COMPARE PAGE
    people: "Characters from across the galaxy",
    planets: "Worlds in the Star Wars universe",
    starships: "Vessels that travel through space",
    vehicles: "Ground and atmospheric transport",
    species: "Alien races and humanoids",
    films: "The Skywalker Saga episodes",
};

function Dashboard() {
    const [counts, setCounts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEndpointCounts().then(data => {
            setCounts(data);
            setLoading(false);
        });
    }, []);

    const max = Math.max(...counts.map(c => c.count)); //we get the highest value so we can make % fills of the bars

    if (loading) return <p className="ApiSize">still loading bro...</p>;

    return (
        <div className="Dashboard">
            <p className="DashboardTitle">the dataset</p>

            <div className="StatGrid">
                {counts.map(c => (
                    <Tooltip content={tooltipText[c.name]} key={c.name}>
                        <div className="StatCard">
                            <p className="StatLabel">{c.name}</p>
                            <p className="StatValue">{c.count}</p>
                        </div>
                    </Tooltip>
                ))}
            </div>

            <p className="DashboardTitle">entries by category</p>

            <div className="BarChart">
                {counts.map(c => (
                    <div className="BarRow" key={c.name}>
                        <span className="BarLabel">{c.name}</span>
                        <div className="BarTrack">
                            <div
                                className="BarFill"
                                style={{ width: `${(c.count / max) * 100}%` }}
                            >
                                {c.count}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;