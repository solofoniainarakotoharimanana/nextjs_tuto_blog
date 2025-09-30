
'use client'

import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface ButtonProps {
    label: string,
    disabled?: boolean,
    outlined?: boolean,
    small?: string,
    icon?: IconType,
    className?: string,
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const Button = ({ label, disabled, outlined, icon: Icon , small, type, className, onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(`disabled:opacity-0 disabled:cursoor-not-allowed rounded:md hover:opacity-80 transition w-auto border-2 flex items-center rounded-sm justify-center gap-2 py-3 px-5 bg-slate-700 text-white dark:border-slate-700 my-2`, outlined && `bg-transparent text-slate-700 dark:text-slate-300 dark:bg-transparent `, small && `text-sm py-2 border-[1px]`, className && className)}   
        >
            {Icon && <Icon size={20} />}
            {label}
        </button>);
}
 
export default Button;