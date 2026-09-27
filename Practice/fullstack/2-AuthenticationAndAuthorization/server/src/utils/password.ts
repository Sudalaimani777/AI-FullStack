import bcrypt from "bcrypt";

// Hash Password :-
export const hashPassword = async (password: string): Promise<string> => {
    const salt = 10;
    return bcrypt.hash(password, salt);
}

// Compare the password :-
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => bcrypt.compare(password, hashedPassword)