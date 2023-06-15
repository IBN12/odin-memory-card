//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: GameResultWin.js
// Description: Will display the winning result
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import '../styles/styles.css';
import { savePreviousScore } from '../utils/save';

// ResultWin(): Will display that the player won the game. 
export const ResultWin = (props) => {
    const {setPlayGame, setDisplayMainMenu, setGameResultWin} = props;

    function playGameAgain(){
        setPlayGame(true);
        setGameResultWin(false);
    }

    function backToMainMenu(){
        setDisplayMainMenu(true);
        setGameResultWin(false);
    }

    return(
        <div className="result-win-component-container">
            <p>You Win!!</p>
            <p>Highest Score: {savePreviousScore.savedPreviousScore}</p>
            <p>Congratulations! And Thank You For Playing.</p>
            <button onClick={playGameAgain}>Play Again</button>
            <button onClick={backToMainMenu}>Back To Main Menu</button>
        </div>
    );
}