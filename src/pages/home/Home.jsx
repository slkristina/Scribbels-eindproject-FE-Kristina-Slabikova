import "./Home.css";
import heroImage from '/assets/Scribbels-hero.png';

function Home() {
    return (
        <div className="homepage-container">
            <div className="hero-image">
                <img src={heroImage} alt="Scribbels Homepage Picture"/>
            </div>
            <div className="hero-text">
                <h1 className="header">Welkom bij Scribbels Dierenverhaaltjes</h1>
                <h2>
                    De magie van verhalen voor jonge ontdekkers
                </h2>
                <p>
                    Superleuk dat je ons hebt gevonden. Stap binnen in de betoverende wereld van Scribbels
                    Dierenverhaaltjes.
                    Hier reizen kinderen mee op spannende mini-avonturen met dierenvriendjes van wie ze belangrijke
                    lessen
                    leren.
                    Sinds januari 2024 brengen we deze dierenverhaaltjes uit op YouTube en Spotify. Daar steken we met
                    veel
                    enthousiasme en plezier onze tijd en energie in.
                </p>
                <button className="btn">
                    Ga direct naar de verhaaltjes
                </button>
            </div>
        </div>
    );
}

export default Home;