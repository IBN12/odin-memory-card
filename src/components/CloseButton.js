//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: CloseButton.js
// Description: Close button component for with SVG icon. 
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from "react";
import '../styles/styles.css';

// CloseButton(): The close button component container. 
export const CloseButton = (props) =>{

    const {setDisplayHowToPlay} = props;

    function closeHowToPlay(){
        console.log("Closing the 'How To Play' Window"); // Testing
        const mainMenu = document.querySelector('.main-menu-component-container');
        setDisplayHowToPlay(false);
        mainMenu.classList.remove('blur');
    }

    return (
        <>
            <button onClick={closeHowToPlay} className="close-button-component-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            </button>
        </>
    );

}