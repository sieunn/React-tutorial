import React, {useRef, useEffect} from 'react';

function SignUpFrom(){
    /*
    1. const [emailRef, setEmailRef] = 초기값;
       conset [초기값, 변경해서 초기값에 넣어줄 값] = 초기값 생성;

    2. const emailRef = useRef(null);
       초기값만설정변수 = 새로고침(추후게값이 변경되더라도)해도값고정(어떤 초기값을 넣어줄 것인가?)
    */

    const emailRef = useRef(null); 
    /* 
    const emailRef = useRef(null); 
    emailRef {
        current : null;
    }

    emailRef는 useRef(null) 값을 설정하자마자
    emailRef {
        current : null;
    }
    current 가 자동생성 됨

    cont pwRef = useRef(1);
    pwRef{
    current : 1
    }
    */


    //처음에는 null값을 갖지만, 나중에는 특정값으로 변경될 것이며,
    //React가 새로고침 되어도, 변경된 특정값을 유지할 수 있도록 useRef 설정

    //useEffect를 사용해서 []안의 값을 비워줌으로 최초 1회만 실행하는 기능 설정
    useEffect(()=>{
        //만약 SignUpForm 이 실행되면 바로 수행할 기능 설정
        if(emailRef.current){
            emailRef.current.focus(); //처음 입력창이 null인 값에 자동으로 이동
        }
    },[]); //빈배열[]로 넘겨주어 최초 1회만 실행

    //useRef로 설정한 태그값에서 current는 기본으로 null값을 갖고있음 current = 현재

    return (
        <div>
            <>
            <h2>회원가입</h2>
            <form>
                <label>이메일</label>
                <input type='email' 
                ref={emailRef}  //참조해서 input값 바꿀게
                placeholder='이메일을 입력해주세요.'/>
                <label>비밀번호</label>
                <input type='password' placeholder='비밀번호를 입력해주세요.'/>
            </form>
            </>
        </div>
    )
}
export default SignUpFrom;
