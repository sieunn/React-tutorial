import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Game.css';

const GameToStep = () => {
    const [guess, setGuess] = useState('');

    const [message, setMessage] = useState('');

    const[number, setNumber] = useState(Math.floor(Math.random() * 30) +1);

    const [attmpts, setAttempts] = useState(0);

    const[isCorrect, setIsCorrect] = useState(false);

    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userGeuss = parseInt(guess,10);
        setAttempts(attmpts + 1);

        //만약 숫자를 맞췄다면?
        if(userGeuss === number){
            setMessage('축하합니다.맞추셨습니다.');
            setIsCorrect(true);
        }else if (userGeuss > number){
            setMessage('숫자가 너무 큽니다.');
        }else{
            setMessage('숫자가 너무 작습니다.');
        }

        setGuess(''); //input에 작성된 값 지우기
        
    }

    const handleReStart = (e) => {
         //다시 시작하기 버튼 누르면 랜덤 숫자를 다시 생성
         const newNumber = Math.floor(Math.random() *30)+1;
         //모든 값 초기화
         setNumber(newNumber); 
         setAttempts(0); 
         setMessage('');
         setGuess(''); 
         setIsCorrect(false); 
    }

    return (
        <div className='NumberGame'>
            <h1>숫자 맞추기 게임 2단계</h1>
            <form onSubmit={handleSubmit}>
                <input className='Numberinput'
                    type='number'
                    value={guess}
                    onChange={handleChange}
                    placeholder='1에서 30 사이의 숫자 입력하기'/>

                    <button type='submit' className='guessButton'>추측하기</button>
            </form>
            {/* message = 숫자를 맞췄는지 틀렸는지 확인하는 메세지 */}
            <p>{message}</p>

            
            {isCorrect ? (<Link to='/game'><button className='restart-button'>1단계로돌아가기</button></Link>) : (<button onClick={handleReStart} className='restart-button'>재시작버튼</button>)}
        </div>
    )
}
export default GameToStep;