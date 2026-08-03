import type { Request, Response } from "express";
import Task_Model from "../model/task.model.js";


const deleteTaskController = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const deleteTask = await Task_Model.findByIdAndDelete(id);

        if (!deleteTask) {
            response.status(404).json({
                "message": "Unable to delete, task not found"
            })
            return;
        }

        response.status(200).json({
            "message": "Task Deleted Successfully",
            "deleted_task": deleteTask
        })
    } catch (error: any) {
        response.status(500).json({
            "message": "Something went wrong while deleting the task in the DB",
            "error_message": error.message
        })
    }
}

export default deleteTaskController;