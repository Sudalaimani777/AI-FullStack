import studentDataModel from "../models/student.model.js";

export const getIndividualStudent = async(request, response) => {
    try{
        const {id} = request.params;

        const individual_student = await studentDataModel.findById(id);

        response.status(200).json({
            "message":"Student Data fetched successfully",
            "student_infos": individual_student
        })
    }catch(err){
        response.status(500).json({
            "message":"Something went wrong while fetching the specific student infos",
            "Error_Message": err.message
        })
    }
}