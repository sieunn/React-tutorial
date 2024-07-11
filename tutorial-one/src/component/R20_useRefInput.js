import React, {useRef, useEffect} from 'react';

const RefInputFocus = () => {
    const inputRef = useRef(null);
    
    //useEffect에서 ,[]값이 비어있으면 R20_useRefInput.js를 시작하자마자
    //특정 기능이나 효과 발생
    // R20_useRefInput.js를 들어오자마자 input 창을 바라보기 설정
    useEffect(()=>{
        //current = null 이기 때문에 inputRef = null 참
        if(inputRef.current) { //current = 기본값 null
            inputRef.current.focus();
        }
    },[]);

    const 버튼클릭 = () => {
        if(inputRef.current) { //current 는 inputRef가 설정된 태그값 확인
            inputRef.current.focus(); //focus = 초점
            //inputRef 라는 ref값을 가진 
            //current = input태그를 바라보고
            //focus = input이 null이라면 input창 안을 중점으로 확인
        }
    };
    return(
        <div>
            <input ref={inputRef} type='text'/>
            <button onClick={버튼클릭}>input안에 값이 비었으면 input으로 위치이동</button>
        </div>
    )
}
export default RefInputFocus;