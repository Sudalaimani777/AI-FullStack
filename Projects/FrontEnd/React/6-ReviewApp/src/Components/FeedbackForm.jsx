import React, { useContext, useEffect, useState } from 'react'
import Card from './SharedComponent/Card'
import Button from './SharedComponent/Button'
import { v4 as uuidv4 } from "uuid";
import FeedbackContext from '../Context/FeedbackContext';

const FeedbackForm = () => {

    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const { handleAddFeedback, feedbackEdit, handleUpdateFeedback, handleClearEdit } = useContext(FeedbackContext);

    //Handle text change :-
    const handleText = (e) => {
        let trimmedText = e.target.value.trimStart();

        if (trimmedText.length < 10) {
            setMessage("Feedback must be at least 10 characters");
            setBtnDisabled(true);
        } else {
            setMessage("");
            setBtnDisabled(false);
        }
        setText(trimmedText);
    }

    //Handle form submit :-
    const handleSubmit = (e) => {
        e.preventDefault();

        if (feedbackEdit.edit === true) {
            handleUpdateFeedback(feedbackEdit.item.id, {
                ...feedbackEdit.item,
                text,
            });
            handleClearEdit();
            setText("");
            setBtnDisabled(true);
            setMessage("");
        } else {
            const feedbackData = {
                id: uuidv4(),
                rating: Math.floor(Math.random() * 10) + 1,
                text,
            };
            handleAddFeedback(feedbackData);
            setText("");
            setBtnDisabled(true);
            setMessage("");
        }
    }

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setText(feedbackEdit.item.text);
            setBtnDisabled(false);
            setMessage("");
        }
    }, [feedbackEdit])


    return (
        <>
            <Card>
                <h3>Add your feedback</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Enter your feedback..."
                            onChange={handleText}
                            value={text}
                        />
                        <Button version={"primary"} type={"submit"} isDisabled={btnDisabled} >Send</Button>
                    </div>
                    {message && <div className="message">{message}</div>}
                </form>
            </Card>
        </>
    )
}

export default FeedbackForm