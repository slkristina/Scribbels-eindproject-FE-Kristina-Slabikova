import React from "react";
import './Filter.css';

function Filter({
                    omgevingen,
                    selectedSeizoen,
                    selectedOmgeving,
                    onSeizoenChange,
                    onOmgevingChange,
                    }) {

    return (
        <section className="filter-container">
            <div className="filter-category">
                <label htmlFor="season-filter">
                    Seizoen
                </label>
                <select id="season-filter" value={selectedSeizoen} onChange={e => onSeizoenChange(e.target.value)}>
                    <option value="Algemeen">Alle seizoenen</option>
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
                <select id="surrounding-filter" value={selectedOmgeving} onChange={e => onOmgevingChange(e.target.value)}>
                    <option value="">Alle omgevingen</option>
                    {omgevingen && omgevingen
                        .map(omgeving => <option key={omgeving} value={omgeving}>{omgeving}</option>
                        )}
                </select>
            </div>

        </section>
    )
}

export default Filter;