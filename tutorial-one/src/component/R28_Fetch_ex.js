//R28_Fetch_ex.js
import React, { useEffect, useState } from "react";

const 패치예제 = () => {
    const [유저들, set유저들] = useState([]);
   // const [에러, set에러] = useState(null);
    //데이터 가져오기 useEffect
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => { // 1. 데이터를 무사히 가지고 왔는지 확인
            return res.json(); // 2. 데이터를 무사히 가지고 왔으면 json 정보를넘겨주기 
        })

        .then(데이터 => {
            set유저들(데이터);
        })
        .catch(에러 => {
            alert("에러가 발생했습니다." + 에러);
           // set에러(에러);
        })
    })

    return(
        <>
        <h1>User List 보기</h1>
        <ul>
            {유저들.map(유저 => (
                <li key={유저.id}>{유저.name}</li>
            ))}

        </ul>
        </>
    )
}

export default 패치예제;