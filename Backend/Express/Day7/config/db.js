import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected Successfully`);
    }catch(err){
        console.log(`Unable to connect the DB ${err}`);
    }
}