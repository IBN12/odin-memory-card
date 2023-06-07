import { savePreviousScore } from "./save";

// CountMod() Module: Will control the count flow for all "true" clicks.
const countMod = (() => {
    let trueCount = 0;

    return {trueCount};
})();

// changeLevel(): Changes the level after each win.
export function changeLevel(e, inGameCards, level, setLevel, setPlayGame, setGameResultLoss){
    console.log("You clicked on the " + e.target.alt + " card."); // Testing
  

    inGameCards.forEach((obj) => {
        if (obj.name === e.target.alt)
        {
            if (obj.clicked === true) // If the player has already clicked on the card. 
            {
                console.log("You already clicked on the " + e.target.alt + " card."); // Testing
                setPlayGame(false); // Remove the play game screen.
                setGameResultLoss(true); // Game over.

                // Set the all the clicked cards back to false.
                inGameCards.forEach((obj) => {
                    obj.clicked = true;
                });
            }
            else
            {
                obj.clicked = true;
                countMod.trueCount++;
                console.log("True Count: ", countMod.trueCount); // Testing
            }
        }
    });

    // Player wins the game and moves on to the next level. 
    if (countMod.trueCount === inGameCards.length)
    {
        setLevel(level + 1);
        countMod.trueCount = 0;

    }
}

// changeScore(): Changes the score after each click.
export function changeScore(score, setScore, gameResultLoss)
{
    if (!gameResultLoss)
    {
        savePreviousScore.savedPreviousScore = score;
    }
    
    setScore(score + 2);
}

