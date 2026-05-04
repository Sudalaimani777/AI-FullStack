import FeedbackItem from "./Components/FeedbackItem";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackContext from "./Context/FeedbackContext.jsx";

import { feedbackData } from "../Data/feedbackData.js";
import { useState } from "react";
import FeedbackForm from "./Components/FeedbackForm.jsx";

function App() {

  const [feedback, setFeedback] = useState(feedbackData);

  const handleDelete = id => {
    const remainingData = feedback.filter(item => item.id !== id);
    setFeedback(remainingData);
  }

  console.log(feedback)

  const handleEdit = id => {
    console.log("Edit", id);
  }

  const handleAddFeedback = (feedback) => {
    setFeedback(prevFeedback => [...prevFeedback, feedback]);
    // console.log(feedback);
  }

  return (
    <>
      <Header />
      <section className="container">
        <FeedbackForm handleAddFeedback={handleAddFeedback} handleEdit={handleEdit} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </section>
    </>
  )
}
export default App