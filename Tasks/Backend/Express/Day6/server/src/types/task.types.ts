import { Document } from "mongoose";

export interface Task extends Document {
    task: string,
    taskDescription: string
}