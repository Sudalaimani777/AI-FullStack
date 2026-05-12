import {useDispatch, useSelector} from "react-redux"
import './App.css'
import { useEffect } from "react"; 
import { loadPosts } from "./Slice/postSlice";

function App() {

  const dispatch = useDispatch();
  const {posts, status} = useSelector(state => state.posts);
  console.log(posts, status)

  useEffect(() => {
    if(status === "idle"){
      dispatch(loadPosts());
    }
  })
 

  return (
    <>
      <section>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Failed to load posts.</p>}
        {status === "success" && (
          <div>
            {posts.posts?.map(post => (
              <p key={post.id}>{post.title}</p>
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default App
