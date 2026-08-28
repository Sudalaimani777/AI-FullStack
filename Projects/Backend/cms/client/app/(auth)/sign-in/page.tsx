"use client";
import { Icons } from "@/components/Icons";
import { Anvil } from "lucide-react";


const SignIn = () => {

    const handleSignIn = () => {
        console.log(`Trying to sign in`);
    }

    return (
        <>
            <section className="w-full flex h-screen justify-center items-center">
                <div className="w-full sm:w-1/2 md:w-1/3 p-4 rounded-lg  mx-4 bg-zinc-800 flex flex-col items-center gap-4 ">
                    <Anvil className="size-12 text-gray-300"/>
                    <p className="text-sm text-gray-200 text-center">Welcome, by continuing with cms sign in, you&apos;ll be a Geek</p>
                    <button 
                        className="flex items-center gap-2 bg-gray-500/50 rounded px-10 py-2 font-bold text-lg hover:bg-gray-500/40 transition-colors duration-200"
                        onClick={handleSignIn}
                    >
                        <Icons.GoogleIcon
                            className="size-7"
                        />
                        Sign In
                    </button>
                </div>
            </section>
        </>
    )
}

export default SignIn;