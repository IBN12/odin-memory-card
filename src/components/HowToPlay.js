//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: HowToPlay.js
// Description: The How To Play screen.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { CloseButton } from "./CloseButton";

// HowToPlay(): The how to play screen.
export const HowToPlay = (props) => {
    const {setDisplayHowToPlay} = props;
    return(
        <div className="how-to-play-component-container">
            <div><div>?</div></div>
            <div>
                <CloseButton
                    setDisplayHowToPlay={setDisplayHowToPlay}
                />
            </div>
            <div>
                <p>Welcome to VG - Memory Character!</p>
                <p>There are currently 7 levels in the game with 16 character cards for you to choose from.</p>
                <p>Each card contains a video game character from a game that you may have played or heard of.</p>
                <p>
                    The goal of the game is to click on each card once to progress to the next level. Clicking on the
                    same card twice will result in a loss and your score being set back to zero.
                </p>
            </div>
        </div>
    );
}