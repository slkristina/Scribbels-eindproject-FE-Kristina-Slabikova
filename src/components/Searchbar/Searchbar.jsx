import './Searchbar.css';
import React from "react";

function Searchbar({searchWord, onSearchChange, onSearchSubmit }) {

    function handleEnterSearch(event) {
        if (event.key !== 'Enter') {
            return;
        }
        onSearchSubmit();
    }

    return (
        <div className="searchbar-container">
            <input
                id="searchbar-input"
                type="text"
                value={searchWord}
                placeholder="Zoek een verhaal"
                className="searchbar-input"
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleEnterSearch}
            />
        </div>
    )
}

export default Searchbar;