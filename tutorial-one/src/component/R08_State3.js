import React, {useState} from "react";

const 예제3번 = (props) => {
    //props로 전달받을 값 중 init값을 count초기값으로 설정하기

    //setCount()를 이용해서 count 값을 변경하는 코드 작성
    //->예제2번 객체에서 변경이 되는 부분만 다시 표현을 진행

    //JacaScript 안에 Number라는 객체를 이용해서 받아오는 값을 숫자로 한번더 처리
    //String처럼 문자열로 오는 값일 수도 있으니 한번 더 숫자화 시켜줌
    /*                    
    useState(숫자로변경(App.js에서 가져온값 . 초기값이라는 변수에 담긴 값))
    useState(   Number(props              .  init));
    */
    const [count, setCount] = useState(Number(props.init)); //props.init=50 
    //count = init = 50

    return(
        <div className="count-container"> {/* <div> 나 <> 사용하기*/}
            <button onClick={() => setCount(count - Number(props.step))}>
                -{props.step}
            </button>

            <h3>{count}</h3>

            <button onClick={() => setCount(count + Number(props.step))}>
                +{props.step}
            </button>
        </div>

    )

}
export default 예제3번;