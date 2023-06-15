//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: MainMenu.js
// Description: The main menu screen.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, {Component} from "react";
import '../styles/styles.css';

// MainMenu Class: The main menu class component
export class MainMenu extends Component{
    constructor(props){
        super(props);
        this.startGame = this.startGame.bind(this);
        this.backToMainMenu = this.backToMainMenu.bind(this);
        this.openHowToPlay = this.openHowToPlay.bind(this);
    }

    componentDidMount(){
        console.log("The Main Menu Component Did Mount..."); // Testing
        const mainMenu = document.querySelector('.main-menu-component-container');

        // Attach the a background image for the "Play Game" main menu.
        if (this.props.displayBackgroundImage1)
        {
            mainMenu.setAttribute('id', 'display-background-image');
        }
        else
        {
            mainMenu.removeAttribute('id');
        }
    }
    
    startGame(){
        console.log("User is playing the memory game"); // Testing
        
        // Check for if the player loses a game. (Play Again|Back to Main Menu)
        if (this.props.gameResultLoss)
        {
            this.props.setGameResultLoss(false); // Set the loss result back to false to begin a new game after the loss and to escape the loss the screen.
            this.props.setPlayGame(true);
        }
        else // Check for if the player starts a regular game. (Play Game|How To Play?)
        {
            this.props.setDisplayMainMenu(false);
            this.props.setPlayGame(true);

            // Note: The displayMainMenu state variable will always be set to false to hide the 
            // (Play Game|How To Play) Main Menu Screen during game Mode. 
        }
    }

    backToMainMenu(){
        this.props.setGameResultLoss(false);
        this.props.setDisplayMainMenu(true);
        this.props.setDisplayBackgroundImage1(true);
    }

    openHowToPlay(){
        this.props.setDisplayHowToPlay(true);
        const mainMenu = document.querySelector('.main-menu-component-container');
        mainMenu.classList.add('blur');
    }

    render(){
        const {gameResultLoss, marginSpace} = this.props;

        return(
            <div className="main-menu-component-container" style={{margin: `${marginSpace}px auto`}}>
                <div>
                    {gameResultLoss ? 
                        <>
                            <button type="button" onClick={this.startGame}>Play Again</button>
                            <button type="button" onClick={this.backToMainMenu}>Back to Main Menu</button>
                        </>
                        :
                        <>
                            <button type="button" onClick={this.startGame}>Play Game</button>
                            <button type="button" onClick={this.openHowToPlay}>How To Play</button>
                        </>     
                    }
                </div>
            </div>
        );
    }
}