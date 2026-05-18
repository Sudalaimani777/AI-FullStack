import { createContext, useState } from "react";
import { feedbackData } from "../../Data/feedbackData";

const FeedbackContext = createContext();
console.log(FeedbackContext);

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(feedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const handleAddFeedback = (newFeedback) => setFeedback(prevFeedback => [...prevFeedback, newFeedback]);

    const handleDeleteFeedback = id => {
        setFeedback(prevFeedback => prevFeedback.filter(item => item.id !== id));
    }

    const handleEditFeedback = item => {
        // console.log("Edit", item);
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    const handleUpdateFeedback = (id, updatedItem) => {
        console.log(updatedItem)
        setFeedback(prevFeedback =>
            prevFeedback.map(item => item.id === id ? { ...item, ...updatedItem } : item)
        );
    }

    const handleClearEdit = () => {
        setFeedbackEdit({ item: {}, edit: false });
    }

    return (
        <FeedbackContext.Provider value={{ feedback, handleAddFeedback, handleDeleteFeedback, handleEditFeedback, handleUpdateFeedback, handleClearEdit, feedbackEdit }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;