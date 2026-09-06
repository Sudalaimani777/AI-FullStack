import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
import { User } from "@/types/types";
import SignOut from "@/components/navbar/SignOut";




const UserModal = ({ name, userName, userImage }: User) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" />}>
                    <Image
                        src={userImage || "/default-profile.avif"}
                        width={40}
                        height={40}
                        alt={name}
                        className="rounded-full border-2 border-[greenyellow]"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>
                            Welcome, {name}
                        </DropdownMenuLabel>
                        <DropdownMenuItem>
                            <Link href={`/profile/${userName}`}>
                                Go to profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <SignOut />
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default UserModal;