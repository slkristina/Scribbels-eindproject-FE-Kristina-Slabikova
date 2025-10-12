import React, {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../../firebase/firebaseconfig.js";
import "./AdminRegistration.css";
import {useNavigate} from "react-router-dom";

function AdminRegistration() {
    console.log("register called");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [successfullyRegistered] = useState("");

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                isValid = false
                setError('Wachtwoorden komen niet overeen')
            }
        }
        return isValid
    }

    async function register(e) {
        e.preventDefault();
        console.log("Form submitted!");
        setError((''));
        if (validatePassword()) {
            console.log("password validation has been passed");
            try {
            await createUserWithEmailAndPassword(auth, email, password)
                navigate("/admin")
            } catch (err) {
                setError(error.message);
            }
        }
        handleReset();
    }


    function handleReset() {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <main className="container">
            <section className="admin-registration-form">
                <h2>Admin Registratie</h2>
                <form onSubmit={register} name='registration-form'>
                    <label htmlFor="email">
                        E-mailadres:
                    </label>
                    <input
                        type="email"
                        placeholder="E-mailadres"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        placeholder="Wachtwoord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="confirmPassword">
                        Bevestig Wachtwoord:
                    </label>
                    <input
                        type="password"
                        placeholder="Bevestig Wachtwoord"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    {successfullyRegistered && <p className="success-message">{successfullyRegistered}</p>}
                    <button type={"submit"} onClick={() => console.log("Register button clicked!")}>Registreren</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </form>
            </section>
        </main>
    );
}


export default AdminRegistration;