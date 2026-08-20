const UserAccountPage = async ({ params }) => {

    const { slug } = await params

    return (
        <>
            This is the user account page main slug {slug}
        </>
    )
}

export default UserAccountPage;