import { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleIsLoggedIn = () => setIsLoggedIn(prev => !prev);

    return(
        <AuthContext.Provider value={{ isLoggedIn, handleIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;