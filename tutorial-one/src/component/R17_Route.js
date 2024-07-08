/* 
React Router 링크를 연결해서 이동하기 위해 사용되는 라이브러리

기존 html 주소값을 이동할 때 사용한 방법
<a href="html파일이름.html">이동하기</a>

a태그로 href를 이용할 경우 html 파일명을 작성해주는 것이기 때문에 
React에서는 단순히 a태그와 href만 사용을 할 수 없음

React는 html 파일이 index.html로 한 파일밖에 없기 때문에 단순히 사용할 수 없음

React는 javascrip 를 이동해서 html 파일을 보여주기 때문에 
react-router-dom 을 사용

* Router = 연결을 해주는데 연결 경로를 자동으로 전환해서 주는 기능
           연결 경로를 자동으로 전환해서 주는 기준은
           고객(클라이언트=사용자)이 어떠한 특정 화면이나 기능을 보고자하여
           웹사이트에 요청할 경우 고객이 요청한 흐름대로 자연스럽게
           보여주는 기능

1. 설치방법 (둘 중 택1)
    npm install react-router-dom
    npm i react-router-dom

2. router를 사용하기 위해 4가지가 설정 됨
    BrowserRouter : html 에서 url 전체 관리자 역할 (History API 사용)
    Routes        : 링크 모음을 나타내는 표현 태그
    Route         : 어떤 링크가 어떤 javascript를 표현하는지 표기해주는 태그
    Link          : 사용자가 누르고 이동할 수 있는 링크를 생성, <a href>와 똑같은 역할

3. 사용방법
    <BrowserRouter> <!--html에서 이런 링크가 있다 기록을 남김 -->
        <Routes> <!--링크 표현 모음들-->
            <Route path="이동할링크" element={<javascript파일명/>} />

            <!-- / 경로가 Home.js 를 바라보길 원한다면 아래와같이 작성 -->
             <Route path="/" element={<Home/>} /> <!-- 맨 위에 Home.js 를 import -->
        </Routes>
    </BrowserRouter>

    *주의사항*
    BrowserRouter는 index.js 나 App.js에서 사용을 많이 함
    만약에 App.js를 index.js 바로 아래에서 사용하지 않는다면
    index.js 바로 아래에서 표현되는 js 파일에서 표기가 됨
*/