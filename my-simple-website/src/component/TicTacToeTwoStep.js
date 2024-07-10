import React, {useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './Tic-Tac-Toe.css';

//배열 랜덤으로 섞기
const shuffleArray = (array) => {

  return array.sort(() => Math.random() - 0.5);
};

const TicTapToe= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(20).keys()].map(n => n + 1)));
  //사용자가 클릭해야하는 다음 숫자를 나타냄
  const [nextNumber, setNextNumber] =useState(1); //1부터시작=사용자가 클릭해야하는 숫자는 1부터이기 때문에 초기값 1로 설정
  //게임 상태에 따라 사용자한테 보여줄 메세지 표현
  const [message, setMessage] = useState(''); //빈공간으로 놓기

  const [isCorrect, setIsCorrect] = useState(false);

  const handleNumberClick = (number) => {
    //만약에 현재 사용자가 클릭해야하는 숫자와 클릭한 숫자가 서로 일치하는가?
    if (number  === nextNumber) {
      if ( nextNumber === 20 ) { 
        //맞추면 메세지내용 맞췄습니다.! 로 변경하기
        setMessage('축하합니다.  모든 숫자를 순서대로 클릭했습니다.');
        setIsCorrect(true);
      } else {
        setNextNumber(nextNumber + 1);
      }
    } else {
     //틀렸을경우 메세지 보여주기
     setMessage('틀렸습니다. 다시 시도하세요.');
    }
  };

  const handleRestart = (e) => {
    setNumbers(shuffleArray([...Array(20).keys()].map(n => n + 1))); // 다시 초기 숫자 세팅
    setNextNumber(1); //번호 초기화
    setMessage(''); //메세지 초기화
    setIsCorrect(false);
  };

  return (
    <div className="tic-tap-container">
      <h1>TicTap 2단계</h1>
      <div className="ttt-two-grid">
      {numbers.map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)} className="number-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
    
      <Link to = '/tictactoe'><button className='nextStep-button'>1단계로돌아가기</button></Link>
      <button onClick={handleRestart} className='restart-button'>재시작버튼</button>
      {/* {isCorrect ? (<Link to = '/tictactoe'><button className='nextStep-button'>1단계로돌아가기</button></Link>) : (<button onClick={handleRestart} className='restart-button'>재시작버튼</button>)} */}
    </div>
  );
};

export default TicTapToe;
