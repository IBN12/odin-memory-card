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
    const [row, setRow] = useState(0);

    let shuffleButtonClicked = false;
    const { playGame, setPlayGame, gameResultLoss, setGameResultLoss, gameResultWin, setGameResultWin } = props; // Destructuring props

    useEffect(() =>{
        saveCardDeck.savedCardDeck = shuffleCards(level, shuffleButtonClicked);
        setInGameCards(saveCardDeck.savedCardDeck);

        // Set the rows after each level when new cards are added. 
        if (level === 1){
            setRow(1);
        }
        else if (level === 2){
            setRow(2);
        }
        else if (level === 3){
            setRow(2);
        }
        else if (level === 4){
            setRow(3);
        }
        else if (level === 5){
            setRow(3);
        }
        else if (level === 6){
            setRow(4);
        }
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

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 200px)",
                gridTemplateRows: `repeat(${row}, 200px)`,
                justifyContent: "center",
                gap: "10px",
            }}>
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

