import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    student_name: {
        type: String,
        required: true,
        trim: true
    },
    student_email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    student_age: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const studentDataModel = model("Student_Data_Model", studentSchema);

export default studentDataModel;