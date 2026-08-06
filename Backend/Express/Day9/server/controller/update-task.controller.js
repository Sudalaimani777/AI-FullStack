import CRUD_Model from "../model/crud.model.js"

const updateTaskController = async (request, response) => {
    try {
        const { id } = request.params;

        const { task, taskDescription } = request.body;

        const invalidDataToUpdate = !task || !taskDescription;

        if (invalidDataToUpdate) {
            return response.status(404).json({
                "message": "Task not found to update"
            })
        }

        const updateTask = await CRUD_Model.findByIdAndUpdate(
            id,
            { task, taskDescription },
            { runValidators: true, returnDocument: true }
        )

        response.status(200).json({
            "message": "Task Updated Successfully"
        })
    } catch (error) {
        response.status(500).json({
            "message": "Something went wrong while updating the task",
            "error_message": error.message
        })
    }
}

export default updateTaskController;