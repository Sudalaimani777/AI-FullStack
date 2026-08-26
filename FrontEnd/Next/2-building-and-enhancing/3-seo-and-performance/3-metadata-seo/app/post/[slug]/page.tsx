
type Blog = {
    id: number,
    title: string,
    body: string
}

type PageProps = {
    params: Promise<{ slug: string }>
}

const fetchBlog = async (id: number) => {
    const response: Blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
    return response;
};

export const generateMetadata = async ({ params }: PageProps) => {
    const { slug } = await params;

    const data = await fetchBlog(Number(slug));

    return {
        title: data.title,
        description: data.body,
        openGraph: {
            images: [`http://localhost:3000/api/og?title=${data.title}`]
        }
    }
}

const SEO = async ({ params }: PageProps) => {
    const { slug } = await params;

    const data = await fetchBlog(Number(slug));

    console.log(data);

    return (
        <>
            <h1>{data.title}</h1>
            <h3>{data.body}</h3>
        </>
    )
}

export default SEO;