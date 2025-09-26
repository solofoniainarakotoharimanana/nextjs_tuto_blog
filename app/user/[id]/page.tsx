const User = async ({ params }: {params: Promise<{id: string}>}) => {
    const { id } = await params;
    interface User {
        name: string,
        // name: any, ==> accept all of type
        // name: string | number, ==> name can be type string or number
        // name?: string, ==> name is optional with ? 
        email: string
    }

    const user: User = {
        name: "test",
        email: "test@test.com"

    }
    //Could fetch data using the id params
    return (<>User profile: {user.name}</> );
}
 
export default User;    