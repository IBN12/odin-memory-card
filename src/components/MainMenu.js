//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: MainMenu.js
// Description: The main menu screen.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, {Component} from "react";

// MainMenu Class: The main menu class component
export class MainMenu extends Component{
    constructor(props){
        super(props);
        this.startGame = this.startGame.bind(this);
    }
    
    startGame(){
        console.log("User is playing the memory game"); // Testing
        const mainMenu = document.querySelector('.main-menu-component-container');
        mainMenu.classList.add('hide-screen');

        // Note: May need to set gameReady back to false.
        // gameReady = false;

        this.props.setPlayGame(true);
    }


    render(){
        return(
            <div className="main-menu-component-container">
                <button type="button" onClick={this.startGame}>Play Game</button>
            </div>
        );
    }
}