"use client";
import { useQuery } from "@tanstack/react-query"


const PageQuery = ({ params }: { params: { slug: string } }) => {


    const { data, error, isLoading } = useQuery({
        queryKey: ["post", params.slug],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`).then(res => res.json());

            if(!response.ok){
                throw new Error("Failed to fetch post")
            }
            return response;
        }
    })

    return (
        <>
            {
                data?.title
            }
        </>
    )
}

export default PageQuery