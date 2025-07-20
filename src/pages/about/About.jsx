import React from 'react';
import "./About.css";
import bulletPoint from '/assets/bullet-point.png';

function About() {
    return (
        <>
            <div className="container">
                <h2>Wat zijn Scribbels?</h2>

                <p>Scribbels zijn verrassende en vrolijke verhaaltjes over dieren die samen avonturen beleven.</p>

                    <ul className="bullet-points">
                        <li><img src={bulletPoint} alt="Bullet point"/>Voor kinderen vanaf drie jaar.</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Per verhaal 3-6 minuten (voor)lees-/luisterplezier.</li>
                    </ul>

                <h2>Wat willen we met Scribbels?</h2>

                <p id="about-quote">"Kinderen met verhalen spelenderwijs helpen (op)groeien."</p>

                    Via verhalen bouwen we aan de toekomst door bij te dragen aan:

                    <ul className="bullet-points">
                        <li><img src={bulletPoint} alt="Bullet point"/>Taalontwikkeling</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Creativiteit</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Aandacht en focus</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Emotionele groei</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Natuurkennis</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>En hopelijk worden ze enthousiast om zelf meer te gaan lezen!</li>
                    </ul>


                <h2>Wat maakt Scribbels bijzonder?</h2>

                    <ul className="bullet-points">
                        <li><img src={bulletPoint} alt="Bullet point"/>Korte, verrassende en leerzame dierenverhalen.</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Betekenisvolle thema's komen tot leven om vervolgens te bespreken, zoals: vriendschap,
                            jezelf
                            mogen zijn
                            of samenwerken.
                        </li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Goed te gebruiken in de klas of BSO.</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Stimuleert taal, fantasie en luistervaardigheid.</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Rustig voorleestempo en daarmee fijn voor kinderen die baat hebben bij weinig prikkels.</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Dierenvriendjes met herkenbare menselijke karakters.</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Direct en gratis beschikbaar via Spotify, YouTube of als e-book.</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Elke twee maanden een nieuw verhaal.</li>
                        <li><img src={bulletPoint} alt="Bullet point"/>Uitvoerig getest en verbeterd middels een expert-testpanel.</li>
                    </ul>
            </div>
        </>
    );
}

export default About;