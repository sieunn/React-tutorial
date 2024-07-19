import React, {useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import '../Tic-Tac-Toe.css';
/*
./ -> 현재 폴더에서 가져온 파일 동일한 폴더 위치에서 다른 파일을 가져오는 것
../ -> 현재 폴더를 감싸고 있는 상위 폴더에서 다른 파일을 가지고 오는 것
*/

/*
useEffect(() => {
  //TicTacToe.js가 실행되면 특정 기능 시작

},[])
*/

//배열 랜덤으로 섞기
const shuffleArray = (array) => {
  //sort = 정렬, 랜덤으로 나온 값을 정렬
  //Math.random() - 0.5 : 배열을 랜덤으로 섞을 때 자주 사용, -0.5안써도 됨
  //-0.5 붙이지 않으면 0.0 ~ 0.9999999999999999.. 사이값 반환하므로 (범위지정용)
  return array.sort(() => Math.random() - 0.5);
};

const TicTapToe= () => {
  //numbers는 1부터9까지 숫자가 섞인 배열
  //...Array(9) 숫자가 담길 그릇을 9개 만듬
  //.keys() 로 숫자를 가지고 옴
  //어떤 숫자를 가지고 오냐면 0 => 0+1 이런식으로 1부터 9까지 생성
  //1~9까지 생성된 숫자를 shuffeArray 이용해서 숫자가 담긴 그릇을 섞는다.
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));
  //사용자가 클릭해야하는 다음 숫자를 나타냄
  const [nextNumber, setNextNumber] =useState(1); //1부터시작=사용자가 클릭해야하는 숫자는 1부터이기 때문에 초기값 1로 설정
  //게임 상태에 따라 사용자한테 보여줄 메세지 표현
  const [message, setMessage] = useState(''); //빈공간으로 놓기

  const [timer, setTimer] = useState(10); //처음 초기 시간 설정
  const [isCorrect, setIsCorrect] = useState(false);

  const handleNumberClick = (number) => {
    //만약에 현재 사용자가 클릭해야하는 숫자와 클릭한 숫자가 서로 일치하는가?
    if (number  === nextNumber) {
      if ( nextNumber === 9 ) { 
        //맞추면 메세지내용 맞췄습니다.! 로 변경하기
        setMessage('축하합니다.  모든 숫자를 순서대로 클릭했습니다.');
        setIsCorrect(true);
      } else {
        setNextNumber(nextNumber + 1);
      }
    } else {
     //틀렸을경우 메세지 보여주기
     setMessage('틀렸습니다. 다시 시도하세요.');
     setTimer(10);
    }
  };

  useEffect(()=>{
    let countdown;
    if(timer > 0){
      countdown = setTimeout(()=>{
        setTimer(timer -1);
      },1000)
    }else if(timer ===0){
      alert("시간초과! 게임이 종료되었습니다.");
    }
  })

  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1))); // 다시 초기 숫자 세팅
    setNextNumber(1); //번호 초기화
    setMessage(''); //메세지 초기화
    setIsCorrect(false);
    setTimer(10);
  };


  return (
    <div className="tic-tap-container">
      <h1>TicTap 1단계</h1>
      <div className='timer'>남은 시간 : {timer}초</div>
      <div className="grid">
      {numbers.map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)} className="number-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      {/* 수를 모두 맞출 경우에만 다음단계로 이동 버튼 보여주기 */}
      {isCorrect ? (<Link to = '/ttt-twoStep'><button className='nextStep-button'>다음단계로이동</button></Link>) : (<button onClick={handleRestart} className='restart-button'>게임재시작</button>)}
    </div>
  );
};

export default TicTapToe;
