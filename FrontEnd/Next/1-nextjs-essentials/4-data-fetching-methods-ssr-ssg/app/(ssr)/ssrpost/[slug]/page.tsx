export async function generateStaticParams() {
    try {
        const post = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
        return post.map(post => ({ slug: post.id.toString() }))
    } catch (err) {
        console.log(err)
    }
}

//SSR :-
const SSRPage = async ({ params }) => {

    const { slug } = await params

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
        next: {
            revalidate: 3600
        }
    });
    const post = await response.json();
    return (
        <>
            <h1>{post.title}</h1>
            <h4>{post.body}</h4>
        </>
    )
}

export default SSRPage
