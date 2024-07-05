import React,{createContext, useContext, useState} from "react";

/* 1. Context 객체 생성 */
const TestContext = createContext();

/*4번 후손 컴포넌트 생성
 후손 컴포넌트에서 바꾼 숫자가 자식과 부모 숫자값에 반영이 될 수 있도록 작성
*/
const 후손 = () => {
    const {number, setNumber} = useContext(TestContext);

    return (
        <>
            <h3>후손 컴포넌트 위치</h3>
            <input type="number" value={number} onChange={e => {setNumber(e.target.value)}}/>
        </>

    )
}



/* 3. 자식 컴포넌트 생성 */
const 자식 = () => {
 // TestContext에서 제공된 값을 여기서 사용
 // const [number, setNumber] = useContext(TestContext);
    const {number, setNumber} = useContext(TestContext);

    return (
        <>
            <h3>자식 컴포넌트 위치</h3>
            <input type="number" value={number} onChange={e => {setNumber(e.target.value)}}/>
            <후손 />
        </>

    )
}


/* 2. 부모 컴포넌트 생성 */
const 부모 = () =>{
    // 숫자 상태 변수 선언
    const [number, setNumber] = useState(0); //number 변수에는 초기값 0이 들어가 있음

    /*
     Context는 값을 1개만 제공할 수 있음
     -> 2개 이상의 값을 제공하길 원한다면 {}, [] 로 묶어서 제공

      <TestContext.Provider value={ {number, setNumber}  }>
      number와 setNumber를  {number, setNumber} 작성하면 아래와 같이 변환돼서 전달됨
      {"number" : number, "setNumber" : setNumber}
      {"number" : 0     , "setNumber" : 변환될값}
    */
    return (
        <TestContext.Provider value={ {number, setNumber}  }>
            <h1>
                부모다. :
                {/* Parent 컴포넌트의 현재값 출력 */}
                <span className="red">{number}</span>
            </h1>
            <자식/>
        </TestContext.Provider>

    )
}
export default 부모;