import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import NavBar from './component/NavBar';

function App() {
  return(
    <div>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </div>
  )
}

export default App;
