import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../Slice/todoSlice";

const TodoForm = () => {

    const dispatch = useDispatch();

    const [task, setTask] = useState("");

    const handleTaskChange = (e) => {
        let task = e.target.value.trimStart();
        setTask(task)
    }

    const handleAddTask =() => {
        const taskDetails = {
            taskId : new Date().getTime(),
            taskData:task
        }
        dispatch(addTask(taskDetails))
        setTask("");
    }

  return (
    <>
        <section className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm shadow-slate-200/50 sm:p-6">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Todo List </h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                    type="text"
                    placeholder="Enter Your Task"
                    value={task}
                    onChange={handleTaskChange}
                    className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm shadow-slate-200/40 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/15 sm:h-12 sm:text-base"
                />
                <button
                    onClick={handleAddTask}
                    className="h-11 rounded-2xl bg-slate-900 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-slate-900/25 transition hover:-translate-y-0.5 hover:bg-slate-800 active:translate-y-0 sm:h-12"
                >
                    Add Task
                </button>
            </div>
        </section>
    </>
  )
}

export default TodoForm