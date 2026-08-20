const SudalaiPage = async ({ params }) => {
    console.log("params -> ", params);
    const { slug } = await params;
    // console.log("value ->", value);
    console.log("Slug ->", slug)
    return (
        <>
            <h1>Custom USer {slug}</h1>
        </>
    )
}

export default SudalaiPage;