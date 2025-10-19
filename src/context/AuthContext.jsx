import React, {createContext, useContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebaseConfig.js";

const AuthContext = createContext(undefined);

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
    }, []);

    //
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export  function handleLogout() {
    auth.signOut()
        .catch((error) => console.error(error))
}

// makes the AuthContext available in other components
export function useAuthValue() {
    return useContext(AuthContext);
}



