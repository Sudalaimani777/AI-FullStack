import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./index.css";


function BlankVersionTodo() {

  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState([]);

  const handleAddTask = e => {
    e.preventDefault();
    setAllTask([...allTask, { id: uuid(), task: task, isCompleted: false }]);
    setTask("");
  }

  const handleInput = e => {
    setTask(e.target.value)
  }

  const handleRemoveTask = id => {
    const remainigTask = allTask.filter(item => item.id !== id);
    setAllTask(remainigTask);
  }

  const handleTaskStatus = id => {
    const ramainingTasks = allTask.map(item => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item);
    setAllTask(ramainingTasks);
    console.log(allTask);
  }

  return (
    <>
      <header>
        <h1>Todo</h1>
      </header>
      <section>
        <form onSubmit={handleAddTask}>
          <input type="text" name="task" id="task" onChange={handleInput} value={task} required />
          <input type="submit" value="Add Task" />
        </form>
      </section>

      <section>
        {
          allTask?.length > 0 ? allTask.map(item => (
            <div key={item.id}>
              <input type="checkbox" checked={item.isCompleted} name="cb" id="cb" onChange={() => handleTaskStatus(item.id)} />
              <p className={item.isCompleted ? "completed" : ""}>{item.task}</p>
              <span><button onClick={() => handleRemoveTask(item.id)}>X</button></span>
            </div>
          )) : <h4>Currently No task</h4>
        }
      </section>
    </>
  )
}

export default BlankVersionTodo;