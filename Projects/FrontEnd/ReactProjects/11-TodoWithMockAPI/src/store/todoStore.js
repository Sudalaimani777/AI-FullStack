import { create } from "zustand";
import {
    getTask,
    createTask as createTaskAPI,
    deleteTask as deleteTaskAPI,
    updateTask as updateTaskAPI
} from "../api/todoApi";

const useTaskStore = create(set => ({
    allTasks: [],
    error: null,
    loading: false,
    searchTaskData: "",
    editTaskData: "",

    // Fetch Task :-
    fetchTask: async () => {
        set({ loading: true, error: null })
        try {
            const task = await getTask();
            set({ allTasks: task, loading: false })
        } catch (err) {
            set({ error: err.message, loading: false })
        }
    },

    // Create Task :-
    createTask: async (task) => {
        try {
            const newTask = await createTaskAPI(task);
            set(state => ({
                allTasks: [...state.allTasks, newTask]
            }))
        } catch (err) {
            set({
                error: err.message
            })
        }
    },
    // Update Task :-
    updateTask: async (taskId, updatedTask) => {
        try {
            const updateTask = await updateTaskAPI(taskId, updatedTask);
            set(state => ({
                allTasks: state.allTasks.map(tsk => tsk.id === taskId ? updateTask : tsk)
            }))
        } catch (err) {
            set({ error: err.message })
        }
    },
    // Delete Task :-
    deleteTask: async (taskId) => {
        try {
            await deleteTaskAPI(taskId);
            set(state => ({
                allTasks: state.allTasks.filter(tsk => tsk.id !== taskId)
            }))
        } catch (err) {
            set({ error: err.message })
        }
    },

    // Edit Task :-
    editTask: (task) => {
        set({ editTaskData: task });
    },
    // Search Task :-
    searchTask: (task) => {
        set({ searchTaskData: task })
    }
}))

export default useTaskStore;