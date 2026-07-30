import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        if(!process.env.MONGO_URI){
            throw new Error("MONGO_URI is not defined in environment variables.");
            return
        }
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully", db.connection.host);
    } catch (err: any) {
        console.log("Error while connection the DB", err.message);
        process.exit(1);
    }
}