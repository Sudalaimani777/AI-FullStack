import FeedbackItem from "./Components/FeedbackItem";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackContext from "./Context/FeedbackContext.jsx";
import ThemeContext from "./Context/ThemeContext.jsx";
import FeedbackForm from "./Components/FeedbackForm.jsx"; 
import FeedbackLength from "./Components/FeedbackLength.jsx";


import { useContext } from "react";

function App() {

  const { toggle } = useContext(ThemeContext);

  return (
    <div className={`app ${toggle ? "light" : "dark"}`}>
      <Header />
      <section className="container">
        <FeedbackForm />
        <FeedbackLength />
        <FeedbackList />
      </section>
    </div>
  )
}
export default App