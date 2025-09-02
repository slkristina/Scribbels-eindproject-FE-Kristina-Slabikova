import React, {useState} from "react";
import './Contact.css';
import Messages from "../../components/Messages/Messages.jsx";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleReset() {
        setName("");
        setEmail("");
        setMessage("");
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!name || !email || !message) {
            alert("Vul alle velden in!");
            return;
        }

        setSubmitted(true);
    }

    return (
        <div className="container">
            <h2>
                Heb je een vraag, opmerking of wil je iets leuks delen? Stuur ons gerust een bericht. Je krijgt
                altijd antwoord van ons.
            </h2>

            <form className="contact-container" onSubmit={handleSubmit}>
                <div>
                    <label>
                        Naam (verplicht)
                        <input placeholder="Jouw naam"
                               type="text"
                               name="name"
                               onChange={(e) => setName(e.target.value)}
                               required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        E-mail (verplicht)
                        <input
                            placeholder="Jouw e-mail"
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Jouw vraag, opmerking of iets wat je wilt delen: (verplicht)
                        <textarea
                            placeholder="Voer hier uw tekst in"
                            name="message"
                            rows="8"
                            onChange={(e) => setMessage(e.target.value)}
                            required/>
                    </label>
                </div>
                <div>
                    <button
                        type="submit">
                        Verstuur
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </form>

            {submitted && (
                <Messages
                    name={name}
                    email={email}
                    message={message}
                />
            )}
        </div>
    )
}


export default Contact;

