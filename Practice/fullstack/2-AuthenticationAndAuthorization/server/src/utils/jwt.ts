import jwt from "jsonwebtoken";

export interface JWTSignPayload {
    userId: string;
    userEmail: string;
    userRole: "user" | "admin";
}

// Generate the JWT Token :-
export const generateJWTToken = (payload: JWTSignPayload): string => {
    const secret = process.env.JWT_SECRET as string;
    const expires_in = process.env.JWT_EXPIRES_IN;
    return jwt.sign(
        payload,
        secret,
        { expiresIn: expires_in as any }
    )
}

// Verify JWT Token :-
export const verifyJWT = (token: string): JWTSignPayload => {
    const secret = process.env.JWT_SECRET as string;
    return jwt.verify(
        token,
        secret
    ) as JWTSignPayload
}