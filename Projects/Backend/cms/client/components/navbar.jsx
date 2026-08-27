import { Anvil } from "lucide-react"
import Link from "next/link";

const Navbar = () => {

    const auth = false;

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
                    auth ?
                        <div>User</div>
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