import logo from './logo.svg';
import './App.css';
import Game from './component/Game.js';
import GameToStep from './component/GameToStep.js';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home.js';
import NavBar from './component/NavBar.js';
import Header from './component/Header.js';
import TodoList from './component/TodoList.js';
import TicTapToe from './component/TicTacToe.js';

function App() {
 
  return(
    <div>
      <Header/>
      <NavBar/>
      <Routes> {/* 링크 모음  예전에는 Switch라np고 작성했는데 버전6부터 routes 이름 사용*/}
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/game-twoStep" element={<GameToStep/>}/>
        <Route path="/todoList" element={<TodoList/>}/>
        <Route path="/tictactoe" element={<TicTapToe/>}/>
      </Routes>
    </div>
  )
 
}

export default App;
