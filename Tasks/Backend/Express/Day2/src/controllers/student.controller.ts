import type { Request, Response } from "express";

export const getStudentDetails = async(request:Request, response:Response):Promise<void> => {
    try{    
        response.status(200).json({
            "id":101,
            "name":"Sudalaimani",
            "course":"MERN"
        });
       
    }catch(err:any){
        response.status(500).json({
            "message":err.message
        })
    }
}