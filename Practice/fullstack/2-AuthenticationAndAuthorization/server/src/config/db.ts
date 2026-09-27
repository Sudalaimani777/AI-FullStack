import { connect } from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const conn = await connect(process.env.MONGO_URL as string);
        console.log(`DB connected successfully ${conn.connection.host}`)
    } catch (error: any) {
        console.error(`Something went wrong while connecting the DB`);
    }
}

export default connectDB;