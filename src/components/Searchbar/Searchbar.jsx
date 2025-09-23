import './Searchbar.css';
import React from "react";

function Searchbar({searchWord, onSearchChange, onSearchSubmit}) {

    function handleEnterSearch(event) {
        if (event.key === 'Enter') {
            onSearchSubmit();
        }
    }


    return (
        <section
            className="searchbar-container"
            onSubmit={(e) => {
                e.preventDefault();
                onSearchSubmit();
            }}
        >
            <input
                id="searchbar-input"
                type="text"
                value={searchWord}
                placeholder="Zoek een verhaal op titel"
                className="searchbar-input"
                onChange={(e) => onSearchChange(e.target.value)}
                           />
        </section>
    )
}

export default Searchbar;