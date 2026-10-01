import { dateFormat } from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";
import type { PageProps } from "../../../types/slug.types"
import "@/styles/blog.css";


const fetchSingleBlog = async (slug: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get/${slug}`);
    const data = await response.json();
    return data;
}


export const generateMetadata = async ({ params }: PageProps) => {
    // 1. Await the params promise to resolve the object
    const resolvedParams = await params;

    // 2. Pass the slug into your fetch function
    const response = await fetchSingleBlog(resolvedParams.slug);

    return {
        title: response.title,
        description: response.excerpt,
        openGraph: {
            images: [response.thumbnail]
        }
    };
};

const SingleBlog = async ({ params }: PageProps) => {

    const { slug } = await params;
    const post = await fetchSingleBlog(slug);

    return (
        <>
            <section>
                <div className="flex items-center flex-col gap-4">
                    {
                        post?.thumbnail && <Image
                            src={post.thumbnail}
                            width={500}
                            height={250}
                            alt={post.title}
                            className="rounded-xl border w-[90%] md:w-175"
                        />
                    }
                    <h1 className="text-2xl md:text-4xl font-bold">{post.title}</h1>
                    {/* Category and Tags Wrappers */}
                    <div className="meta-of-a-blog space-y-2">
                        {/* Calender Wrapper */}
                        <div className="flex gap-2 items-center">
                            <Calendar className="text-gray-400 size-4" />
                            <p className="text-gray-400 text-xs">
                                Created on : {dateFormat(post.createdAt)}
                            </p>
                        </div>
                        {/* Category Wrapper */}
                        <div className="text-xs flex items-center gap-2">
                            <p>Category : </p>
                            <p className="badge border-gray-600 px-2 py-1 rounded bg-gray-600/30 w-fit">{post.categorySlug}</p>
                        </div>
                        {/* Tags Wrapper */}
                        {post?.keywords && <div className="text-xs flex items-center gap-2">
                            <p>Tags : </p>
                            {
                                post?.keywords.split(",").map((tags: string, i:number) => <p key={i} className="badge border-gray-600 px-1 py-0.5 rounded bg-gray-600/30 w-fit">{tags}</p>)
                            }
                        </div>
                        }
                    </div>

                    {/* Content Wrapper */}
                    <div className="content text-sm w-[90%] md:w-2/3 text-gray-300" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                </div>
            </section>
        </>
    )
}

export default SingleBlog;