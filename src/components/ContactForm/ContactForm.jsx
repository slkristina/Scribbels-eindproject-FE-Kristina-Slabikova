import React from "react";
import './ContactForm.css';

function ContactForm() {

    return (
        <form className="contact-container">
            <div>
                <label>
                    Naam
                    <input placeholder="Jouw naam" type="text" name="name" required/>
                </label>
            </div>

            <div>
                <label>
                    E-mail
                    <input placeholder="Jouw e-mail" type="email" name="email" required/>
                </label>
            </div>

            <div>
                <label>
                    Jouw vraag, opmerking of iets wat je wilt delen:
                    <textarea  placeholder="Voer hier uw tekst in" name="message" rows="8" required></textarea>
                </label>
            </div>

            <div>
            <button type="submit">
                Verstuur
            </button>
            </div>
        </form>
    );
}

export default ContactForm;

