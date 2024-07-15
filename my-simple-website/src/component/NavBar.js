import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/game">Guessing Numbers Game</Link></li>
               {/* 2단계 링크를 navbar에는 작성하지 않음
                    왜냐하면 1단계를 통과해야 2단계 링크를 보여줄 것이기 때문
               */}
               <li><Link to="/todoList">ToDo-List</Link></li>
               <li><Link to="/tictactoe">TicTapToe Game</Link></li>
               <li><Link to="/typingTest">Typing Test</Link></li>
               <li> <Link to="/movieRate">순위높은영화추천</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;