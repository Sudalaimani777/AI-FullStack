
const RegisterSlugPage = async({params}) => {
    const {slug} = await params;
    return(
        <>
            <h1>This is the Register slug page</h1>
            <h1>The user {slug}</h1>
        </>
    )
}

export default RegisterSlugPage;