//SSG :- Server Side Generation 

export async function generateStaticParams() {
    try {
        const post = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
        return post.map(post => ({ slug: post.id.toString() }))
    } catch (err) {
        console.log(err);
    }
}

const SSGPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const {slug} = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    const post = await response.json();

    if(!post){
        throw new Error("Params not found");
    }

    return(
        <>
            <h1>{post.title}</h1>
        </>
    )
 }

 export default SSGPage;