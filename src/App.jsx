import { useState } from 'react'

import './App.css'
import Header from './Header.jsx'
function App() {
  const [query, setQuery] = useState("")

  const callServer = () => {
    console.log("CLICK!")
  }
  return (
    <>
      <div>
        <Header />
        <h2 id="buscador">Buscador de Usuarios</h2>
        <input 
        type="text"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Texto a buscar"
        />
        <button
        id="botonsearch"
        onClick={()=> callServer()}
        >Buscar</button>
      </div>
     
    </>
  )
}

export default App
