import { UserRepository } from "./user.repository.js";
import type { UserDocument } from "./user.types.js";


export class UserService {
    constructor(private userRepository: UserRepository = new UserRepository()) { }

    async getProfile(userId: string): Promise<UserDocument> {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}