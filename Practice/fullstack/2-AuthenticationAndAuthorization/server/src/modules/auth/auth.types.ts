

export interface RegisterInput {
    userName: string;
    userEmail: string;
    userPassword: string;
    role?: "user" | "admin";
}

export interface LoginInput {
    userEmail: string,
    userPassword: string
}

export interface AuthResponseData {
    user: {
        userId: string;
        userName: string;
        userEmail: string;
        role: string;
    }
    token: string;
}