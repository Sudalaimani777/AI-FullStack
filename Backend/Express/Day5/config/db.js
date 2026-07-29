import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected successfully ${db.connection.host}`)
    } catch (err) {
        console.log(`DB connection failed ${err}`);
        process.exit(1);
    }
}