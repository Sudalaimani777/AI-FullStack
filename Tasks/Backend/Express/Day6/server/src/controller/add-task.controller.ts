import type { Request, Response } from "express";
import Task_Model from "../model/task.model.js";


const addTaskController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { task, taskDescription } = request.body;

        const invalidTask = !task || !taskDescription;

        if (invalidTask) {
            response.status(409).json({
                "message": "Fill the Required Fields"
            })
            return;
        }

        const createdTask = await Task_Model.create({ task, taskDescription });

        response.status(201).json({
            "message": "Task Added Successfully",
            "task": createdTask
        })
    } catch (error: any) {
        response.status(500).json({
            "message": "Something went wrong while adding the task",
            "Error_Message": error.message
        })
    }
}

export default addTaskController;