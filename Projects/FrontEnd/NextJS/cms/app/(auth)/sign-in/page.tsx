"use client";
import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/toast";
import { Anvil } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";



const SignIn = () => {

    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        try {
            setLoading(true);
            await signIn("google")
        } catch (error: unknown) {
            console.log(error)
            toast.add({
                title: "Uh oh!",
                description: "Failed to sign-in",
                type: "error"
            })
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <section className="w-full flex h-screen justify-center items-center">
                <div className="w-full sm:w-1/2 md:w-1/3 p-4 rounded-lg  mx-4 bg-zinc-800 flex flex-col items-center gap-4 ">
                    <Anvil className="size-12 text-gray-300" />
                    <p className="text-sm text-gray-200 text-center">Welcome, by continuing with cms sign in, you&apos;ll be a Geek</p>
                    <button
                        className="flex items-center gap-2 bg-gray-500/50 rounded px-10 py-2 font-bold text-lg hover:bg-gray-500/40 transition-colors duration-200"
                        onClick={handleSignIn}
                    >
                        <Icons.GoogleIcon
                            className="size-7"
                        />
                        {
                            loading ? "Loading..." : "Sign In"
                        }
                    </button>
                </div>
            </section>
        </>
    )
}

export default SignIn;