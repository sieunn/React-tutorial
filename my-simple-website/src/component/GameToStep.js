import React, {useState} from 'react';

const GameToStep = () => {
    const [guess, setGuess] = useState('');

    const [message, setMessage] = useState('');

    const[number, setNumber] = useState(Math.floor(Math.random() * 30) +1);

    const [attmpts, setAttempts] = useState(0);

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
        }else if (userGeuss > number){
            setMessage('숫자가 너무 큽니다.');
        }else{
            setMessage('숫자가 너무 작습니다.');
        }

        setGuess(''); //input에 작성된 값 지우기
        
    }

    const handleReStart = (e) => {

    }

    return (
        <div>
            <h3>숫자 맞추기 게임</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type='number'
                    value={guess}
                    onChange={handleChange}
                    placeholder='1에서 30 사이의 숫자 입력하기'/>

                    <button type='submit'>추측하기</button>
            </form>
            {/* message = 숫자를 맞췄는지 틀렸는지 확인하는 메세지 */}
            <p>{message}</p>
            <button onClick={handleReStart}>재시작버튼</button>
        </div>
    )
}
export default GameToStep;