import React, {useState} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom";

function AdminRegistration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [succsessfullyRegistred, setSuccsessfullyRegistred] = useState("");

    const handleRegistration = async (e) => {
        e.preventDefault();
        setError("");
        setSuccsessfullyRegistred("");

        const auth = getAuth();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const errorMessage = error.message;
            const errorCode = error.code;

            setSuccsessfullyRegistred("Registration is successful");
        } catch (error) {
            setError("Registration failed");
        }
    };

    return (
        <div className="container">
            <div className="admin-registration-form">
                <h2>Admin Registratie</h2>
                <form onSubmit={handleRegistration}>
                    <input
                        type="email"
                        placeholder="E-mailadres"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Wachtwoord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p style={{color: "red"}}>{error}</p>}
                    {succsesfullyRegistred && <p style={{color: "green"}}>{succsesfullyRegistred}</p>}
                    <button type={"submit"}>Registreren</button>
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