import { useEffect, useState } from 'react'
import axios from 'axios'
import portada from './assets/rick-and-morty-portada.jpg'
import './App.css'
import ResidentInfo from './components/ResidentInfo'

const App = () => {
  const [serie, setSerie] = useState({});
  const [typeId, setTypeId] = useState("");

  useEffect (() => {
      const randomId = Math.floor(Math.random() * 126) +1   
      axios 
          .get (`https://rickandmortyapi.com/api/location/${randomId}`)
          .then (res => setSerie(res.data));
  }, [])

  const searchType = () =>{
    axios 
    .get (`https://rickandmortyapi.com/api/location/${typeId}`)
    .then (res => setSerie(res.data));
}

  

  console.log(serie)

  return (
    <div className="App">
      
      <div className='container-img'> 
        <img className='imagen' src={portada} alt="portada" />
        <h1 className='title'>Rick And Morty</h1>
      </div> 
    
      <div className='container-search'> 
        <input 
          className='search'
          type="text" 
          value={typeId}
          onChange={e => setTypeId(e.target.value)}
        />
        <button className='button' onClick={searchType}>Search</button>
        
      
      </div>
    

      <div className='container-date'>
        <h2>{serie.name}</h2> 
        <div className='date'>  
          <h4><br /> Type: <br /> {serie.type}</h4>
          <h4><br /> Dimensión: <br />{serie.dimension}</h4>
          <h4><br /> Population: <br />{serie.residents?.length}</h4>
        </div>  
      </div>   


      <div className='container-residents'> 
        <h3>RESIDENTS</h3>  
        <div className = 'residents'> 
          {serie.residents?.map((character) =>(
            <ResidentInfo 
            character={character}
            key= {character}/>
        
          ))}
        </div>   
      </div> 
    
     
     
    
  </div>

  )
}

export default App
