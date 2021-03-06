import React from 'react';
import './App.css';
import Game from './Game';

const pokemon = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfly', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]


function App() {
  
  return (
    <div className="App">
      
      <h1>Pokedex</h1>

      <Game pokemons={pokemon}/>

    </div>
  );
}

export default App;

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png
