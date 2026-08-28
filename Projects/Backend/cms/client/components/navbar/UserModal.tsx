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
import { User } from "@/data/tempData";
import Link from "next/link";

const UserModal = ({name, userName}:User) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" />}>
                    {userName}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>
                            Hi, {name}
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