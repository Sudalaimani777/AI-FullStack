import type { UserInfo } from "./user-info.types.ts"

declare global {
    namespace Express {
        interface Request {
            user?: userInfo | null
        }
    }
}

export {}