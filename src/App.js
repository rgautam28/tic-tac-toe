import React, {useState} from "react";
import Board from "./Components/Board"
import History from "./Components/History"
import { calculateWinner } from "./helpers";
import './Style/root.scss'

const App = () => {
  const [history, setHistory] = useState([ { board: Array(9).fill(null), isXNext: true}]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  
  const winner = calculateWinner(current.board);
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

  return  (
  <div className="app">
    <h1>Tic Tac Toe</h1>
    <small>by: Rakshit Gautam</small>
    <h2>{message}</h2>
    <Board board={current.board} handleSquareClick={handleSquareClick} />
    <History history={history} moveTo={moveTo} currentMove={currentMove}/> 
  </div>
  )
};

export default App;
