import FeedbackItem from "./component/FeedbackItem";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList.jsx";

import { feedbackData } from "../Data/feedbackData.js";
import { useState } from "react";
import FeedbackForm from "./component/FeedbackForm.jsx";

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