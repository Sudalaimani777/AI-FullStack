import { useNavigate } from "react-router-dom"


const Home = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/about");
    }

  return (
    <>
        <section>
            <h1>Home</h1>
            <button onClick={handleNavigate}>Go To About</button>
        </section>
    </>
  )
}

export default Home