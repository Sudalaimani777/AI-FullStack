import { useState } from "react";
import { v4 as uuid } from "uuid";
 
const todayLabel = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
}).format(new Date());

function App() {
  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState([]);

  const handleAddTask = e => {
    e.preventDefault();
    if (!task.trim()) return;
    setAllTask([...allTask, { id: uuid(), task: task.trim(), isCompleted: false }]);
    setTask("");
  };

  const handleInput = e => {
    setTask(e.target.value);
  };

  const handleRemoveTask = id => {
    const remainigTask = allTask.filter(item => item.id !== id);
    setAllTask(remainigTask);
  };

  const handleTaskStatus = id => {
    const ramainingTasks = allTask.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setAllTask(ramainingTasks);
  };

  const completedCount = allTask.filter(item => item.isCompleted).length;
  const activeCount = allTask.length - completedCount;
  const completionRate = allTask.length
    ? Math.round((completedCount / allTask.length) * 100)
    : 0;

  return (
    <main className="relative overflow-hidden px-4 py-5 sm:px-6 lg:px-10">
      <div className="mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(155deg,rgba(247,239,228,0.97),rgba(234,217,195,0.9))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <div className="absolute -right-12 top-8 h-40 w-40 rounded-full bg-wine/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-52 w-52 translate-y-1/3 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative flex h-full flex-col">
            <header className="flex flex-wrap items-start justify-between gap-6 border-b border-ink/10 pb-8">
              <div className="max-w-2xl">
                <p className="mb-3 inline-flex rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-ink/70 sm:text-xs">
                  Daily planner
                </p>
                <h1 className="font-display text-5xl font-semibold leading-none tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
                  Plan the day. Finish the list.
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-6 text-ink/70 sm:text-base">
                  A polished Todo workspace with clear priorities, fast capture, and enough visual contrast to keep your next task obvious.
                </p>
              </div>

              <div className="min-w-56 rounded-[1.75rem] border border-ink/10 bg-[#fff8ef]/80 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-ink/45">Today</p>
                <p className="mt-3 font-display text-3xl leading-none tracking-[-0.04em] text-wine">
                  {todayLabel}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                  <div className="rounded-2xl bg-ink px-4 py-3 text-paper">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-paper/60">Live</p>
                    <p className="mt-2 text-3xl font-semibold">{activeCount}</p>
                  </div>
                  <div className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-ink/45">Done</p>
                    <p className="mt-2 text-3xl font-semibold text-clay">{completedCount}</p>
                  </div>
                </div>
              </div>
            </header>

            <section className="mt-8">
              <form onSubmit={handleAddTask} className="grid gap-3 rounded-[2rem] border border-ink/10 bg-white/65 p-3 shadow-[0_18px_50px_rgba(111,47,43,0.08)] backdrop-blur sm:grid-cols-[1fr_auto]">
                <label htmlFor="task" className="sr-only">
                  Add task
                </label>
                <input
                  type="text"
                  name="task"
                  id="task"
                  onChange={handleInput}
                  value={task}
                  required
                  placeholder="Add a task for today..."
                  className="w-full rounded-[1.35rem] border border-transparent bg-transparent px-5 py-4 text-base text-ink outline-none placeholder:text-ink/35 focus:border-ink/15 focus:bg-white/50"
                />
                <button
                  type="submit"
                  className="rounded-[1.35rem] bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-paper transition hover:-translate-y-0.5 hover:bg-wine"
                >
                  Add Task
                </button>
              </form>
            </section>

            <div className="mt-8 flex items-center gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-ink/45">Queue</p>
                <p className="mt-2 text-sm text-ink/70">
                  {allTask.length === 0
                    ? "No tasks yet. Add your first task to get started."
                    : `${allTask.length} task${allTask.length > 1 ? "s" : ""} in your list.`}
                </p>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-ink/10 to-transparent" />
            </div>

            <section className="mt-6 grid gap-4">
              {allTask.length > 0 ? (
                allTask.map((item, index) => (
                  <article
                    key={item.id}
                    className={`group relative overflow-hidden rounded-[1.75rem] border p-5 transition duration-300 ${
                      item.isCompleted
                        ? "border-clay/20 bg-white/45"
                        : "border-ink/10 bg-white/72 hover:-translate-y-1 hover:border-wine/25 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                    }`}
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold via-clay to-wine" />
                    <div className="flex items-start gap-4 pl-3">
                      <input
                        type="checkbox"
                        checked={item.isCompleted}
                        name={`task-${item.id}`}
                        id={`task-${item.id}`}
                        onChange={() => handleTaskStatus(item.id)}
                        className="mt-1 h-6 w-6 shrink-0 appearance-none rounded-full border border-ink/20 bg-white transition before:block before:h-full before:w-full before:scale-0 before:rounded-full before:bg-clay before:transition checked:border-clay checked:before:scale-[0.55] group-hover:border-wine"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink/35">
                            Task {String(index + 1).padStart(2, "0")}
                          </p>
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] ${
                              item.isCompleted
                                ? "bg-clay/10 text-clay"
                                : "bg-ink text-paper"
                            }`}
                          >
                            {item.isCompleted ? "Completed" : "In Progress"}
                          </span>
                        </div>

                        <p
                          className={`mt-3 max-w-xl text-lg leading-7 sm:text-xl ${
                            item.isCompleted ? "text-ink/35 line-through" : "text-ink"
                          }`}
                        >
                          {item.task}
                        </p>
                      </div>

                      <button
                        onClick={() => handleRemoveTask(item.id)}
                        className="rounded-full border border-ink/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/50 transition hover:border-wine/30 hover:bg-wine hover:text-paper"
                      >
                        Remove
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-[2rem] border border-dashed border-ink/15 bg-white/45 p-8 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ink/40">
                    Empty list
                  </p>
                  <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-ink">
                    Nothing on the list yet.
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink/60">
                    Add a few tasks for the day and track them as you complete them.
                  </p>
                </div>
              )}
            </section>
          </div>
        </section>

        <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1a1210]/85 p-6 text-paper shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur sm:p-8">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-10 left-0 h-40 w-40 rounded-full bg-clay/10 blur-3xl" />

          <div className="relative flex h-full flex-col justify-between gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-paper/45">
                Overview
              </p>
              <h2 className="mt-4 max-w-sm font-display text-4xl leading-tight tracking-[-0.05em] sm:text-5xl">
                Stay on top of today.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-paper/65">
                This side panel is now task-focused: track progress, scan your status, and keep the interface useful on both desktop and mobile.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-paper/45">Progress</p>
                <p className="mt-3 text-4xl font-semibold text-gold">{completionRate}%</p>
                <p className="mt-2 text-sm leading-6 text-paper/60">
                  {allTask.length === 0
                    ? "Start with one task and build momentum."
                    : `${completedCount} of ${allTask.length} task${allTask.length > 1 ? "s" : ""} completed.`}
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-paper/45">Next move</p>
                <p className="mt-3 text-sm leading-7 text-paper/70">
                  {activeCount === 0
                    ? "Everything is done. Clear completed tasks or add a new goal."
                    : "Mark tasks as completed to keep the list current and easy to scan."}
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-paper/45">Build path</p>
                <p className="mt-3 text-sm leading-7 text-paper/70">
                  Styled with Tailwind CLI and tuned to stack cleanly on mobile, tablet, and desktop screens.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default App;
