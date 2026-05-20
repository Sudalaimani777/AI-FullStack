import mongoose from "mongoose";


export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI); // Connecting to the MongoDB database using the connection string stored in the MONGO_URI environment variable. The mongoose.connect() function returns a promise, so we use await to wait for the connection to be established before proceeding.
        console.log("MongoDB connected successfully");
    }catch(err){
        console.log(err)
        process.exit(1) // Exiting the process with a failure code (1) if there is an error while connecting to the database. This is important to prevent the application from running without a database connection, which could lead to further errors down the line.
    }
}