import { createContext } from "react";

const FeedbackContext = createContext();
console.log(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
    return (
        <FeedbackContext.Provider value={{a:"123"}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;