import mongoose from "mongoose"



const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected successfully ${conn.connection.host}`);
    } catch (error) {
        console.log(`Something went wrong while connecting the DB ${error.message}`)
    }
}

export default connectDB;