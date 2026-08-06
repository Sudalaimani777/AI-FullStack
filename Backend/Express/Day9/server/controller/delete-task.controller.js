import CRUD_Model from "../model/crud.model.js"

const deleteTaskController = async (request, response) => {
    try {
        const { id } = request.params;

        if (!id) {
            return response.status(404).json({
                "message": "Unable to find the task to delete"
            })
        }

        const deleteTask = await CRUD_Model.findByIdAndDelete(id);

        response.status(200).json({
            "message": "Task Deleted Successfully"
        })
    } catch (error) {
        response.status(500).json({
            "message": "Something went wrong while deleting the task",
            "error_message": error.message
        })
    }
}

export default deleteTaskController;