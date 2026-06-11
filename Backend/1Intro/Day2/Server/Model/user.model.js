import mongoose from "mongoose";
import { Schema } from "mongoose"; // Importing the Schema class from the mongoose library. This is used to define the structure of the documents in a MongoDB collection.

const userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

export const User = mongoose.model("User", userSchema); // Exporting the User model, which is created using the mongoose.model() function. This function takes two arguments: the name of the model ("User") and the schema that defines the structure of the documents in the collection (userSchema). The User model can be used to interact with the "users" collection in the MongoDB database, allowing us to create, read, update, and delete user documents based on the defined schema.