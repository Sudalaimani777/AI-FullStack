type Blog = {
    id: number;
    title: string;
    body: string;
};

const BASE_URL = process.env.BASE_URL;

export default async function sitemap() {
    const fetchAllBlogs: Blog[] = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    ).then((res) => res.json());

    const dynamicBlogs = fetchAllBlogs.map((post) => {
        return {
            url: `${BASE_URL}/${post.id}`,
            lastModified: new Date(),
        };
    });

    const staticPath = ["/", "/contact-us", "/about"].map((path) => {
        return {
            url: `${BASE_URL}${path}`,
            lastModified: new Date(),
        };
    });

    return [...dynamicBlogs, ...staticPath];
}

// After completed the sitemap, perform npm run build, then run npm run start