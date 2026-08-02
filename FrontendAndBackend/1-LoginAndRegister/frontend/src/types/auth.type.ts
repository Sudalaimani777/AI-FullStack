export interface User {
    "user-id": string,
    "user-name": string,
    "user-email": string
}

export interface SignUpPayload {
    userName: string,
    userEmail: string,
    userPassword: string
}

export interface SignInPayload {
    userEmail: string,
    userPassword: string
}

export interface AuthResponse {
    message: string,
    User_Info: User
}