

const LoginSlugPage = async ({ params }) => {
    const { slug } = await params
    return (
        <>
            <h1>This is the slug page for login</h1>
            <h1>Slug User {slug}</h1>
        </>
    )
}

export default LoginSlugPage;