import React, {useState} from 'react';
import axios from 'axios';
//npm install axios

const Axios_Ex1 = () => {
    const [data, setData] = useState(null); //''로 써도됨

    const 불러오기버튼 = () =>{
        {/*axios.get("https://스프링부트:8080/상세보기") */}
        axios.get("https://jsonplaceholder.typicode.com/todos")
        //무사히 잘 가져왔다면 then 으로 data값 변경
        .then(res => {
            setData(res.data);
        })
        //가져오는데 실패했다면 에러 보여주기
        .catch(() => {
            alert("데이터를 가져오는데 실패했습니다.");
        });
    }

    return(
        <>
            <h1>버튼을 클릭하면 json안에 작성된 todos내용 가져오기</h1>
            <button onClick={불러오기버튼}>불러오기</button>
            <br/>
            {data && <textarea rows={20} cols={80} value={JSON.stringify(data,null,2)} readOnly={true}/>}
        </>
    )
}
export default Axios_Ex1;
/*
 {data && <textarea value={JSON.stringify(data,null,2)} readOnly={true}/>}
 
 data && 데이터가 존재한다면
 <textarea 안에 json으로 가져온 값을 추가
 value = 값
 JSON.stringify = json 으로 가져온 값을 문자열로 변환, String으로 생각하고 보겠다.
 (data, null, 2)
 data = json으로 가져온 데이터
 null = 모두 선택 , String으로 어디서부터 어디까지 가져올 변환할 것인가? 에서 null 모든 속성을 선택
 2    = 2칸씩 들여쓰기, 괄호가 바뀔 때마다 2칸씩 들여쓰기 하겠다.
 */