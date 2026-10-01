import BlogCard from "@/components/blog/BlogCard"
import { Blog } from "@/types/blog.types";

const BlogPage = async () => {

    const fetchAllBlogs = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    const blogData = await fetchAllBlogs();

    return (
        <>
            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
                {
                    blogData.map((blog: Blog) => {
                        return <BlogCard key={blog.id} title={blog.title} thumbnail={blog.thumbnail} excerpt={blog.excerpt} slug={blog.slug} />
                    })
                }
            </section>
        </>
    )
}

export default BlogPage;