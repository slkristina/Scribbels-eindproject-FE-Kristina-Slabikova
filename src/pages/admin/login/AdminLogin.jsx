import React, {useEffect, useState} from "react";
import {auth} from "../../../firebase/firebaseconfig.js";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useAuthValue} from "../../../context/AuthContext.jsx";
import "./AdminLogin.css";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {currentUser} = useAuthValue();

    useEffect(() => {
        if (currentUser) {
            navigate("/admin")
        }
    }, [currentUser, navigate]);


    const login = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/admin');
            })
            .catch(err => setError(err.message))
    }

    function handleReset() {
        setEmail("");
        setPassword("");
    }


    return (
        <div className="container">
            <div className="admin-login">
                <h2>Login Page</h2>
                <form onSubmit={login} name='login_form'>
                    <label htmlFor="email">
                        E-mailadres:
                    </label>
                    <input
                        id="e-mail"
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
                        id="password"
                        type="password"
                        placeholder="Wachtwoord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error ? <p className="error-message">{error}</p> : null}
                    <div className="buttons">
                        <button type={"submit"}>Inloggen</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;