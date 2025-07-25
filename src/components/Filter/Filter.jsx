import React from "react";
import './Filter.css';

function Filter({omgevingen}){
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
                    {omgevingen && omgevingen
                        .map(omgeving => <option value={omgeving}>{omgeving}</option>
                        )}
                </select>
            </div>

        </div>
    )
}

export default Filter;