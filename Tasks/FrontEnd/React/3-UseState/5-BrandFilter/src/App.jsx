// import { useState } from 'react'
import { useState } from 'react';
import { animeData } from './Data/anime.js'
import Form from './Shared/Form.jsx'

function App() {

  const [search, setSearch] = useState("");

  const handleSubmit = e => e.preventDefault();

  const handleAnimeFiler = e => setSearch(e.target.value);

  const filterAnime = animeData.filter(anime => anime.animeName.toLowerCase().includes(search.toLowerCase()));
 
  return (
    <>
      <section>
        <Form onSubmit={handleSubmit}>
           <p>
              <label htmlFor="searchAnime">Search Anime</label>
              <input 
                type="text" 
                name="searchAnime" 
                id="searchAnime" 
                onChange={handleAnimeFiler}
                value={search}
              />
           </p>
        </Form>
      </section>
      <section>
        { animeData && filterAnime.map(anime => (
          <h3 id={anime.id}>{anime.animeName}</h3>
        ))}
      </section>
    </>
  )
}

export default App
