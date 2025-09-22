import { LogOut, Pencil, Shield, User, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { FaRegBookmark } from "react-icons/fa";

const UserButton = () => {
    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="border-2 border-slate-5000 dark:border-slate-600">
                        <UserRound size={20} />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/50 w-[150px] p-2 dark:bg-slate-800 rounded-sm">
                <DropdownMenuItem>
                    <button className="flex items-center p-1 justify-between gap-2">
                        <User size={18} /> Profile
                    </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <button className="flex items-center p-1 justify-between gap-2">
                        <Pencil size={18} /> Create post
                    </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                 <DropdownMenuItem>
                    <button className="flex items-center p-1 justify-between gap-2">
                        <FaRegBookmark size={16} /> Bookmark
                    </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <button className="flex items-center p-1 justify-between gap-2">
                        <Shield size={18} /> Admin
                    </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <button className="flex items-center p-1 justify-between gap-2">
                        <LogOut size={18} /> Sign out
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default UserButton;