"use client";
import { EditorProps, PostData } from "@/types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { slugify } from "slugmaster";
import ImageUpload from "../ImageUpload";


const Editor = ({ savePost }: EditorProps) => {

    const { register, handleSubmit } = useForm<PostData>();
    const [content, setContent] = useState("");
    const [ogImage, setOgImage] = useState("");

    const handleDraftSubmit = (data: PostData) => {
        console.log(data);
        // Generate the slug based on the draft title :-
        const generateSlug = slugify(data.title);

        savePost({ ...data, slug: generateSlug, content, ogImage });
    }

    const handleDraftContentChange = () => {

    }

    return (
        <>
            <section>
                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(handleDraftSubmit)}
                >
                    {/* Input For Title */}
                    <input
                        type="text"
                        id="titleId"
                        placeholder="Enter your post title"
                        className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
                        {...register("title")}
                    />
                    {/* React Quill Text area */}
                    <ReactQuill
                        value={content}
                        onChange={handleDraftContentChange}
                        formats={
                            ["header", "font", "size", "bold", "italic", "underline", "strike", "list", "link", "image", "code-block"]
                        }
                        modules={{
                            toolbar: [
                                [{ header: [1, 2, 3, false] }],
                                [{ font: [] }],
                                [{ size: ["small", false, "large", "huge"] }],
                                ["bold", "italic", "underline", "strike"],
                                [{ list: "ordered" }, { list: "bullet" }],
                                ["link", "image", "code-block"],
                            ]
                        }}
                    />
                    {/* Input for excerpt */}
                    <input
                        type="text"
                        id="excerptId"
                        {...register("excerpt")}
                        className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
                        placeholder="Enter your excerpt"
                    />
                    {/* Input for Category */}
                    <input
                        type="text"
                        id="categoryId"
                        {...register("category")}
                        className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
                        placeholder="Enter your category"
                    />
                    <h2 className="text-xl font-bold">SEO Data</h2>
                    {/* Input for Image Upload */}
                    <ImageUpload returnImage={setOgImage} />
                    {/* Input for Keyword */}
                    <input
                        type="text"
                        id="keywordId"
                        {...register("keywords")}
                        className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
                        placeholder="Enter your Keywords"
                    />
                    {/* Input for description */}
                    <input
                        type="text"
                        id="metaDescriptionId"
                        {...register("metaDescription")}
                        className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
                        placeholder="Enter your description"
                    />
                    {/* Select the Status for the draft */}
                    <div className="flex gap-2">
                        <select
                            id="statusId"
                            {...register("status")}
                            className="font-bold text-lg bg-zinc-600 px-3 py-1 rounded-sm outline-none"
                        >
                            <option value="DRAFT">Draft</option>
                            <option value="PUBLISHED">Publish</option>
                        </select>
                        <button
                            className="bg-zinc-800 px-3 py-2 rounded cursor-pointer"
                            type="submit"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}
export default Editor;