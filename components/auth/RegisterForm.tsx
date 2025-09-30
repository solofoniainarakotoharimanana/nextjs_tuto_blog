'use client';

import { SubmitHandler, useForm } from "react-hook-form";

import FormField from "../common/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "@/schemas/RegisterSchema";
import { email } from "zod";
import Button from "../common/Button";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });
    
    const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
        console.log(data)
    }

    return (<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[500px] m-auto mt-8 gap-2">
        <Heading title="CREATE WEBDEV.blog account" md center />
        <FormField
            id="name" type="text"
            placeholder="Name"
            errors={errors} register={register} />
        <FormField
            id="email" type="email"
            placeholder="Email"
            errors={errors} register={register} />
        <FormField
            id="password" type="password"
            placeholder="Password"
            errors={errors} register={register} />
        <FormField
            id="confirmPassword" type="password"
            placeholder="Confirm password"
            errors={errors} register={register} />
        <Button type="submit" label="Register" outlined small />
        <div className="flex justify-center my-2">OR</div>
        <SocialAuth />
    </form> );
}
 
export default RegisterForm;