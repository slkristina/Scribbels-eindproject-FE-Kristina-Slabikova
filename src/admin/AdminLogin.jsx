import React, {useState} from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/admin/dashboard");
             } catch (err) {
            setError("Ongeldige inloggegevens");
        }
    };

    return (
        <div className="admin-login">
        <h2>Admin Login Page</h2>
            <form onSubmit={handleLogin}>
                <input
                type = "email"
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
                {error ? <p style = {{color: "red"}}>{error}</p> : null}
                <button type={"submit"}>Inloggen</button>
            </form>
        </div>
    );
}

export default AdminLogin;