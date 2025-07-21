import React, {useState} from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import {useNavigate} from "react-router-dom";

function AdminRegistration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [successfullyRegistered, setSuccessfullyRegistered] = useState("");

    const handleRegistration = async (e) => {
        e.preventDefault();
        setError("");

        const auth = getAuth();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const errorMessage = error.message;
            const errorCode = error.code;

            setSuccessfullyRegistered("Registration is successful");
        } catch (error) {
            setError("Registration failed");
        }
    };

    function handleReset() {
        setEmail("");
        setPassword("");
    }

    return (
        <div className="container">
            <div className="admin-registration-form">
                <h2>Admin Registratie</h2>
                <form onSubmit={handleRegistration}>
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
                    {error && <p style={{color: "red"}}>{error}</p>}
                    {successfullyRegistered && <p style={{color: "green"}}>{successfullyRegistered}</p>}
                    <button type={"submit"}>Registreren</button>
                    <button onClick={handleReset}>Reset</button>
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