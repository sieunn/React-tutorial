
function App() {
  return (
    <>
    <h1>백엔드 스프링과 연결하기</h1>
    <pre>
      package.json 아래에 
      ,
      "proxy" : "http://localhost:9090" 를 추가해주면
      예를들어 9090 포트로 연결한 spring-boot와 연결할 수 있음

      package.json에서 "proxy"의 위치는 어디있든 상관없음 {} 사이에만 있으면됨
    </pre>
    </>
  );
}

export default App;
