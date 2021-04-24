import React from "react";
import Board from "./Components/Board"
import './Style/root.scss'

const App = () => {
  return  (
  <div className="app">
    <h1>Tic Tac Toe</h1>
    <small>by: Rakshit Gautam</small>
    <Board />
  </div>
  )
};

export default App;
