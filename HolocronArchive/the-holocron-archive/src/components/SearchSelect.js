import { useState, useEffect } from "react";
import "../App.css";
import { searchCategory } from "../services/SWAPI";

function SearchSelect({ category, side, onSelect }) {
    const [query, setQuery] = useState('');
    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        searchCategory(category, '').then(data => {
            setAllItems(data);
            setLoading(false);
        });
    }, [category]);

    const filtered = query.trim()
        ? allItems.filter(item =>
            (item.name || item.title).toLowerCase().includes(query.toLowerCase())
          )
        : [];

    const handleSelect = (item) => {
        onSelect(item);
        setQuery('');
    };

    return (
        <div className={`SearchSelect ${side}`}>
            <div className="SearchInputRow">
                <input
                    className="SearchInput"
                    type="text"
                    placeholder={loading ? `loading ${category}...` : `search ${category}...`}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    disabled={loading}
                />
            </div>
            {filtered.length > 0 && (
                <div className="SearchResults">
                    {filtered.map((item, i) => (
                        <div className="SearchResultItem" key={i} onClick={() => handleSelect(item)}>
                            {item.name || item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchSelect;