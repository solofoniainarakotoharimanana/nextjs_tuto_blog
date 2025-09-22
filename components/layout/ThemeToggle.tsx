'use client';
import { Moon, Sun } from "lucide-react";
import {useTheme} from 'next-themes'

const ThemeToggle = () => {
    let {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        if (theme === 'system') {
            theme = 'light'
        }
        else if(theme === 'light') {
            theme = 'dark'
        }
        else if(theme === 'dark') {
            theme = 'light'
        }
        setTheme(theme)
        // setTheme(theme === 'system' ? 'light' : 'dark')
        
    }

    return ( 
        <button onClick={toggleTheme}>
            <Sun className="hidden dark:block" />
            <Moon className="block dark:hidden" />
        </button>
     );
}
 
export default ThemeToggle;