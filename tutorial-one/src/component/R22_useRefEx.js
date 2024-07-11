import React, {useRef, useEffect} from 'react';

//name password 작성하는 form
//useRef를 이용해서 password를 제일 먼저 입력하도록 focus설정
//만약 export default를 컴포넌트에 한번에 작성하길 원한다면
/* 
const 로 컴포넌트가 시작하는 경우
export const 컴포넌트명 = () => {

}

function으로 컴포넌트가 시작하는 경우
export default function 컴포넌트명 {

}
*/

export const RefEx = () => {

    const pwRef = useRef(null);

useEffect(()=>{
    if(pwRef.current){
        pwRef.current.focus();
    }
},[]);

    return(
        <>
        <h2>회원가입</h2>
        <form method='post'>
            <label>이름</label>
            <input type='text'
            placeholder='이름을 입력하세요'/>

            <label>비밀번호</label>
            <input type='password'
            ref={pwRef} //useRef설정한 변수명
            placeholder='비밀번호을 입력하세요'/>
        </form>
        </>
    )
}
//export default RefEx;