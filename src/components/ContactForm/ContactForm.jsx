import React, {useState} from "react";


function ContactForm() {
    return (
        <form>
            <div>
                <label>
                    Naam
                    <input type="text" name="name" required/>
                </label>
            </div>

            <div>
                <label>
                    E-mail
                    <input type="email" name="email" required/>
                </label>
            </div>

            <div>
                <label>
                    Jouw vraag, opmerking of iets wat je wilt delen
                    <textarea name="message" rows="4" required></textarea>
                    <input type="submit"/>
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

