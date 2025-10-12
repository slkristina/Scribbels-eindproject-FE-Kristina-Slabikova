import React, {useState} from "react";
import './Contact.css';
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig.js";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [submitted, setSubmitted] = useState(false);

    async function addMessageToDb() {
        try {
            await addDoc(collection(db, "messages"), {
                name,
                subject,
                email,
                message,
                createdAt: new Date(),
            });
            setTimeout(() => handleReset(), 1000);
        } catch (err) {
            console.error(err.message);
        }
    }

    function handleReset() {
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!name || !subject || !email || !message) {
            alert("Vul alle velden in!");
            return;
        }
        await addMessageToDb()
        setSubmitted(true);
    }

    return (
        <main className="container">
            <h1>
                Heb je een vraag, opmerking of wil je iets leuks delen? Stuur ons gerust een bericht. Je krijgt
                altijd antwoord van ons.
            </h1>

            <form className="contact-container" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Naam (verplicht)
                        <input placeholder="Vul hier je naam in"
                               id="name"
                               type="text"
                               name="name"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               required
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="email">
                        E-mail (verplicht)
                        <input
                            id="email"
                            placeholder="Vul hier je e-mail adres in"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="subject">
                        Onderwerp (verplicht)
                        <input
                            id="subject"
                            placeholder="Vul hier het onderwerp van je bericht in"
                            type="subject"
                            name="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="message">
                        Jouw vraag, opmerking of iets wat je wilt delen: (verplicht)
                        <textarea
                            id="message"
                            placeholder="Wat wil je ons laten weten?"
                            name="message"
                            value={message}
                            rows="8"
                            onChange={(e) => setMessage(e.target.value)}
                            required/>
                    </label>
                </div>
                {submitted
                    ?
                    <p>Je bericht is verstuurd</p>
                    :
                    <div>
                        <button
                            type="submit">
                            Verstuur
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}>
                            Reset
                        </button>
                    </div>}
            </form>
        </main>
    )
}


export default Contact;

