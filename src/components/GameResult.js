//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: GameResult.js
// Description: Will display the game result.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { savePreviousScore } from "../utils/save";

// ResultLose(): Will display that the player loss.
export function ResultLose(){
    return(
        <div className="result-lose-component-container">
            <p>You Lose</p>
            <p>Highest Score: {savePreviousScore.savedPreviousScore} </p>
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
