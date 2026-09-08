"use client";
import Editor from "@/components/draft/Editor";
import { PostData } from "@/types/types";

const Draft = () => {

    const savePost = ({ title, content, excerpt, metaDescription, category, keywords, status }:PostData) => {
        // console.log(title, "title");
        // API call for the backend 
    }

    return (
        <>
            <section className="p-8">
                <Editor savePost={savePost} />
            </section>
        </>
    )
}

export default Draft;