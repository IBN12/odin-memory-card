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
        this.howToPlay = this.howToPlay.bind(this);
    }

    componentDidMount(){
        console.log("The Main Menu Component Did Mount..."); // Testing
        const mainMenu = document.querySelector('.main-menu-component-container');
        const playAgainScreen = document.querySelector('.main-menu-component-container > div:nth-child(1)');

        // Attach the a background image for the "Play Game" main menu.
        if (this.props.displayBackgroundImage1) // true
        {
            mainMenu.setAttribute('id', 'display-background-image');
        }
        else // false
        {
            mainMenu.removeAttribute('id');
        }

        // Attach a 'display: flex' to the (Play Again) main menu screen.
        if (this.props.gameResultLoss)
        {
            playAgainScreen.setAttribute('id', 'play-again-screen');
        } 
        else 
        {
            playAgainScreen.removeAttribute('id');
        }
    }
    
    startGame(){
        console.log("User is playing the memory game"); // Testing
        
        // Check for if the player loses a game. (Play Again)
        if (this.props.gameResultLoss)
        {
            this.props.setGameResultLoss(false); // Set the loss result back to false to begin a new game after the loss and to escape the loss the screen.
            this.props.setPlayGame(true);
        }
        else // Check for if the player starts a regular game. (Play Game)
        {
            this.props.setDisplayMainMenu(false);
            this.props.setPlayGame(true);

            // Note: The displayMainMenu state variable will always be set to false to hide the 
            // (Play Game) Main Menu Screen. 
        }
    }

    backToMainMenu(){
        this.props.setGameResultLoss(false);
        this.props.setDisplayMainMenu(true);
        this.props.setDisplayBackgroundImage1(true);
    }

    howToPlay(){
        console.log("Click on the cards"); // Testing
    }

    render(){
        const {gameResultLoss, marginSpace, displayHowToPlayButton} = this.props;

        return(
            <div className="main-menu-component-container" style={{
                margin: `${marginSpace}px auto`
                }}>
                <div>
                    {gameResultLoss ? 
                        <>
                            <button type="button" onClick={this.startGame}>Play Again</button>
                            <button type="button" onClick={this.backToMainMenu}>Back to Main Menu</button>
                        </>
                        :
                            <button type="button" onClick={this.startGame}>Play Game</button>
                    }
                </div>

                <div>
                    {displayHowToPlayButton ?
                        <button style={{marginTop: "20px"}}  type="button" onClick={this.howToPlay}>How To Play?</button>
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}