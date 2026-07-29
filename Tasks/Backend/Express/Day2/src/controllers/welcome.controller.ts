import type { Request, Response } from "express";

export const welcomeController = async(request:Request, response:Response):Promise<void> => {
    try{
        response.send("Welcome Express JS")
    }catch(err:any){
        response.status(500).json({
            "message":err.message
        })
    }
}