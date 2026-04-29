import { useState } from "react";
import { animeData } from "./Data/animeData";

function App (){

  const [watchlist, setWatchlist] = useState([]);

  const handleAddToCart = id => {
    const watchListedAnime = animeData.find(anime => anime.id === id);
    setWatchlist([...watchlist, watchListedAnime]);

  }

  const handleRemoveCart = id => {
    const remainigAnime = watchlist.filter(anime => anime.id !== id);
    setWatchlist(remainigAnime);
  }

  
  return (
    <>
      {/* All Anime */}
      <section>
        {
          animeData && animeData.map(anime => <p key={anime.id}>{anime.title} - <span><button onClick={() => handleAddToCart(anime.id)}>Add To Watchlist</button></span></p>)
        }
      </section>

      {/* Watchlist Anime */}
      <section>
        {
          watchlist && watchlist.map(anime => <p key={anime.id}>{anime.title} - <span><button onClick={() => handleRemoveCart(anime.id)}>Remove</button></span></p>)
        }
      </section>
    </>
  )
}
export default App;