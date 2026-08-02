import axios from "axios";
import type { SignInPayload, SignUpPayload, AuthResponse } from "../types/auth.type";

const API = axios.create({
    baseURL: "http://localhost:5000/api/auth",
    headers: {
        "Content-Type": "application/json"
    }
});

export const signUpAPI = async (data: SignUpPayload): Promise<AuthResponse> => {
    try {
        const response = await API.post<AuthResponse>("/user-sign-up", data);
        return response.data;
    } catch (err: unknown) {
        console.error("signUpAPI Error:", err);
        throw err;
    }
};

export const signInAPI = async (data: SignInPayload): Promise<AuthResponse> => {
    try {
        const response = await API.post<AuthResponse>("/user-sign-in", data);
        return response.data;
    } catch (err: unknown) {
        console.error("signInAPI Error:", err);
        throw err;
    }
};
