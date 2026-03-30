import { useState, useEffect } from "react";
import { getDefaultItems } from "../services/SWAPI";
import MirroredBarChart from "./MirroredBarChart";
import ComparePie from "./ComparePie";
import CompareRadar from "./CompareRadar";
import PlanetSizeCompare from "./PlanetSizeCompare";
import HeightCompare from "./HeightCompare";
import TextCompare from "./TextCompare";
import SearchSelect from "./SearchSelect";
import "../App.css";

const CATEGORY_FIELDS = {
    planets: {
        numeric: [
            { key: 'diameter',        label: 'Diameter' },
            { key: 'rotation_period', label: 'Rotation Period' },
            { key: 'orbital_period',  label: 'Orbital Period' },
            { key: 'surface_water',   label: 'Surface Water' },
            { key: 'population',      label: 'Population' },
        ],
        text: [
            { key: 'climate',  label: 'Climate' },
            { key: 'terrain',  label: 'Terrain' },
            { key: 'gravity',  label: 'Gravity' },
        ],
        pie: { key: 'population', label: 'Population' },
    },
    people: {
        numeric: [
            { key: 'mass',   label: 'Mass' },
            { key: 'height',   label: 'Height' },
        ],
        text: [
            { key: 'gender',      label: 'Gender' },
            { key: 'birth_year',  label: 'Birth Year' },
            { key: 'eye_color',   label: 'Eye Color' },
            { key: 'hair_color',  label: 'Hair Color' },
            { key: 'skin_color',  label: 'Skin Color' },
        ],
        pie: { key: 'mass', label: 'Mass' },
    },
    starships: {
        numeric: [
            { key: 'max_atmosphering_speed', label: 'Max Speed' },
            { key: 'crew',                   label: 'Crew' },
            { key: 'cargo_capacity',         label: 'Cargo Capacity' },
            { key: 'cost_in_credits',        label: 'Cost' },
            { key: 'hyperdrive_rating', label: 'Hyperdrive Rating' },
        ],
        text: [
            { key: 'starship_class',    label: 'Class' },
            { key: 'manufacturer',      label: 'Manufacturer' },
        ],
        pie: { key: 'crew', label: 'Crew' },
    },
    vehicles: {
        numeric: [
            { key: 'max_atmosphering_speed', label: 'Max Speed' },
            { key: 'crew',                   label: 'Crew' },
            { key: 'passengers',             label: 'Passengers' },
            { key: 'cargo_capacity',         label: 'Cargo Capacity' },
            { key: 'cost_in_credits',        label: 'Cost' },
        ],
        text: [
            { key: 'vehicle_class',  label: 'Class' },
            { key: 'manufacturer',   label: 'Manufacturer' },
        ],
        pie: { key: 'crew', label: 'Crew' },
    },
    species: {
        numeric: [
            { key: 'average_height',   label: 'Avg Height' },
            { key: 'average_lifespan', label: 'Avg Lifespan' },
        ],
        text: [
            { key: 'classification', label: 'Classification' },
            { key: 'designation',    label: 'Designation' },
            { key: 'skin_colors',    label: 'Skin Colors' },
            { key: 'hair_colors',    label: 'Hair Colors' },
            { key: 'eye_colors',     label: 'Eye Colors' },
            { key: 'language',       label: 'Language' },
        ],
        pie: { key: 'average_lifespan', label: 'Avg Lifespan' },
    },
    films: {
        numeric: [
           
        ],
        text: [
            { key: 'director',      label: 'Director' },
            { key: 'producer',      label: 'Producer' },
            { key: 'release_date',  label: 'Release Date' },
            { key: 'episode_id', label: 'Episode' },
        ],
    },
};

function CompareView({ category }) {
    const [items, setItems] = useState([null, null]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getDefaultItems(category).then(([a, b]) => {
            setItems([a, b]);
            setLoading(false);
        });
    }, [category]);

    if (loading) return <p className="ApiSize">gimmie a sec...</p>;

    const [left, right] = items;
    const fields = CATEGORY_FIELDS[category];

    const handleSelect = (side, item) => {
        setItems(prev => side === 'left' ? [item, prev[1]] : [prev[0], item]);
    };

    return (
        <div className="CompareView">

            <div className="SearchRow">
                <SearchSelect category={category} side="left" onSelect={(item) => handleSelect('left', item)}/>
                <SearchSelect category={category} side="right" onSelect={(item) => handleSelect('right', item)}/>
            </div>

            <TextCompare leftItem={left} rightItem={right} fields={fields.text}/>
            <MirroredBarChart leftItem={left} rightItem={right} fields={fields.numeric}/>
            {category !== 'films' && (
                <>
                    <div className="CompareChartsRow">
                        {category === 'planets' && <PlanetSizeCompare leftItem={left} rightItem={right}/>}
                        {category === 'people' && (
                            <HeightCompare leftItem={left} rightItem={right} field={{ key: 'height', label: 'Height', unit: 'cm' }}/>
                        )}
                        {category === 'starships' && (
                            <HeightCompare leftItem={left} rightItem={right} field={{ key: 'length', label: 'Length', unit: 'm' }}/>
                        )}
                        {category === 'vehicles' && (
                            <HeightCompare leftItem={left} rightItem={right} field={{ key: 'length', label: 'Length', unit: 'm' }}/>
                        )}
                        {category === 'species' && (
                            <HeightCompare leftItem={left} rightItem={right} field={{ key: 'average_height', label: 'Height', unit: 'cm' }}/>
                        )}
                        <ComparePie leftItem={left} rightItem={right} field={fields.pie}/>
                    </div>
                    <CompareRadar leftItem={left} rightItem={right} fields={fields.numeric}/>
                </>
            )}
        </div>
    );
}

export default CompareView;