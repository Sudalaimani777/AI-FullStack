import BlogCard from "@/components/blog/BlogCard"
import { blogConfig } from "@/data/blogData"



const BlogPage = () => {
    return (
        <>
            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
                {
                    blogConfig.map(blog => {
                        return <BlogCard key={blog.id} title={blog.title} image={blog.image} excerpt={blog.excerpt} url={blog.url} />
                    })
                }
            </section>
        </>
    )
}

export default BlogPage;