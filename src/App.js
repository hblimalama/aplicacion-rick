import { useState } from 'react';
import imagen1 from '../src/img/image.png';
import Characters from './Components/Characters';
import './App.css';

function App() {
  const[characters, setCharacters] = useState(null);
  const reqApi = async() => {
    //console.log("Clic");

    
    const api = await fetch("https://rickandmortyapi.com/api/character")
    console.log("Api ",api);
    const characterApi = await api.json();
    console.log("characterApi ",characterApi);
    setCharacters(characterApi.results);
    console.log("characters ",characters);

  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>Rick & Morty</h1>

        { characters ? (
          <Characters characters={characters} />
        ) : (
          <>
            <img src={imagen1} alt="Rick & Morty" className='img-home'/>

            <button onClick={reqApi} className='btn-search'>
              Buscar pesonajes
            </button>
          </>
        )
        }
      </header>

    </div>
  );
}

export default App;

