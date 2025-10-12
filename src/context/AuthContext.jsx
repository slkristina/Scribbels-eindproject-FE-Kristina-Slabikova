import React, {createContext, useContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebaseConfig.js";

const AuthContext = createContext(undefined);

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    // runs on start component to check if there is a logged in user and sets the currentUser in the authvalue to use in other components;
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
// handles logOut by firebase function, export so i can use it in other components
export  function handleLogout() {
    auth.signOut()
        .catch((error) => console.error(error))
}

// makes the AuthContext available in other components
export function useAuthValue() {
    return useContext(AuthContext);
}



