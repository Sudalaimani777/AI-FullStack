import { createContext, useState, useEffect } from "react";


const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        console.log("Clicked")
        setToggle(prevToggle => !prevToggle);
    }

    useEffect(() => {

    }, [toggle])

    return(
        <ThemeContext.Provider value={{toggle,handleToggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;