import React from 'react';
import CardContainer from './CardContainer';

const Game = ({pokemons}) => {
    
    let team_1 = [...pokemons]
    let team_2 = setRandomTeam(team_1)
    let team_1_result = team_1.reduce((acc, prev) => acc += prev.base_experience, 0)
    let team_2_result = team_2.reduce((acc, prev) => acc += prev.base_experience, 0)


    function setRandomTeam(team){
        const temp_team = []
        const teamLength = team.length / 2;

        for(let i = 0; i < teamLength; i++) {
            let index = Math.floor(Math.random() * team.length)
            temp_team.push(team.splice(index, 1)[0])
        }       

        return temp_team
    }

    const handleClick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return ( 
        
        <div>
            <button onClick={handleClick}>Play Again</button>
            <CardContainer pokemons={team_1} hasWon={team_1_result > team_2_result} score={team_1_result} />

            <CardContainer pokemons={team_2} hasWon={team_2_result > team_1_result} score={team_2_result} />
        </div>
     );
}
 
export default Game;