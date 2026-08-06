import CRUD_Model from "../model/crud.model.js"

const getTaskController = async (request, response) => {
    try {
        const getTask = CRUD_Model.find();

        if (!getTask) {
            return response.status(404).json({
                "message": "Task Not Found"
            })
        }

        response.status(200).json({
            "message": "Task Fetched Successfully",
        })
    } catch (error) {
        response.status(500).json({
            "message": "Unable to fetch the task",
            "error_message": error.message
        })
    }
}

export default getTaskController;