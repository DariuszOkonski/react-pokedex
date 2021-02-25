import React from 'react';
import './Card.css';

const Card = () => {
    return ( 
        <div className="Card">
            <h3 className="Card__header">Jiggly puff</h3>

            <div className="Card__img">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="some name" />
            </div>

            <p className="Card__description">Type: normal</p>
            <p className="Card__description">Exp: 95</p>
        </div>
     );
}
 
export default Card;