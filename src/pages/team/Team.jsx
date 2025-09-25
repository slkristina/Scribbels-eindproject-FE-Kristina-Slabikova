import fotoAstrid from '/assets/Foto-Astrid.jpg';
import fotoMartien from '/assets/Foto-Martien.jpg';
import fotoRoxanne from '/assets/Foto-Roxanne.jpg';
import './Team.css';

function Team() {
    return (
        <main className="container">
            <h1>
                Ontmoet de gepassioneerde makers achter de verhalen
            </h1>

            <section className="team-container">
                <article className="team-member">
                    <img src={fotoMartien} alt="Martien photo"/>
                    <h3>
                        Martien Vosters
                    </h3>
                    <h4>
                        verhalenverteller met hart voor kindertaal
                    </h4>
                    <p>
                        Mijn hele leven schrijf ik al verhalen, gewoon voor mezelf. Het liefst op een mooie
                        zomeravond in mijn fijne tuin. Kater Sparrow in de buurt en kikkergekwaak op de achtergrond.
                        Een mooie hobby die me ontspanning geeft. Maar diep vanbinnen had ik altijd de droom om ze te
                        delen
                        met de wereld. En dan die dag dat Roxanne me vroeg om samen dierenverhaaltjes voor kinderen te
                        schrijven én te
                        publiceren, wist ik: dit is mijn kans. Zo werd Scribbels geboren.
                    </p>
                </article>

                <article className="team-member">
                    <img src={fotoAstrid} alt="Astrid photo"/>
                    <h3>
                        Astrid Butijn
                    </h3>
                    <h4>
                        illustrator die dieren tot leven brengt
                    </h4>
                    <p>
                        Mijn hele leven teken en schilder ik al graag en veel. Tot een paar jaar geleden was het enkel
                        een
                        hobby
                        en ik deed het voor mezelf.
                        Echter, de afgelopen jaren vroegen mensen of ik een tekening, schilderij of geboortekaartje voor
                        ze
                        wilde maken. Ik kreeg meer opdrachten, eerst klein, maar al snel kwamen er grotere projecten
                        bij.
                        Toen ik via een vriendin kennis maakte met het Scribbelsteam Roxanne en Martien, was dat de
                        start
                        van
                        een nieuw en fantastisch leuk project!
                        De verhaaltjes van mooie illustraties voorzien en daarmee tot leven te wekken en met iedereen te
                        delen
                        is iets wat ik heel graag doe.
                        Ik hou ervan hoe mijn tekeningen de tekst aanvullen en het verhaal verdiepen. Het mooiste van
                        dit
                        vak is
                        dat ik kinderen kan inspireren, hun verbeelding kan stimuleren en hen op een speelse manier kan
                        leren
                        over de wereld om hen heen.
                    </p>
                </article>

                <article className="team-member">
                    <img src={fotoRoxanne} alt="Roxanne photo"/>
                    <h3>
                        Roxanne Robijns
                    </h3>
                    <h4>
                        stemacteur die warmte brengt in elk woord
                    </h4>
                    <p>Met veel plezier werk ik als co-auteur, stemacteur en video-editor voor
                        Scribbels Dierenverhaaltjes.
                        Als woordkunstenaar, leefstijlcoach en creatieve ondernemer heb ik altijd een passie gehad voor
                        de
                        kracht van woorden en ontwikkeling van mensen.
                        De magie van verhalen ontdekte ik als kind, tijdens het verdwalen in een mooie film, een
                        zelfbedacht
                        verhaal van mijn vader of een boek van de juf.
                        Thuis probeerde ik dat na te doen bij mijn knuffels – met voorlezen én de klas inkijken. Dat
                        laatste
                        lukte dan nooit.
                        Met Scribbels kan ik mijn creativiteit volop kwijt! Ik wil kinderen verwonderen en meenemen in
                        avonturen
                        die niet alleen leuk zijn, maar ook iets meegeven zoals: vriendschap, authenticiteit, respect en
                        elkaar
                        helpen.
                        Dankzij ons geweldig klankbord van kleuterjuffen, kinderpedagogen en logopedisten zorgen we voor
                        kwaliteit én plezier.
                        ‘Een team dat begrijpt hoe kinderen leren, luisteren en verliefd worden op verhalen.’
                    </p>
                </article>
            </section>
        </main>
    )
}

export default Team;