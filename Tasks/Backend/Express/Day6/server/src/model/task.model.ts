import { model } from "mongoose";
import { TaskSchema } from "../schema/task.schema.js";

const Task_Model = model("task-model", TaskSchema);

export default Task_Model;