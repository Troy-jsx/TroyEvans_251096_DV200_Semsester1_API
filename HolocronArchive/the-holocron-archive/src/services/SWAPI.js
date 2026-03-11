import { useState, useEffect } from "react";
import "../App.css";

function TotalSWAPIEntries(){
    const [totalEntries, setTotalEntries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const endpoints = ["people", "planets", "starships", "vehicles", "species", "films"]; //all the endpoints i want to count (this is all of them)

        Promise.all(    //just makes sure it all gets done at once
            endpoints.map(endpoint => //do for each endpoint
            fetch(`https://swapi.dev/api/${endpoint}/`) 
                .then(res => res.json()) //res = response, its getting the requested data in json format and makes it a js object too
                .then(data => data.count) //once done then only return the count property
            )
        )
        .then(counts => { //once we have the counts we do this bit
            const total = counts.reduce((sum, count) => sum + count, 0);
            setTotalEntries(total);
            setLoading(false);
        })
        .catch(err => console.error(err));

    }, []);

    if(loading) return<p className="ApiSize">gimmie a sec...</p>

    return <p className="ApiSize">Currently Supporting {totalEntries} entries!</p>
}

export default TotalSWAPIEntries;