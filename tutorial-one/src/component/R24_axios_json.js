import React from '.react';

const Axios_JSON = () => {
    return(
        <>
        <h1>Axios와 JSON</h1>
        <h3>JSON</h3>
        <pre>
            JSON : JavaScript Object Notation
            JavaScript 자바스크립트
            Object 객체
            Notation 표기법

            주로 서버(java 백엔드) 와 클라이언트(html, js, css 프론트엔드) 간의 데이터 교환
            {/*
                "표기명":"표기내용",
                "표기명":"표기내용",
                "표기명":["표기내용1","표기내용2","표기내용3"],
                "표기주소" : {
                                "도시" : "도시내용",
                                "도시번호" : "도시번호작성"
                            }
            */}
            개발자들이 서버에서 가져온 값을 화면에 보여주기 위해 임시데이터 JSON을 사용해서 표현
            https://jsonplaceholder.typicode.com/ 를 많이 사용
            <a href='https://jsonplaceholder.typicode.com/'>jsonplaceholder이동하기</a> 
            jsonplaceholder : 임시데이터로 사진이나, 포스터 내용과 같은 파일을 만들고 개발자들에게 무료로 제공
            대표적으로 post, comment, albums, photos, todos, uers가 존재
            https://jsonplaceholder.typicode.com/posts
            https://jsonplaceholder.typicode.com/comments
            https://jsonplaceholder.typicode.com/albums
            https://jsonplaceholder.typicode.com/photos
            https://jsonplaceholder.typicode.com/todos
            https://jsonplaceholder.typicode.com/users
        </pre>
        <h3>비동기처리</h3>
            Ajax  : 자바스크립트를 이용해서 서버와 비동기적으로 데이터를 교환, FetchAPI 사용  
            Axios : 자바스크립트의 HTTP 클라이언트 라이브러리 HTTP요청을 보내고 응답을 처리하기 위해 사용
            Promise : 성공 유무를 나타냄
            Fetch : 성공 유무를 나타냄

        <h5>Axios 를 활용한 API 가져오기</h5>
        프로젝트를 진행하기 위해 axios를 설치
        nmp과 yarn 은 구글스토어와 애플스토어 차이 회사가 다름
        npm install axios   or   npm i axios

        yarn add axios
        <a href='https://axios-http.com/kr/docs/intro'>Axios 이용하러 이동하기</a>
        </>
    )
}
export default Axios_JSON;