//R30_Loading.js
import React from 'react';

const Loading = () => {
    const [로딩, set로딩] = useState(true);

    if(로딩) return <div>로딩중입니다.</div>;


    //또는 아래와 같이 작성 //div안에 로딩 이미지를 넣을 수 있음
    if(로딩) {
        return (
            <div>로딩중입니다.</div>
        )
    } 
    // 주의할 점 : 데이터를 모두 가지고오면 set로딩을 false로 변경해줘야 함.
    // set로딩(false)를 작성하지 않으면 그 페이지는 평생 로딩중만 보일 것

    return (
        <>
        <h1>로딩표기</h1>
        <pre>
        //자바스크립트에서 innerHTML을 사용했던 것처럼 react에서도 innerHTML을 사용할 수 있음
         if(로딩) return <div>로딩중입니다.</div>;
    
        trick = 사람의 눈을 현혹시키는 속임수
        영화 데이터에서 이미지가 있기 때문에 데이터가 느리게 가지고옴
        사용자에게 화면이 보여기지 전에 로딩중이라는 표시를 보여줌으로
        사용자는 조금 더 기다릴 수 있는 시간을 갖게됨
        처음엔 로딩 true로 설정해서 임시 화면을 띄워놓고
        데이터를 모두 가지고 오면 로딩을 false로 변경해서 기존 리턴에 작성한 html 코드를 보여줌
        {/* 
        if(로딩) return <div>로딩중입니다.</div>;
        위 코드와 아래코드는 동일한 기능을 작동
        if(로딩) {
            return (
                <div>로딩중입니다.</div>
            )
        } */}
        </pre>
        </>
    )
}

export default Loading;