import cloudStrife from '../images/Cloud_Strife.png';
import mario from '../images/Mario.webp';
import pikachu from '../images/pikachu.png'; 
import ryu from '../images/Ryu.webp';
import chunli from '../images/Chun-Li.webp';
import charmander from '../images/charmander.png';

import uniqid from "uniqid";

export let cards = [
    {
        image: cloudStrife,
        name: "Cloud Strife",
        id: uniqid(),
        clicked: false,
    },
    {
        image: mario,
        name: "Mario",
        id: uniqid(),
        clicked: false,
    },
    {
        image: pikachu,
        name: "Pikachu",
        id: uniqid(),
        clicked: false,
    },
    {
        image: ryu,
        name: "Ryu",
        id: uniqid(),
        clicked: false,
    },
    {
        image: chunli,
        name: "Chun Li",
        id: uniqid(),
        clicked: false,
    },
    {
        image: charmander,
        name: "Charmander",
        id: uniqid(),
        clicked: false,
    }
]