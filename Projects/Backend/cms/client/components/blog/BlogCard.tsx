import { Blog } from "@/types/blog.types"
import Image from "next/image"
import Link from "next/link"


const BlogCard = ({ title, image, url, excerpt }: Blog) => {
    return (
        <>
            <div className="bg-gray-600/20 rounded-lg border flex flex-col gap-1 p-2 hover:scale-[1.03] transition-all delay-100 duration-300">
                <Image src={image} width={300} height={150} alt={title} className="w-full rounded-md "/>
                <h2 className="text-xl font-bold text-gray-200">{title}</h2>
                <p className="text-gray-400 text-sm">{excerpt}</p>
                <Link className="bg-zinc-600/70 py-2 px-3 rounded w-fit text-xs" href={`/blog${url}`}>Read more</Link>
            </div>
        </>
    )
}

export default BlogCard