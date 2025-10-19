import React, {useEffect, useState} from 'react';
import './AdventureManager.css'
import AdventureCard from "../../AdventureCard/AdventureCard.jsx";
import fetchAdventures from "../../../util/fetchers.jsx";

function AdventureManager() {
    const [adventureData, setAdventureData] = useState([]);


    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const data = await fetchAdventures();
                if(!cancelled) setAdventureData(data);
            } catch (err) {
                console.error(err)
            }
        }
        load();
        return () => {
            cancelled = true;
        }
    }, []);

    return (
        <>
            {adventureData ?
                adventureData.map((adventure) => {
                    return (
                        <AdventureCard
                            adventure={adventure}
                            setAdventureData={setAdventureData}
                            adventureData={adventureData}
                        />
                    )
                })
                :
                <p>Er zijn geen avonturen gevonden in de database</p>}
        </>

    );
}

export default AdventureManager;