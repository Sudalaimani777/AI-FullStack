import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.log("MONGO_URI is invalid");
            return
        }

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected successfully ${conn.connection.host}`);
    } catch (err: any) {
        console.log(`Something went wrong while connecting the DB ${err.message}`);
    }
}