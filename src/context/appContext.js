import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [appState, setAppState] = useState('empty')

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if(user) {
                setAppState('home')
                setCurrentUser(user)
                console.log(user)
            }
            else {
                setCurrentUser(null)
                setAppState('login')
            }
        })
    },[])

    const value = {appState,currentUser}
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
