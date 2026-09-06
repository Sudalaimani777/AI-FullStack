import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackForm from "./Components/FeedbackForm.jsx";
import FeedbackLength from "./Components/FeedbackLength.jsx";
import ThemeContext from "./Context/ThemeContext.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {
  const { toggle } = useContext(ThemeContext);

  return (
    <div className={`app ${toggle ? "light" : "dark"}`}>
      <Header />
      <section className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackLength />
                <FeedbackList />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;