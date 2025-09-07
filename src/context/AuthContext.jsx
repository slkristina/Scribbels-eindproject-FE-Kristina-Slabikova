import React, {createContext, useContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebaseconfig.js";

const AuthContext = createContext(undefined);

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const stayLoggedOut = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return stayLoggedOut;
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(AuthContext);
}



