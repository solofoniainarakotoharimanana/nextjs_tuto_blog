'use client';

import { SubmitHandler, useForm } from "react-hook-form";

import FormField from "../common/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "@/schemas/LoginSchema";
import { email } from "zod";
import Button from "../common/Button";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });
    
    const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
        console.log(data)
    }

    return (<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[500px] m-auto mt-8 gap-2">
        <Heading title="LOGIN WEBDEV.blog" md center />
        <FormField
            id="email" type="email"
            placeholder="Email"
            errors={errors} register={register} />
        <FormField
            id="password" type="password"
            placeholder="Password"
            errors={errors} register={register} />
        <Button type="submit" label="Login" outlined small />
        <div className="flex justify-center my-2">OR</div>
        <SocialAuth />
    </form> );
}
 
export default LoginForm;