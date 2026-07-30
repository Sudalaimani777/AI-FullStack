import studentDataModel from "../models/student.model.js"



export const createStudentController = async (request, response) => {
    try {
        const { student_name, student_email, student_age } = request.body;

        const sendStudentData = await studentDataModel.create({student_name, student_age, student_email});

        response.status(201).json({
            "message": "Student Data Sent Successfully",
            "data": sendStudentData
        })
    } catch (err) {
        response.status(500).json({
            "message": "Something went wrong while send the student data",
            "err_message": err.message
        })
    }
}