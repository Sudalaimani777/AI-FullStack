// import { IoAddCircleOutline } from "react-icons/io5";

import { notesReducer } from "../reducers/NotesReducer";
import { useReducer } from "react";
import { NotesCard, NotesForm } from "../components";

const Home = () => {

  const initialState = {
    text: "",
    title: "",
    notes: []
  }

  const [{ text, title, notes }, notesDispatch] = useReducer(notesReducer, initialState);

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value
    })
  }

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value
    })
  }

  const handleAddNotes = (e) => {
    e.preventDefault();
    notesDispatch({
      type: "ADD_NOTE"
    })
  }
  // console.log(notes)

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-linear-to-br from-amber-50 via-orange-50 to-yellow-100 p-4 md:p-8">
      {/* Notes Form */}
      <NotesForm handleAddNotes={handleAddNotes} onTitleChange={onTitleChange} title={title} onTextChange={onTextChange} text={text} />
      {/*Notes Card */}
      <NotesCard notes={notes} />
    </section>
  )
}

export default Home
