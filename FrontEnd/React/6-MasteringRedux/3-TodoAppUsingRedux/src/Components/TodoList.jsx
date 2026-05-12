import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { removeTask, removeAllTask } from "../Slice/todoSlice";


const TodoList = () => {

    const task = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handelDelete = (id) => {
        dispatch(removeTask(id))
    }   
    
    const handleRemoveAllTask = () => {
        dispatch(removeAllTask());
    }


  return (
    <>
        <section className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm shadow-slate-200/50 sm:p-6">
            {task.length > 0 ? (
                <h4 className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    <span>Tasks</span>
                    <button
                        onClick={handleRemoveAllTask}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-600 transition hover:border-slate-300 hover:bg-slate-100"
                    >
                        Clear All Tasks
                    </button>
                </h4>
            ) : null}
            <ul className="mt-4 space-y-3">
                {task?.map((taskItem, index) => (
                    <li
                        key={taskItem.taskId}
                        className="fade-up flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-200/40"
                        style={{ animationDelay: `${index * 45}ms` }}
                    >
                        <span className="text-sm font-medium text-slate-700 sm:text-base">
                            {taskItem.taskData}
                        </span>
                        <button
                            onClick={() => handelDelete(taskItem.taskId)}
                            className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 transition hover:bg-rose-100"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    </>
  )
}

export default TodoList