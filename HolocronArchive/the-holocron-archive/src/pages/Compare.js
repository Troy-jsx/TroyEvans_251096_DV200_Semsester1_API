import { useState } from "react";
import "../App.css";
import CompareView from "../components/CompareView";
import Tooltip from "../components/Tooltip";

const categories = ["people", "planets", "starships", "vehicles", "species", "films"];

const tooltipText = {
    people: "Characters from across the galaxy",
    planets: "Worlds in the Star Wars universe",
    starships: "Vessels that travel through space",
    vehicles: "Ground and atmospheric transport",
    species: "Alien races and humanoids",
    films: "The Skywalker Saga episodes",
};

const backgroundImages = {
    people: "/images/peopleHoverBg.png",
    planets: "/images/planetHoverBg.png",
    starships: "/images/starshipHoverBg.png",
    vehicles: "/images/vehicleHoverBg.png",
    species: "/images/speciesHoverBg.png",
    films: "/images/filmHoverBg.png",
};

function Compare() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    if (selectedCategory) {
        return (
            <div className="ComparePage">
                <button className="BackBtn" onClick={() => setSelectedCategory(null)}>{"<  "}back</button>
                <p className="CompareTitle">{selectedCategory}</p>
                <CompareView category={selectedCategory}/>
            </div>
        );
    }

    return (
        <div className="CategorySelect">
            <div
                className="CategoryBg"
                style={{
                    backgroundImage: hoveredCategory ? `url(${backgroundImages[hoveredCategory]})` : 'none',
                    opacity: hoveredCategory ? 0.3 : 0,
                }}
            />
            <p className="CompareTitle">select category</p>
            <div className="CategoryGrid">
                {categories.map(cat => (
                    <div
                        key={cat}
                        className="CategoryCardWrapper"
                        onMouseEnter={() => setHoveredCategory(cat)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        <Tooltip content={tooltipText[cat]}>
                            <div className="CategoryCard">
                                <p className="CategoryLabel">{cat}</p>
                            </div>
                        </Tooltip>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Compare;