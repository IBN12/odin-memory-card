// saveCardDeck() Module: Will save the card deck during each level.
export const saveCardDeck = (() =>{
    let savedCardDeck = [];

    return {savedCardDeck};
})();

// savePreviousScore() Module: Will save the previous score after each loss or win. 
export const savePreviousScore = (() => {
    let savedPreviousScore = 0;

    return {savedPreviousScore};
})();
