import { Bell, BellIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";

const Notifications = () => {
    return ( 
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="relative">
                    <div className="absolute bg-rose-600 w-6 h-6 text-white text-sm flex justify-center items-center font-semibold rounded-full bottom-3 left-2">
                        <span>13</span>
                    </div>
                    <Bell size={20} className="mt-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[100%] max-w-[400px]" >
                    <div className="flex justify-between gap-3 mb-2 p-2">
                        <h3 className="font-bold text-lg">Notifications</h3>
                        <button>Mark all read</button>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
     );
}
 
export default Notifications;