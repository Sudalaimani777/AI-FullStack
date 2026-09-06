import axios from "axios";

//Get Task :-
export const getTask = async () => {
    try {
        const response = await axios.get("/");
        return response.data
    } catch (err) {
        return err.message
    }
}

// Get Task By Id :-
export const getTaskById = async (taskId) => {
    try {
        const response = await axios.get(`/${taskId}`);
        return response.data;
    } catch (err) {
        return err.message;
    }
}

// Create Task :-
export const createTask = async (task) => {
    try {
        const response = await axios.post("/", task);
        return response.data;
    } catch (err) {
        return err.message
    }
}

// Update Task :-
export const updateTask = async (taskId, updatedTask) => {
    try {
        const response = await axios.put(`/${taskId}`, updatedTask);
        return response.data;
    } catch (err) {
        return err.message;
    }
}

// Delete Task :-
export const deleteTask = async (taskId) => {
    try {
        return axios.delete(`/${taskId}`)
    } catch (err) {
        return err.message
    }
}