import React, {useState} from 'react';
import LoginContext from './components/LoginContext';
import Signup from './components/SginUp';
import Login from './components/Login';
import './App.css';

/* 현재 App.js는 제일 위에있는 컴포넌트 = 객체 */
function App() {
  //회원가입 창 보이기/숨기기
  const [signUpView, setSignUpView] = useState(false);

  //로그인한 회원정보 저장
  const [loginMember, setLoginMember] = useState(null);

  return (
    //value={} => 하나의 값만 작성
    //value={{}} => 두가지 이상의 값을 작성
    // loginMember => 처음에 로그인 안된 초기값을 가지고 있는것
    // setLoginMember => 로그인 한 다음에 로그인한 정보를 가지고 있는 것
    <LoginContext.Provider value={{loginMember, setLoginMember}}>
      <button onClick={() => {setSignUpView(!signUpView)}}>
        {signUpView ? ('회원가입 닫기') : ('회원가입 열기')}
      </button>
      {/* 회원가입 화면 */}
      <div className='signUp-wrapper'>
        {/* signUpView 가 true일 경우에만 실행되는 공간 = true여야 눈에 보여짐 */}

        {/* 조건식 && (true일 경우 실행) */}
        {signUpView === true && (<Signup/>)}
      </div>

      <h1>Todo List</h1>
      {/*로그인을 해야지 TodoList 확인가능*/}
      <Login />


    </LoginContext.Provider>
  );
}

export default App;
