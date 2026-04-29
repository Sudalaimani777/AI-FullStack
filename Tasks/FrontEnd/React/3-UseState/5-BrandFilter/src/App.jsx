// import { useState } from 'react'
import { useState } from 'react';
import { animeData } from './Data/anime.js'
import Form from './Shared/Form.jsx'

function App() {
  const [search, setSearch] = useState("");

  const handleSubmit = e => e.preventDefault();
 
  const handleAnimeSearch = e => setSearch(e.target.value);

  const filterAnime = animeData.filter(anime => anime.animeName.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
     <section>
        <Form onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <input type="text" name="search" id="search" onChange={handleAnimeSearch} value={search}/>
        </Form>
     </section>
     <section>
        {
          animeData && filterAnime.map(anime => (
            <h4 key={anime.id}>{anime.animeName}</h4>
          ))
        }
     </section>
    </>
  )
}

export default App
