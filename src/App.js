//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: App.js
// Description: This is the root component file.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { MainMenu } from './components/MainMenu';
import { PlayGame } from './components/PlayGame';
import { ResultLose, ResultWin } from './components/GameResult';

import { useState } from 'react';

// App(): Root component function
function App() {
  const [displayMainMenu, setDisplayMainMenu] = useState(true);
  const [displayHowToPlayButton, setDisplayHowToPlayButton] = useState(true);
  const [displayBackgroundImage1, setDisplayBackgroundImage1] = useState(true);
  const [playGame, setPlayGame] = useState(false);
  const [gameResultLoss, setGameResultLoss] = useState(false);
  const [gameResultWin, setGameResultWin] = useState(false);

  
  return (
    <div className="app-component-container">
      {displayMainMenu ? 
        <MainMenu
          setPlayGame={setPlayGame}
          setDisplayMainMenu={setDisplayMainMenu}
          displayHowToPlayButton={displayHowToPlayButton}
          setDisplayHowToPlayButton={setDisplayHowToPlayButton}
          displayBackgroundImage1={displayBackgroundImage1}
        />
        :
        null
      }

      {playGame ?
        <PlayGame
          playGame={playGame}
          setPlayGame={setPlayGame}
          gameResultLoss={gameResultLoss}
          setGameResultLoss={setGameResultLoss}
          gameResultWin={gameResultWin}
          setGameResultWin={setGameResultWin}
        />
        :
        null
      }

      {gameResultLoss ?
        <ResultLose
          gameResultLoss={gameResultLoss}
          setDisplayMainMenu={setDisplayMainMenu}
          setGameResultLoss={setGameResultLoss}
          setPlayGame={setPlayGame}
          setDisplayBackgroundImage1={setDisplayBackgroundImage1}
        />
        :
        null
      }

      {gameResultWin ?
        <ResultWin />
        :
        null
      }

    </div>
  );
}

export default App;
