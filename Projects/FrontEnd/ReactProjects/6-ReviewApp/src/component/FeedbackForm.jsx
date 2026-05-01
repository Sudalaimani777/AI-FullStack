import React, { useState } from 'react'
import Card from './SharedComponent/Card'
import Button from './SharedComponent/Button'
import {v4 as uuidv4} from "uuid";

const FeedbackForm = ({setFeedback}) => {

    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const handleText = (e) => {
        let trimmedText = e.target.value.trimStart();

        if(trimmedText.length < 10){
            setMessage("Feedback must be at least 10 characters");
            setBtnDisabled(true);
        }else{
            setMessage("");
            setBtnDisabled(false);
        }
        setText(trimmedText);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFeedback(prevFeed => [...prevFeed, {id: uuidv4(), rating: Math.floor(Math.random() * 10) + 1, text}]);
        setText("");
        setBtnDisabled(true);
        setMessage("");
    }

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