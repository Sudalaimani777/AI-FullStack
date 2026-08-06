import { Schema } from "mongoose";

const CRUDSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true
    }
});

export default CRUDSchema;