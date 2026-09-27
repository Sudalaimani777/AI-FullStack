import { UserModel } from "./user.model.js";
import type { UserInfo, UserDocument } from "./user.types.js";

// Encapsulates direct database queries for users :-
export class UserRepository {
    async create(userData: Partial<UserInfo>): Promise<UserDocument> {
        return UserModel.create(userData);
    }

    async findByEmail(email: string, includePassword = false): Promise<UserDocument | null> {
        const query = UserModel.findOne({ email });
        if (includePassword) {
            query.select("+userPassword");
        }
        return query.exec();
    }

    async findById(userId: string): Promise<UserDocument | null> {
        return UserModel.findById(userId).select("-userPassword").exec();
    }

    async findAll():Promise <UserDocument[]>{
        return UserModel.find().select("-userPassword")
    }

}