//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: PlayGame.js
// Description: Main memory game.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { shuffleCards } from "../utils/shuffle";
import { saveCardDeck } from "../utils/save";
import { changeLevel, changeScore } from "../utils/clicked";

import { DisplayLevel } from "./DisplayLevel";
import { DisplayScore } from "./DisplayScore";

import { useEffect, useState } from "react";
import clickSound from '../assets/sounds/mixkit-classic-click-1117.wav';

// PlayGame(): Main game will be played here. 
export function PlayGame(props){

    const [inGameCards, setInGameCards] = useState([]);
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);

    let shuffleButtonClicked = false;
    const { playGame, setPlayGame, gameResultLoss, setGameResultLoss, gameResultWin, setGameResultWin } = props; // Destructuring props

    useEffect(() =>{
        saveCardDeck.savedCardDeck = shuffleCards(level, shuffleButtonClicked);
        setInGameCards(saveCardDeck.savedCardDeck);
    }, [level, shuffleButtonClicked]);

    function cardClicked(e){
        console.log(e.target);
        shuffleButtonClicked = true;

        setInGameCards((shuffleCards(level, shuffleButtonClicked)));

        changeLevel(e, inGameCards, level, setLevel, setPlayGame, setGameResultLoss);
        changeScore(score, setScore, gameResultLoss); 

        new Audio(clickSound).play();
    }

    return(
        <div className="play-game-component-container">
            <div>
                <DisplayLevel
                    level={level} 
                />

                <DisplayScore
                    score={score}
                />
            </div>

            <div>
                {inGameCards.map(obj => <button onClick={cardClicked} key={obj.id}>
                    <img 
                        src={obj.image}
                        alt={obj.name}
                    />
                </button>)}
            </div>
        </div>
    );
}

