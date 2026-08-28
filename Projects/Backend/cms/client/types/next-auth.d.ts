import "next-auth";
import "next-auth/jwt";

import type { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            username: string | null;
            role: string;
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        username?: string | null;
        role?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        username?: string | null;
        role?: string;
        image?: string | null;
    }
}