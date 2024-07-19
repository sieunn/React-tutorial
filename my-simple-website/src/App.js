import './App.css';
import Game from './component/Game.js';
import GameToStep from './component/GameToStep.js';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home.js';
import NavBar from './component/Layout/NavBar.js';
import Footer from './component/Layout/Footer.js';
/*
ERROR in ./src/App.js 10:0-43  -> 에러가 발생한 파일 위치
Module not found: Error: Can't resolve './component/NavBar.js' in 'C:\Users\user1\react-workspace\my-simple-website\src'
-> 에러가 발생한 파일위치 App.js에서 해당 파일 위치 찾을 수 없음 이라는 에러 발생

*/
import Header from './component/Layout/Header.js';
import TodoList from './component/TodoList.js';
import TicTapToe from './component/TicTapToe/TicTacToe.js';
import TicTacToeTwoStep from './component/TicTapToe/TicTacToeTwoStep.js';
import TypingTest from './component/TypingTest.js';
import MovieRating from './component/Movie/MovieGrade.js';
import Coffee from './component/Projects/Coffee.js';

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
        <Route path="/ttt-twoStep" element={<TicTacToeTwoStep/>}/>
        <Route path="/typingTest" element={<TypingTest/>}/>
        <Route path="/movieRate"    element =  { <MovieRating />  } />
        <Route path="/project"    element =  { <Coffee />  } />
      </Routes>
      <Footer/>
    </div>
  )
 
}

export default App;
