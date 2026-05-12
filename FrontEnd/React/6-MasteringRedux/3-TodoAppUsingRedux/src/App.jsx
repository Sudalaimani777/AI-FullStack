import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {
  return (
    <main className="min-h-screen px-4 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-3xl">
        <header className="fade-up mb-8 flex flex-col items-start gap-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Todo App using Redux
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-slate-900 shadow-lg shadow-slate-900/20" />
            <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white/80 shadow-lg shadow-slate-200/60" />
          </div>
        </header>
        <section className="fade-up rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-xl shadow-slate-200/50 backdrop-blur sm:p-8">
          <TodoForm />
          <div className="mt-6 sm:mt-8">
            <TodoList />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
