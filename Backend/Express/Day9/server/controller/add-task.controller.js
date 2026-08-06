import CRUD_Model from "../model/crud.model.js"

const addTaskController = async (request, response) => {
    try {
        const { task, taskDescription } = request.body;

        const invalidTaskData = !task || !taskDescription;

        if (invalidTaskData) {
            return response.status(409).json({
                "message": "Invalid Data, please check the input fields"
            })
        }

        const addTask = await CRUD_Model.create({ task, taskDescription });

        response.status(201).json({
            "message": "Task Added Successfully",
            "tasks": addTask
        })
    } catch (error) {
        response.status(500).json({
            "message": "Something went wrong while adding task"
        })
    }
}

export default addTaskController;