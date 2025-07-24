import Carousel from "../../components/Carousel/Carousel.jsx";
import Filter from "../../components/Filter/Filter.jsx";

function AdventuresPage() {

    return (
        <>
            <div className="container">
                <h2>
                    Je kunt onze verhaaltjes (voor)lezen en beluisteren op YouTube en Spotify. Of download de e-book van
                    het verhaaltje.
                </h2>
                <Filter />
                <Carousel />
            </div>
        </>
    )
}

export default AdventuresPage;