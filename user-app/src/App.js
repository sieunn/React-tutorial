import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MemberList from './MemberList';
import UserList from './UserList';
import TodoList from './TodoList';
//BrowserRouter  타자치기 너무 길기 때문에 Router 라는 이름으로 줄이겠다. -> as Router

function App (){

    return(
    <Router>
        <Routes>
            <Route path="/memberlist" element={<MemberList/>}/>
            <Route path='/' element={<UserList/>}/>
            <Route path='/todo' element={<TodoList/>}/>
        </Routes>
    </Router>
    )
}
export default App; //순서보다 무조건 작동시키는 것을 최우선

/*
function App () {}
index 다음에 특정 js가 최상위에서 시작할 때 function을 사용
function 제일먼저 기능이 되진 않음
[ex]
console.log("hi"); //hi 가 먼저 시작하고 나서 진행(app 함수 정의보다 특정함수 호출이 먼저있어도 동작함)
function App (){

}
function 위에 다른 코드가 와도 상관없음
-------------------------------------------------------------
const App = () => {}
자신이 js 코드 작성한 페이지에서 최상위
이외에는 모두 const 사용
[ex]
const App (){

}
console.log("hi"); //app 함수 정의보다 특정함수 호출이 먼저 있으면 동작 X

const 이전에 console.log("hi"); 나 다른 코드 작성을 지양(사용x)
const 로 가장 중점이 되는 코드를 선언해준 다음에
console.log("hi"); 등 다른 기능을 작성
---------------------------------------------------------------

*/