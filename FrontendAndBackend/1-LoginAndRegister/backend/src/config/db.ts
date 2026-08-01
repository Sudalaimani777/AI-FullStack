import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGO_URI) {
            console.log(`Unable to Get the MONGO_URI`);
            return
        }

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected successfully ${conn.connection.host}`);
    } catch (err: any) {
        console.log(`Unable to connect the DB`);
        process.exit(1);
    }
}