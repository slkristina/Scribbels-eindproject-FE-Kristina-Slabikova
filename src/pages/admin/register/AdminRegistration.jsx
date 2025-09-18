import React, {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../../firebase/firebaseconfig.js";
import "./AdminRegistration.css";
import {useNavigate} from "react-router-dom";
import {useAuthValue} from "../../../context/AuthContext.jsx";

function AdminRegistration() {
    console.log("register called");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {setTimeActive} = useAuthValue();
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

    const register = e => {
        e.preventDefault();
        console.log("Form submitted!");
        setError((''));

        if (validatePassword()) {
            console.log("password validation has been passed");
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => navigate("/admin"))
                .catch((error => {
                    setError(error.message);
                }));
        }
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    // const handleRegistration = async (e) => {
    //     e.preventDefault();
    //     setError("");

    //     const auth = getAuth();

    //     try {
    //         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //         const user = userCredential.user;
    //         const errorMessage = error.message;
    //         const errorCode = error.code;
    //
    //         setSuccessfullyRegistered("Registration is successful");
    //     } catch (error) {
    //         setError("Registration failed");
    //     }
    // };


    function handleReset() {
        setEmail("");
        setPassword("");
    }

    return (
        <div className="container">
            <div className="admin-registration-form">
                <h2>Admin Registratie</h2>
                <form onSubmit={register} name='registration-form'>
                    <p>
                        E-mailadres:
                    </p>
                    <input
                        type="email"
                        placeholder="E-mailadres"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <p>
                        Password:
                    </p>
                    <input
                        type="password"
                        placeholder="Wachtwoord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <p>
                        Bevestig Wachtwoord:
                    </p>
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
            </div>
        </div>
    );
}

// Firebase template:
// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) =>{
//     //Signed up
//     const user = userCredential.user;
//     //...
//     })
//     .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     //...
//         });


export default AdminRegistration;