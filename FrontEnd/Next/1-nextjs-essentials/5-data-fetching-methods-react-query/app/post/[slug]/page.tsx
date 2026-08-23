// import Post from "@/components/Post";
"use client";
import { useEffect, useState } from "react";


const PostData = ({ params }) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const { slug } = await params;
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,
                    {
                        next:{
                            revalidate:3600
                        }
                    }
                );
                const data = await response.json();
                setPost(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchPost();
    }, []);

    console.log(post);

    return (
        <>
            <h1>{post.title}</h1>
        </>
    )
}

export default PostData;