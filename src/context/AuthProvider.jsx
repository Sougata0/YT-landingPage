import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // localStorage.clear()

    const [userData, setUserData] = useState()

    useEffect(()=>{
        setLocalStorage();

        const {creators} = getLocalStorage()
        setUserData({creators});
    },[])


    return(
        <AuthContext.Provider value={[userData]}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider