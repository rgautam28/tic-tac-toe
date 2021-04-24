import React, {useState} from "react";
import Board from "./Components/Board"
import History from "./Components/History"
import StatusMessage from "./Components/StatusMessage"
import { calculateWinner } from "./helpers";
import './Style/root.scss'

const New_Game =[ { board: Array(9).fill(null), isXNext: true}]

const App = () => {
  const [history, setHistory] = useState(New_Game);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  
  const {winner, winningSquares} = calculateWinner(current.board);
  console.log(winner);

  const message = winner ? `winner is ${winner}`: `Next player is ${current.isXNext ? 'X' : 'O'}`

    console.log(history);

    const handleSquareClick = (position) =>{
        if(current.board[position] || winner){
            return;
        }
        
        setHistory( (prev) => {
          const last= prev[prev.length-1]



            const newBoard = last.board.map((Square, pos) => {
                if(pos == position){
                    return last.isXNext ? 'X' : 'O';
                }
                return Square
            });
            return prev.concat({board: newBoard, isXNext: !last.isXNext})
        });
        setCurrentMove(prev => prev+1);
    };

    const moveTo = (move) =>{
      setCurrentMove(move);
    }

    const onNewGame = () =>{
      setHistory(New_Game);
      setCurrentMove(0);
    }

  return  (
  <div className="app">
    <h1>Tic Tac Toe</h1>
    <small>by: Rakshit Gautam</small>
    <StatusMessage winner={winner} current={current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
    <button type="button" onClick={onNewGame}>Start New Game</button>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/> 
  </div>
  )
};

export default App;
