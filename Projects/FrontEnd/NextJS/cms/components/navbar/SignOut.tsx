"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";


const SignOut = () => {

    const handleLogout = () => {
        signOut({callbackUrl:"/sign-in"});
    }

    return (
        <>
            <div 
                className="flex items-center gap-1"
                onClick={handleLogout}
            >
                <LogOut className="size-4" /> Sign Out
            </div>
        </>
    )
}

export default SignOut;