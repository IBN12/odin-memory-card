import { cards } from "./cards";
import { levels } from "./levels";
import { saveCardDeck} from "./save";

// shffleCards(): Will shuffle a deck of cards after each level.
export function shuffleCards(level, shuffleButtonClicked){
    const cardAmount = levels(level);

    if (!shuffleButtonClicked)
    {
        let cardArr = [];

        for (let i = 0; i < cardAmount; i++){
            let randomNumber;
            let noMatch = false;
    
            while(!noMatch){
                randomNumber = Math.floor(Math.random() * (cards.length));
    
                if (cardArr.includes(cards[randomNumber]) === false)
                {
                    noMatch = true;
                }
            }
    
            cardArr.push(cards[randomNumber]);
        }
    
        console.log("The shuffled card deck is: ", cardArr); // Testing
        saveCardDeck.savedCardDeck = cardArr;
        console.log("Saved Card Deck: ", saveCardDeck.savedCardDeck); // Testing
        console.log("\n"); // Testing
        
        return cardArr;
    }
    else
    {
        let cardArr = [];

        for (let i = 0; i < saveCardDeck.savedCardDeck.length; i++)
        {
            let randomNumber; 
            let noMatch = false;

            while(!noMatch)
            {
                randomNumber = Math.floor(Math.random() * (saveCardDeck.savedCardDeck.length));

                if (cardArr.includes(saveCardDeck.savedCardDeck[randomNumber]) === false)
                {
                    noMatch = true;

                }
            }

            cardArr.push(saveCardDeck.savedCardDeck[randomNumber]);
        }

        console.log("The shuffled card deck after the save: ", cardArr); // Testing
        return cardArr;
    }
}
