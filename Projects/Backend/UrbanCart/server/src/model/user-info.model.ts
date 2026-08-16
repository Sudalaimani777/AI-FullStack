import { model } from "mongoose";
import UserSchema from "../schema/user-info.schema.js"
import type { UserInfo } from "../types/user-info.types.js"

const UserInfoModel = model<UserInfo>("user-info-model", UserSchema);

export default UserInfoModel;