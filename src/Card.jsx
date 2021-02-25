import React from 'react';
import './Card.css';

const Card = ({id, name, type, base_experience}) => {    
    const local_id = `00${id}`.slice(-3);
    const url_address = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${local_id}.png`
    
    return ( 
        <div className="Card">
            <h3 className="Card__header">{name}</h3>

            <div className="Card__img">
                <img src={url_address} alt={name} />
            </div>

            <p className="Card__description">Type: {type}</p>
            <p className="Card__description">Exp: {base_experience}</p>
        </div>
     );
}
 
export default Card;