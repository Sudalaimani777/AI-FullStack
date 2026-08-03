import addModel from "../model/task-model.js";

const addController = async(request, response) => {
    try{
        const {addData} = request.body;

        if(!addData){
            return response.status(409).json({
                "message":"Enter the required fields"
            });
        }

        const data = await addModel.create({addData});

        response.status(201).json({
            "message":"Data created successfully"
        })
    }catch(err){
        response.status(500).json({
            "message":"Something went wrong while add data",
            "err": err.message
        })
    }
}
export default addController;