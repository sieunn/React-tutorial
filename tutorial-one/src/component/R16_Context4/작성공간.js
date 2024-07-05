import React,{useState, useContext} from "react";

import 유저정보모두저장 from "./유저정보모두저장";

//input 타입을 만들고 저장하는 버튼을 생성
const 작성하는공간 = () => {
    const {userList, setUserList} = useContext(유저정보모두저장);

    const[inputName, setInputName] = useState('');
    const[inputPhone, setInputPhone] = useState('');

    const 유저추가 = () => {
        const 유저 = {"inputName" : inputName, "inputPhone" : inputPhone };
        //const 유저 = {"inputName" : inputName, "inputPhone" : inputPhone };
        //영어는 ""나 ''로 감싸지 않아도 괜찮음 , ""나 '' 아무거나 써도 상관없음
        const 새로운유저 = [...userList, 유저];

        setUserList(새로운유저);

        //멤버가 저장이 되면 input에 작성된 내용 모두 지우기
        setInputName(''); //이름칸 모두 지우기
        setInputPhone(''); //번호칸 모두 지우기
    }

    return(
        <div>
            <label htmlFor="inputName">이름 </label>
            <input 
            type="text" 
            id="inputName"
            onChange={(e) => {setInputName(e.target.value)}}
            value={inputName}/>
            <br />

            <label htmlFor="inputPhone">번호</label>
            <input 
            type="number" 
            id="inputPhone"
            onChange={(e) => {setInputPhone(e.target.value)}}
            value={inputPhone}/>

            <button onClick={유저추가}>멤버추가</button>

        </div>
    )
}
export default 작성하는공간;
