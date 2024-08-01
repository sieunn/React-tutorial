import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import UserList from './UserList';
import TodoList from './TodoList';
import Navbar from "./NavBar";

function App() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Navbar />} />
                <Route path='/userlist' element={<UserList />} />
                <Route path='/todolist' element={<TodoList />} />
            </Routes>
        </Router>
    )
}
export default App;