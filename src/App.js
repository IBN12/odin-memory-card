//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: App.js
// Description: This is the root component file.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { MainMenu } from './components/MainMenu';
import { PlayGame } from './components/PlayGame';
import { ResultLose } from './components/GameResultLose';
import { ResultWin } from './components/GameResultWin';
import { HowToPlay } from './components/HowToPlay';
import { MainTitle } from './components/MainTitle';

import { useState } from 'react';

// App(): Root component function
function App() {
  const [displayMainMenu, setDisplayMainMenu] = useState(true);
  const [displayBackgroundImage1, setDisplayBackgroundImage1] = useState(true);
  const [displayHowToPlay, setDisplayHowToPlay] = useState(false);
  const [playGame, setPlayGame] = useState(false);
  const [gameResultLoss, setGameResultLoss] = useState(false);
  const [gameResultWin, setGameResultWin] = useState(false);

  
  return (
    <div className="app-component-container">
      <MainTitle
        displayHowToPlay={displayHowToPlay}
      />

      {displayMainMenu ? 
        <MainMenu
          setPlayGame={setPlayGame}
          setDisplayMainMenu={setDisplayMainMenu}
          setDisplayHowToPlay={setDisplayHowToPlay}
          displayHowToPlay={displayHowToPlay}
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

      {displayHowToPlay ?
        <HowToPlay
          setDisplayHowToPlay={setDisplayHowToPlay}
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
        <ResultWin
          setPlayGame={setPlayGame}
          setDisplayMainMenu={setDisplayMainMenu}
          setGameResultWin={setGameResultWin}
        />
        :
        null
      }

    </div>
  );
}

export default App;
