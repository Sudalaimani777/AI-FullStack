import { useEffect, useState } from "react"

export default function Main() {
    // The meme state object is initialized with default values for the top text, bottom text, and image URL. This allows the component to display a default meme when it first renders.
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    // The fetchMeme state variable is initialized as an empty array. This variable will be used to store the list of memes fetched from the API. When the component first renders, it will trigger the useEffect hook to fetch the memes and update this state variable with the retrieved data.
    const [fetchMeme, setFetchMeme] = useState([]);

    // The useEffect hook is used to fetch the list of memes from the API when the component mounts. The empty dependency array ensures that this effect runs only once, preventing unnecessary re-fetching of data on subsequent renders.
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setFetchMeme(data.data.memes))
    },[])

    // The handleChange function is an event handler that updates the meme state object whenever the user types in the input fields for the top and bottom text. It uses the name attribute of the input elements to determine which property of the meme state object to update, allowing for a dynamic and reusable function to handle changes for both input fields.
    const handleChange = e => {
        const {name,value} = e.currentTarget; //The name attribute of the input element is used to identify which property of the meme state object should be updated. The value attribute contains the new value that the user has entered in the input field.
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // The second useEffect hook is used to update the meme image whenever the fetchMeme state variable changes. This ensures that a new random meme image is selected and displayed whenever the list of memes is updated, such as after fetching data from the API.
    useEffect(() => {
        handleGetMemeImage();
    }, [fetchMeme]);

    // The handleGetMemeImage function is responsible for selecting a random meme image from the fetchMeme array and updating the meme state object with the new image URL. It first checks if the fetchMeme array is empty to prevent errors, then generates a random index to select a meme and updates the imageUrl property of the meme state object accordingly.
    const handleGetMemeImage = () => {
        if(!fetchMeme.length) return;
        const randomNumber = Math.floor(Math.random() * fetchMeme.length);
        const memeUrl = fetchMeme[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: memeUrl
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleGetMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}