import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGO_URL) {
            console.log(`ENV Missing`)
            return
        }

        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB connected successfully`);
    } catch (err) {
        console.log(`Something went wrong while connecting the DB`)
        process.exit(1);
    }
}

export default connectDB;