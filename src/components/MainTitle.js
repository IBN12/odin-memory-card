//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: MainTitle.js
// Description: The main title for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect } from "react";

// MainTitle(): Application title. 
export const MainTitle = (props) =>{
    const {displayHowToPlay} = props;

    useEffect(() => {
        const mainTitle = document.querySelector('.main-title-component-container');
        if (displayHowToPlay) /* Blur the main title also if the how to play menu is opened. */
        {
            mainTitle.classList.add('blur');
        }
        else
        {
            mainTitle.classList.remove('blur');
        }
    });

    return (
        <>
            <h1 className="main-title-component-container">VIDEO GAME MEMORY CHARACTER</h1>
        </>
    );
}