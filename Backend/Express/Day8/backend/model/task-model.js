import { model } from "mongoose";
import { addSchema } from "../schema/task-schema.js";

const addModel = model("add-model", addSchema);

export default addModel;