import { createSlice } from "@reduxjs/toolkit"


const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        removeTask: (state, action) => {
            return state.filter(task => task.taskId !== action.payload)
        },
        removeAllTask: (state) => {
            return [];
        }
    }
})

console.log(todoSlice)

export const { addTask, removeTask, removeAllTask } = todoSlice.actions;

export default todoSlice.reducer