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
    const [backgroundColor, setBackgroundColor] = useState("");

    let shuffleButtonClicked = false;
    const { setPlayGame, gameResultLoss, setGameResultLoss, setGameResultWin } = props; // Destructuring props

    useEffect(() =>{
        saveCardDeck.savedCardDeck = shuffleCards(level, shuffleButtonClicked);
        setInGameCards(saveCardDeck.savedCardDeck);

        // Set the rows after each level when new cards are added. 
        if (level === 1){
            setRow(1);
            setBackgroundColor("#fbbf24");
        }
        else if (level === 2){
            setRow(2);
            setBackgroundColor("#fb923c");
        }
        else if (level === 3){
            setRow(2);
            setBackgroundColor("#22d3ee");
        }
        else if (level === 4){
            setRow(3);
            setBackgroundColor("#a3e635");
        }
        else if (level === 5){
            setRow(3);
            setBackgroundColor("#4ade80");
        }
        else if (level === 6){
            setRow(4);
            setBackgroundColor("#2dd4bf");
        }
        else if (level === 7){
            setRow(4);
            setBackgroundColor("#c084fc");
        }
    }, [level, shuffleButtonClicked]);

    function cardClicked(e){
        console.log(e.target);
        shuffleButtonClicked = true;

        setInGameCards((shuffleCards(level, shuffleButtonClicked)));

        changeLevel(e, inGameCards, level, setLevel, setPlayGame, setGameResultLoss, setGameResultWin);
        changeScore(score, setScore, gameResultLoss); 

        new Audio(clickSound).play(); // Click Sound
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
                gridTemplateColumns: "repeat(4, 240px)",
                gridTemplateRows: `repeat(${row}, 240px)`,
                justifyContent: "center",
                gap: "30px",
            }}>
                {inGameCards.map(obj => <button style={{
                    border: `1px solid ${backgroundColor}`,
                    borderRadius: "10px",
                    backgroundColor: `${backgroundColor}`,
                }} 
                    onClick={cardClicked} 
                    key={obj.id}>
                    <img 
                        src={obj.image}
                        alt={obj.name}
                    />
                    {obj.name}
                </button>)}
            </div>
        </div>
    );
}

