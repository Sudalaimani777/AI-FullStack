"use client";
import Editor from "@/components/draft/Editor";
import { PostData } from "@/types/types";

const Draft = () => {

    const savePost = async ({ title, slug, ogImage, content, excerpt, metaDescription, category, keywords, status }: PostData) => {
        // console.log(title, "title");
        console.log("OG Image", ogImage);

        // API call for the backend 
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, slug, ogImage, content, excerpt, metaDescription, category, keywords, status })
        })

        if (!response.ok) {
            throw new Error("Post saving failed");
        }
    }

    return (
        <>
            <section className="p-8">
                <h1 className="font-bold text-2xl pb-3">Create a new post</h1>
                <Editor savePost={savePost} />
            </section>
        </>
    )
}

export default Draft;