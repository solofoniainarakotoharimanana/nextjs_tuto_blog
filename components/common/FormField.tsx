
import { cn } from "@/lib/utils";
import { FieldErrors, Path, UseFormRegister, FieldValues } from "react-hook-form"

// interface loginValues {
//     login: string,
//     password: string
// }

interface FormFieldProps <T extends FieldValues>{//Can extends type or any
    id: string,
    type: string,
    disabled?: boolean,
    label?: string,
    inputClassNames?: string,
    placeholder: string,
    register: UseFormRegister<T>,
    errors: FieldErrors
}

const FormField = <T extends FieldValues> ({ id, type, disabled, label, inputClassNames, placeholder, register, errors }: FormFieldProps<T>) => {
    const message = errors[id] && errors[id]?.message as string
    // console.log("REGISTER ===> "+register)
    return (<div>
        {label && <span className="text-sm block">{label}</span>}
        <input
            id={id}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            className={cn("w-full p-3 my-2 outline-none rounded-md disabled:opacity-70 disabled:cursor-not-allowed border border-slate-300 dark:border-slate-700", errors[id] && "border-rose-400", inputClassNames)}
            {...register(id as Path<T>)}
            // {...register(id as Path<loginValues>)}

        />
        {message && <span className="text-sm text-rose-400">{ message}</span>}
    </div> );
}
 
export default FormField;