import { createContext, useEffect, useState } from "react";
import { feedbackData } from "../../Data/feedbackData";

const FeedbackContext = createContext();
console.log(FeedbackContext);

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(feedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });


    
    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await fetch("https://6a0c38235aa893e1015b396b.mockapi.io/api/v1/review");
                const data = await response.json();
                const sortedData = data.reverse();
                setFeedback(sortedData);
            } catch (err) {
                console.log(err)
            }
        }

        fetchFeedback();
    }, []);

    const handleAddFeedback = async (newFeedback) => {
        // setFeedback(prevFeedback => [...prevFeedback, newFeedback]);
        try {
            const response = await fetch("https://6a0c38235aa893e1015b396b.mockapi.io/api/v1/review", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newFeedback)
            })
            const data = await response.json();
            setFeedback(prevFeedback => [...prevFeedback, data]);
        } catch (err) {
            console.log(err)
        }
    }

    const handleDeleteFeedback = async (id) => {
        try {
            const response = await fetch(`https://6a0c38235aa893e1015b396b.mockapi.io/api/v1/review/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            console.log(data);
            setFeedback(prevFeedback => prevFeedback.filter(item => item.id !== id));
        } catch (err) {
            console.log(err)
        }
    }

    const handleEditFeedback = item => {
        // console.log("Edit", item);
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    const handleUpdateFeedback = async (id, updatedItem) => {
        // console.log(updatedItem)
        // setFeedback(prevFeedback =>
        //     prevFeedback.map(item => item.id === id ? { ...item, ...updatedItem } : item)
        // );
        try {
            const response = await fetch(`https://6a0c38235aa893e1015b396b.mockapi.io/api/v1/review/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedItem)
            })
            const data = await response.json();
            setFeedback(prevFeedback => prevFeedback.map(item => item.id === id ? { ...item, ...data } : item));
        } catch (err) {
            console.log(err)
        }
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