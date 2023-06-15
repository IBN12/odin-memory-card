export const levels = (level) =>{
    let amountOfCardsInGame = 0;

    switch(level){
        case 1:
            amountOfCardsInGame = 4;
            break;
        case 2:
            amountOfCardsInGame = 6;
            break;
        case 3:
            amountOfCardsInGame = 8;
            break; 
        case 4: 
            amountOfCardsInGame = 10;
            break;
        case 5:
            amountOfCardsInGame = 12;
            break;
        case 6:
            amountOfCardsInGame = 14;
            break;
        case 7:
            amountOfCardsInGame = 16;
            break;
        default:
            alert("Level doesn't exist");
    }

    return amountOfCardsInGame;
}