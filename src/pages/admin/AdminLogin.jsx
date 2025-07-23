import React, {useState} from "react";
import {auth} from "../../firebase/FirebaseConfig.js";
import {sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useAuthValue} from "./AuthContext.jsx";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {setTimeActive} = useAuthValue();

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
                    navigate('/')
                }
            })
            .catch(err => setError(err.message))
    }

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await signInWithEmailAndPassword(auth, email, password);
    //         navigate("/admin/dashboard");
    //     } catch (err) {
    //         setError("Ongeldige inloggegevens");
    //     }
    // };

    function handleReset() {
        setEmail("");
        setPassword("");
    }

    const {currentUser} = useAuthValue();
    console.log(currentUser);

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
                    //TO DO: remove inline styling from below
                    {error ? <p style={{color: "red"}}>{error}</p> : null}
                    <button type={"submit"}>Inloggen</button>
                    <button onClick={handleReset}>Reset</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;