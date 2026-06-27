import { IoAddCircleOutline } from "react-icons/io5";
import { notesReducer } from "../reducers/NotesReducer";
import { useReducer } from "react";

const Home = () => {

  const initialState = {
    text: "",
    title: "",
    notes: []
  }

  const [{ text, title, notes }, notesDispatch
   ] = useReducer(notesReducer, initialState);

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

console.log(notes)
return (
  <section className="min-h-[calc(100vh-5rem)] bg-linear-to-br from-amber-50 via-orange-50 to-yellow-100 p-4 md:p-8">
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
          Quick Note
        </p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Capture your ideas before they slip away
        </h1>
        <p className="max-w-xl text-sm text-slate-600 md:text-base">
          Jot down a title and your note content, then add it to your workspace.
        </p>
      </div>

      <form 
        className="rounded-4xl border border-amber-200/70 bg-white/90 p-5 shadow-[0_20px_60px_-25px_rgba(180,83,9,0.35)] backdrop-blur md:p-7"
        onSubmit={handleAddNotes}
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter title"
            className="w-full rounded-2xl border border-amber-100 bg-amber-50/60 px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
            onChange={onTitleChange}
          />

          <textarea
            placeholder="Enter your note"
            rows="8"
            className="w-full resize-none rounded-3xl border border-amber-100 bg-amber-50/60 px-4 py-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
            onChange={onTextChange}
          ></textarea>

          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-sm text-slate-500">
              Keep it short, clear, and easy to find later.
            </p>

            <button
              type="submit"
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-600 text-white shadow-lg shadow-amber-200 transition hover:scale-105 hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-200"
            >
              <IoAddCircleOutline className="text-3xl" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
)
}

export default Home
