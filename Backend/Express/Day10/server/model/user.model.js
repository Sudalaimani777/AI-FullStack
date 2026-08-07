import { model } from "mongoose";
import { UserSchema } from "../schema/user.schema.js"

const UserModel = model("user-data-model", UserSchema);

export default UserModel;