// "use client";

// import { useEffect, useState } from "react"


// const Post = () => {

//     const [post, setPost] = useState([]);

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//                 const data = await response.json();
//                 setPost(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchPost();
//     }, []);

//     console.log(post);

//     return (
//         <div>Post</div>
//     )
// }

// export default Post