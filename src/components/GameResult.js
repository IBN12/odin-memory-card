//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: GameResult.js
// Description: Will display the game result.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { savePreviousScore } from "../utils/save";
import { MainMenu } from "./MainMenu";

import { useEffect, useState } from "react";

// ResultLose(): Will display that the player loss.
export function ResultLose(props){
    const [marginSpace, setMarginSpace] = useState(0); // Will correct the margin space for each menu screen.

    const {gameResultLoss, setGameResultLoss, setPlayGame, setDisplayBackgroundImage1, setDisplayMainMenu} = props; // Destructuring Props.

    useEffect(() => {
        if (gameResultLoss)
        {
            setMarginSpace(40);
            setDisplayBackgroundImage1(false);
        }
        else
        {
            setMarginSpace(300);
        }
    }, [gameResultLoss, setDisplayBackgroundImage1]);

    return(
        <div className="result-lose-component-container">
            <p>You Lose</p>
            <p>Highest Score: {savePreviousScore.savedPreviousScore} </p>
            <MainMenu
                setDisplayMainMenu={setDisplayMainMenu}
                setDisplayBackgroundImage1={setDisplayBackgroundImage1}
                setGameResultLoss={setGameResultLoss}
                setPlayGame={setPlayGame}
                marginSpace={marginSpace}
                gameResultLoss={gameResultLoss}
            />
        </div>
    );
}

// ResultLost(): Will display that the player wins.
export function ResultWin(){
    return(
        <div className="result-win-component-container">
            You Win
        </div>
    );
}
