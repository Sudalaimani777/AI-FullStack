import { Anvil } from "lucide-react"
import Link from "next/link";
import UserModal from "./UserModal";
import { getAuthSession } from "@/lib/auth";



const Navbar = async () => {

    const session = await getAuthSession();
    // console.log("session ->", session);

    return (
        <>
            <section className="w-full flex gap-2 justify-between px-8 h-12">
                {/* Left Side */}
                <Link
                    className="flex gap-2"
                    href={"/"}
                >
                    <Anvil />
                    <span className="font-extrabold ">CMS</span>
                </Link>

                {/* Right Side */}
                {
                    session ?
                        <UserModal
                            name={session?.user?.name}
                            userName={session?.user?.username}
                            userImage={session?.user?.image}
                        />
                        :
                        <Link href={"/sign-in"} className="">
                            Sign in
                        </Link>
                }
            </section>
        </>
    )
};

export default Navbar;