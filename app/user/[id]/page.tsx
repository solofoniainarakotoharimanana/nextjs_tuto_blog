const User = async ({ params }: {params: Promise<{id: string}>}) => {
    const { id } = await params;
    //Could fetch data using the id params
    return (<>User profile: {id}</> );
}
 
export default User;    