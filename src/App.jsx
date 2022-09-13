import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [serie, setSerie] = useState({})

  useEffect (() => {
    
      axios 
          .get (`https://rickandmortyapi.com/api/location/${serie}`)
          .then (res => setSerie(res.data))
  })

  console.log(setSerie)

  return (
    <div className="App">

    <h1>Rick And Morty</h1>
     
    <input 
      type="text" 
      value={serie}
      onChange={e => setSerie(e.target.value)}
    />
     <button onclick={setSerie}>Search</button>
    </div>
  )
}

export default App
