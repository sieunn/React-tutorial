//Axios 이용해서
//https://jsonplaceholder.typicode.com/comments 헤딩하는 모든 데이터 가져오기
import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Axios_Ex2 = () => {
    const [data, setData] = useState(null);
    {/*
    const 불러오기 = () =>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setData(res.data);
        })
        .catch(() => {
            alert("데이터를 가져오는데 실패했습니다.");
        });
    }
    */}

    useEffect = (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setData(res.data);
        })
        .catch(()=>{
            alert("데이터를 가져오는데 실패했습니다.")
        });
    },[]);
    return (
        <>
            <h1>버튼 클릭하면 json 안에 작성된 comment내용 가져오기</h1>
            {/* 
            <ul>
            {customElements.amp(Comment=>(
                <li key = {     }>
                    <strong>userId : </strong>{     } <br/>
                    <strong>Id : </strong>{      } <br/>
                    <strong>Title : </strong>{     } <br/>
                    <strong>Competed : </strong>{ ? 'Yes' : 'No'} <br/>
                </li>
            ))}
            </ul>
            */}
            <button onClick={불러오기}>불러오기</button>
            <br/>
            {data && <textarea rows={20} cols={80} value={JSON.stringify(data,null,4)} readOnly={true}/>}
        </>
    )
} 
export default Axios_Ex2;