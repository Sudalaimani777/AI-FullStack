import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected successfully`);
    } catch (error) {
        console.log(`Something went wrong while connection the DB`);
    }
}

export default connectDB;