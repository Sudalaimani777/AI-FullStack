import studentDataModel from "../models/student.model.js"

export const getStudentInfo = async (request, response) => {
    try {
        const { id } = request.params;
        const getStudentData = await studentDataModel.find(id);

        response.status(200).json({
            "message":"Student Data fetched successfully",
            "student_infos": getStudentData
        })
    } catch (err) {
        response.status(500).json({
            "message":"Something went wrong while fetching the student infos",
            "Error_Message": err.message
        })
    }
}