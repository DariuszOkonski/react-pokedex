import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = ({pokemons, hasWon, score}) => {
    let colorClass = hasWon ? 'CardContainer__header winner' : 'CardContainer__header looser'

    return ( 
        <div className="CardContainer">
            <p className={colorClass}>{hasWon ? 'Winner': 'Looser'}</p>
            <p className='CardContainer__header'>score: {score}</p>

            <div className="CardContainer__inner">
                {
                    pokemons.map(pokemon => <Card key={pokemon.id} {...pokemon} />)
                } 

            </div>
        </div>
     );
}
 
export default CardContainer;