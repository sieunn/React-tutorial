import React, {useState} from "react";
 
import 유저정보전달 from "./유저정보모두저장.js";
import 작성공간 from "./작성공간.js";

//작성하는 칸을 가져오고 출력도 할 수 있도록 해주는 컴포넌트
const 최종출력공간 = () => {
     const [userList, setUserList] = useState([]);

     return(
        <유저정보전달.Provider value={{userList, setUserList}}>
        
        <작성공간/>

        {/* 가입한 유저의 정보를 출력 */}
        <div>
        {userList.map((유저, index)=>{//map을 사용해서 sysout 처럼 사용자눈에 보여지게함
                    return (
                        /* key 속성 : 배열 반복 출력시 태그를 구분하는 key */
                        <ul key={index}>
                            <li>가입순서: {index} 번째 유저</li>
                            <li>이름 : {유저.inputName}</li>
                            <li>전화번호 : {유저.inputPhone}</li>
                        </ul>
                    )

                })

                }
        </div>

        </유저정보전달.Provider>
     )
}

export default 최종출력공간;