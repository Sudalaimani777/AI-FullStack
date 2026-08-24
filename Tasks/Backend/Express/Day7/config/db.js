import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected successfully ${conn.connection.host}`)
    }catch(err){
        console.log(`Something went wrong while connecting the DB ${err.message}`);
    }
}

export default connectDB;