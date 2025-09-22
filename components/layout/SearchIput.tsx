
import { Search } from "lucide-react";
import {Input } from '../ui/input'

const SearchInput = () => {
    return ( 
        <div className="relative hidden sm:block ">
            <Search className="absolute top-2 left-4" />
            <Input placeholder="Search" className="pl-10 " />
        </div>
     );
}
 
export default SearchInput;