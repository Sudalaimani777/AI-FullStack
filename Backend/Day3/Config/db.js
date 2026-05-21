import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}