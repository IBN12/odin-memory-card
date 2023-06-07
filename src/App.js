//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: App.js
// Description: This is the root component file.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Loading } from './components/Loading';
import { MainMenu } from './components/MainMenu';
import { PlayGame } from './components/PlayGame';
import { ResultLose, ResultWin } from './components/GameResult';

import { useState } from 'react';

// App(): Root component function
function App() {
  const [gameReady, setGameReady] = useState(false);
  const [playGame, setPlayGame] = useState(false);
  const [gameResultLoss, setGameResultLoss] = useState(false);
  const [gameResultWin, setGameResultWin] = useState(false);

  
  return (
    <div className="app-component-container">
      {gameReady ? 
        <MainMenu
          setPlayGame={setPlayGame}
        />
        :
        <Loading 
          setGameReady={setGameReady}
        />
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
        <ResultLose />
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
