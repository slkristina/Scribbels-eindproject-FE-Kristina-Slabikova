import React from "react";
import './Filter.css';

function Filter() {
    return (
        <div className="filter-container">
            <div className="filter-category">
                <label htmlFor="season-filter">
                    Seizoen
                </label>
                <select id="season-filter">
                    <option value="Algemeen">Algemeen</option>
                    <option value="Lente">Lente</option>
                    <option value="Zomer">Zomer</option>
                    <option value="Herfst">Herfst</option>
                    <option value="Winter">Winter</option>
                </select>
            </div>

            <div className="filter-category">
                <label htmlFor="surrounding-filter">
                    Omgeving
                </label>
                <select id="surrounding-filter">
                    <option value="Overig">Overig</option>
                    <option value="Zee">Zee</option>
                    <option value="Rivier">Rivier</option>
                    <option value="Bos">Bos</option>
                    <option value="Woestijn">Woestijn</option>
                    <option value="Huis en tuin">Huis en tuin</option>
                </select>
            </div>

        </div>
    )
}

export default Filter;