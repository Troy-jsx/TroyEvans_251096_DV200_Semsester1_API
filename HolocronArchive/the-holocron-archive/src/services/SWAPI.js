import { useState, useEffect } from "react";
import "../App.css";
import axios from 'axios';

function TotalSWAPIEntries(){
    const [totalEntries, setTotalEntries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const endpoints = ["people", "planets", "starships", "vehicles", "species", "films"]; //all the endpoints i want to count (this is all of them)

        async function getTotalEntries() {
            try{
                const results = await Promise.all( //gets everything before moving on
                    endpoints.map(endpoint => //we make a new array using the endpoints
                        axios.get(`https://swapi.dev/api/${endpoint}/`) //get the actual endpoints using axios
                            .then(response => response.data.count) //dont need to .json at all because axios does that for me
                    )
                );

                const total = results.reduce((sum, count) => sum + count, 0); //get our sum
                setTotalEntries(total);
                setLoading(false);
            }
            catch(error){
                console.error(error);
            }
        }

        getTotalEntries();
    }, []);

    if(loading) return<p className="ApiSize">gimmie a sec...</p>

    return <p className="ApiSize">Currently Supporting {totalEntries} entries!</p>
}

export default TotalSWAPIEntries;