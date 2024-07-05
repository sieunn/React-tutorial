import logo from './logo.svg';
import './App.css';
import Game from './component/Game.js';
import GameToStep from './component/GameToStep.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>홈페이지 오신것을 환영합니다.</h1>
       <Game/>
       <GameToStep/>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>이 홈페이지는 간단한 리액트 홈페이지 입니다.</p>
        </section>
        <section>
          <h2>Contect</h2>
          <p>Email : contect@email.com</p>
        </section>
      </main>
      <footer>
      <p>&copy; 2024 My website</p>
      </footer>
    </div>
  );
}

export default App;
