import { Schema } from "mongoose";
import type { Task } from "../types/task.types.js";

export const TaskSchema = new Schema<Task>({
    task: {
        type: String,
        required: true,
    },
    taskDescription: {
        type: String,
        required: true
    }
})