import type { Request, Response } from "express";
import Task_Model from "../model/task.model.js";


const getTaskController = async (request: Request, response: Response): Promise<void> => {
    try {
        const getAllTasks = await Task_Model.find({});

        if (!getAllTasks) {
            response.status(404).json({
                "message": "Unable to get all  task"
            })
            return;
        }

        response.status(200).json({
            "message": "Task fetched successfully",
            "tasks": getAllTasks
        })
    } catch (error: any) {
        response.status(500).json({
            "message": "Something went wrong while fetching all tasks",
            "error_message": error.message
        })
    }
}

export default getTaskController;