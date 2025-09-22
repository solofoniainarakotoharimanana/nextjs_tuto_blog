import { MdNoteAlt } from "react-icons/md";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import SearchInput from "./SearchIput";
import Notifications from './Notifications';
import UserButton from "./UserButton";

const NavBar = () => {
    return (  
        
        <nav className="sticky top-0 border-b z-50 bg-white dark:bg-slate-950  ">
            <Container>
                <div className="flex justify-between items-center gap-8">
                <div className="flex items-center gap-1 cursor-pointer">
                    <MdNoteAlt size={24} />
                    <div className="font-bold text-xl">WEBDEV.BLOG</div> 
                </div>
                <SearchInput />
                <div className="flex gap-5 sm:gap-8 items-center">
                    <ThemeToggle />
                    <Notifications />
                    <UserButton />
                </div>
            </div>
            </Container>
        </nav>
        
        
    );
}
 
export default NavBar;
