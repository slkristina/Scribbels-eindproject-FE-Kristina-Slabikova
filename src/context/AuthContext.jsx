import React, {createContext, useContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/FirebaseConfig.js";

const AuthContext = createContext(undefined);

export function AuthProvider({children, value}) {
    const [timeActive, setTimeActive] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                setCurrentUser(user)
            })
        }, [setCurrentUser]);


    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser, timeActive, setTimeActive}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(AuthContext);
}