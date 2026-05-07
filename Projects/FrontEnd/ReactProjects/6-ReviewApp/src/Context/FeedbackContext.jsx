import { createContext, useState } from "react";
import { feedbackData } from "../../Data/feedbackData";

const FeedbackContext = createContext();
console.log(FeedbackContext);

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(feedbackData);

    const handleAddFeedback = (newFeedback) => setFeedback(prevFeedback => [...prevFeedback, newFeedback]);

    const handleDeleteFeedback = id => {
        const remainingFeedback = feedback.filter(item => item.id !== id);
        setFeedback(remainingFeedback);
    }

    const handleEditFeedback = id => {
        console.log("Edit", id);
    }

    return (
        <FeedbackContext.Provider value={{feedback, handleAddFeedback, handleDeleteFeedback, handleEditFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;