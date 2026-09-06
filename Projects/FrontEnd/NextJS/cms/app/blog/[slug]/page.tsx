import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

const SingleBlog = () => {

    const temporaryTags = ["spaceX", "NASA", "Google"];
    // const tempHTMl = `<p>Demo Content</p>`

    return (
        <>
            <section>
                <div className="flex items-center flex-col gap-4">
                    <Image
                        src={"/thumbnail/banner.png"}
                        width={500}
                        height={250}
                        alt="page title"
                        className="rounded-xl border w-[90%] md:w-175"
                    />
                    {/* Category and Tags Wrappers */}
                    <div className="meta-of-a-blog space-y-2">
                        {/* Calender Wrapper */}
                        <div className="flex gap-2 items-center">
                            <Calendar className="text-gray-400 size-4" />
                            <p className="text-gray-400 text-xs">
                                Created on : {dateFormat(new Date())}
                            </p>
                        </div>
                        {/* Category Wrapper */}
                        <div className="text-xs flex items-center gap-2">
                            <p>Category : </p>
                            <p className="badge border-gray-600 px-2 py-1 rounded bg-gray-600/30 w-fit">Space exploration</p>
                        </div>
                        {/* Tags Wrapper */}
                        <div className="text-xs flex items-center gap-2">
                            <p>Tags : </p>
                            {
                                temporaryTags.map((tags, i) => <p key={i} className="badge border-gray-600 px-1 py-0.5 rounded bg-gray-600/30 w-fit">{tags}</p>)
                            }
                        </div>
                    </div>

                    {/* Content Wrapper */}
                    {/* <div className="content" dangerouslySetInnerHTML={{__html:tempHTMl}}></div> */}
                    <p className="text-sm w-[90%] md:w-2/3 text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eum nemo consectetur soluta, voluptas ut ad architecto aut praesentium saepe neque optio quo fugiat explicabo? Optio est magnam tenetur nemo nihil rem aliquam facere iure adipisci aliquid repellat voluptatum minima voluptas, aut omnis distinctio. Corrupti consequuntur fugiat iste eveniet laborum.
                    </p>
                </div>
            </section>
        </>
    )
}

export default SingleBlog;