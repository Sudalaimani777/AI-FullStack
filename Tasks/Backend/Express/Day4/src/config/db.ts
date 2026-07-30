import { connect } from "mongoose"

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error(`Unable to find the MONGO_URI`);
            return
        }
        const conn = await connect(process.env.MONGO_URI);
        console.log(`DB connected successfully ${conn.connection.host}`);
    } catch (err) {
        console.log(`Unable to connect the DB`);
        process.exit(1);
    }
}