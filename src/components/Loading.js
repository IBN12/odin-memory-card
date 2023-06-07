////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: Loading.js
// Description: Will display a loading screen.
// Notes: N/A
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, {Component} from "react";
import '../styles/styles.css';

export class Loading extends Component{
    constructor(props){
        super(props);
        this.random = "";
    }

    componentDidMount(){
        this.loadingPage();
    }

    loadingPage(){
        const loadingPage = document.querySelector('.loading-component-container');
        setTimeout(() => {
            loadingPage.textContent = "";
            this.props.setGameReady(true);
        }, 2000);
    }

    render(){
        return(
            <div className="loading-component-container">Loading...</div>
        );
    }
}