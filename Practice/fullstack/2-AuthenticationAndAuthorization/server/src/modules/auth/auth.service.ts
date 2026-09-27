import { AuthRepository } from "./auth.repository.js";
import { hashPassword, comparePassword, generateJWTToken } from "../../utils/index.js"
import type { RegisterInput, LoginInput, AuthResponseData } from "./auth.types.js";


export class AuthService {
    constructor(private authRepository: AuthRepository = new AuthRepository()) { }

    async register(data: RegisterInput): Promise<AuthResponseData> {
        const existingUser = await this.authRepository.findByEmail(data.userEmail);

        if (existingUser) {
            throw new Error("User with this userEmail already exists");
        }

        const hashedPassword = await hashPassword(data.userPassword);

        const newUser = await this.authRepository.create({
            userName: data.userName,
            userEmail: data.userEmail,
            userPassword: hashedPassword,
            role: data.role || "user",
        })

        const token = generateJWTToken({
            userId: newUser._id.toString(),
            userEmail: newUser.userEmail,
            userRole: newUser.role
        });

        return {
            user: {
                userId: newUser._id.toString(),
                userName: newUser.userName,
                userEmail: newUser.userEmail,
                role: newUser.role,
            },
            token
        }
    }

    async login(data: LoginInput): Promise<AuthResponseData> {
        const user = await this.authRepository.findByEmail(data.userEmail, true);
        if (!user || !user.userPassword) {
            throw new Error("Invalid userEmail or password");
        }
        const isMatch = await comparePassword(data.userPassword, user.userPassword);
        if (!isMatch) {
            throw new Error("Invalid userEmail or password");
        }
        const token = generateJWTToken({
            userId: user._id.toString(),
            userEmail: user.userEmail,
            userRole: user.role,
        });
        return {
            user: {
                userId: user._id.toString(),
                userName: user.userName,
                userEmail: user.userEmail,
                role: user.role,
            },
            token,
        };
    }

}