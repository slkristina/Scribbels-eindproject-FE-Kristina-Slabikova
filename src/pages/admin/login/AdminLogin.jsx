import React, {useEffect, useState} from "react";
import {auth} from "../../../firebase/firebaseconfig.js";
import {sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useAuthValue} from "../../../context/AuthContext.jsx";
import "./AdminLogin.css";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {currentUser, setTimeActive} = useAuthValue();

    useEffect(() => {
        console.log(currentUser)
        if (currentUser) {
            navigate("/admin")
        }
    }, []);


    const login = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                if (!auth.currentUser.emailVerified) {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            setTimeActive(true)
                            navigate('/verify-email')
                        })
                        .catch(err => alert(err.message))
                } else {
                    navigate('/admin')
                }
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
                    <label>
                        E-mailadres:
                    </label>
                    <input
                        type="email"
                        placeholder="E-mailadres"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>
                        Password:
                    </label>
                    <input
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