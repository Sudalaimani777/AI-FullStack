import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGO_URI) {
            console.log(`MONGO_URL not found`)
            return;
        }

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected successfully ${conn.connection.host}`)
    } catch (error: any) {
        console.log(`Unable to connect the DB ${error.message}`)
    }
}

export default connectDB;