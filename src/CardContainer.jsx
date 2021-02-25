import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = ({pokemons}) => {

    console.log(pokemons)
    return ( 
        <div className="CardContainer">
            {
                pokemons.map(pokemon => <Card key={pokemon.id} {...pokemon} />)
            }            
        </div>
     );
}
 
export default CardContainer;