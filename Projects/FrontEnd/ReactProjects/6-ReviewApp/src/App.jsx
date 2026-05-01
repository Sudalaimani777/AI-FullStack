import FeedbackItem from "./component/FeedbackItem";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList.jsx";

import { feedbackData } from "../Data/feedbackData.js";
import { useState } from "react";
import FeedbackForm from "./component/FeedbackForm.jsx";

function App() {

  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <>
      <Header />
      <section className="container">
        <FeedbackForm setFeedback={setFeedback} feedback={feedback} />
        <FeedbackList feedback={feedback} setFeedback={setFeedback}/>
      </section>
    </>
  )
}
export default App