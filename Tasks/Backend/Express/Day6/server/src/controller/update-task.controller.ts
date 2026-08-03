import type { Request, Response } from "express";
import Task_Model from "../model/task.model.js";

const updateTaskController = async (request: Request, response: Response): Promise<void> => {
    try {
        const { id } = request.params;
        const {task, taskDescription} = request.body;

        const updateTask = await Task_Model.findByIdAndUpdate(
            id,
            {task, taskDescription},
            {new:true, runValidators:true}
        );

        if(!updateTask){
            response.status(404).json({
                "message":"Task not found to update"
            })
            return;
        }

        response.status(200).json({
            "message":"Task updated successfully",
            "updated_task":updateTask
        })

    } catch (error:any) {   
        response.status(500).json({
            "message":"Something went wrong while updating the task",
            "error_message":error.message
        })
    }
}

export default updateTaskController;