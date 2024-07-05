import React,{useState} from 'react';

const Game = () => {
    //맞출 숫자를 입력하는 guess
    const [guess, setGuess] = useState('');

    //메세지 = 맞췄는지 틀렸는지 전달하는 메세지
    const [message, setMessage] = useState('');

    //랜덤으로 1~10까지 숫자 출력하기 (=사용자는 이 숫자를 맞춰야함)
    //Math.random() 랜덤으로 정수,실수 출력
    //0에서부터 9까지 출력이기 때문에 +1을 해서 1부터 10까지로 변경
    //Math.floor 실수를 정수화 해주는 역할
    const [number, setNumber] = useState(Math.floor(Math.random() * 10) +1) ;
    
    //숫자 맞추려고 시도한 횟수(처음에는 숫자를 맞추려고 시도한 적이 없기 때문에 0 적어줌)
    const [attmpts, setAttempts] = useState(0);

    //사용자가 숫자를 맞추려고 시도할 때마다 숫자를 새로 세팅해서 저장해놓기
    const handleChange = (e) => {
        setGuess(e.target.value);
    }
    //<input type='number' value={guess} onChange={handleChange} placeholder='1에서 10 사이의 숫자 입력하기'/>
    //<input type='number' value={guess} onChange={ (e) => {setGuess(e.target.value)} placeholder='1에서 10 사이의 숫자 입력하기'/>

     const handleSubmit = (e) => {
        e.preventDefault(); //인터넷이 가지고있는 기본동작을 일단 방지하는 역할(새로고침)
        //submit 페이지를 데이터를 서버로 전송하거나 페이지가 다시 실행되는 것을 막아줌
        const userGeuss = parseInt(guess,10); //혹시나 숫자가 아닌 문자열일 수 있기 때문에 한번더 정수화해줌
        //userGuess = 사용자가 입력한 값을 숫자로 사용할 수 있음

        setAttempts(attmpts + 1); //맞추려고 작성한 숫자를 제출할 때마다 제출시도횟수 1씩 증가

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
                    placeholder='1에서 10 사이의 숫자 입력하기'/>

                    <button type='submit'>추측하기</button>
            </form>
            {/* message = 숫자를 맞췄는지 틀렸는지 확인하는 메세지 */}
            <p>{message}</p>
            <button onClick={handleReStart}>재시작버튼</button>
        </div>
    )
}
export default Game;