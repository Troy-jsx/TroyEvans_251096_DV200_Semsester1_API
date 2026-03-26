import { useState, useEffect } from "react";
import "../App.css";
import { getTotalEntries } from '../services/SWAPI'

function TotalSWAPIEntries() {
    const [totalEntries, setTotalEntries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTotalEntries()
            .then(total => {
                setTotalEntries(total);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    if (loading) return <p className="ApiSize">gimmie a sec...</p>;
    return <p className="ApiSize">Currently Supporting {totalEntries} entries!</p>;
}

export default TotalSWAPIEntries;
