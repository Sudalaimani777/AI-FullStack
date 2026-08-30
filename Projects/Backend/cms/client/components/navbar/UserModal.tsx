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


interface User {
    name: string,
    userName: string,
    userImage: string
}

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
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default UserModal;