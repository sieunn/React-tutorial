import './App.css';
import {useState} from 'react';

function UserList() {
  //유저 초기 목록과 유저가 추가될 목록을 담을 변수명 설정
  //초기 변수인 users 가 아무런 유저 목록을 담고있지 않기 때문에 users는 빈배열로 설정
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  /*
  1번
  모두 초기값이 아무것도 없는 상태
  useState(''); useState(""); useState(null); 
  빈배열인 상태 useState([]);
  */
  
  const 추가버튼 = () => {
    setUsers([...users,name]); // ...기존유저목록, name = input값으로 받은 값
    setName("");
  }
  
  /*
  2번
  const 기능 = () => {}
  const 기능 = () => () 의 차이

  1. 
  const 기능 = () => {
    return 리턴값; 
    } //-> return 이 존재 but 필수는 아님
  
  [예제]
  const 인사기능 = () => {
    const 인사메세지 = "안녕하세요";
    return 인사메세지;
    }

  <자바로 비유>
  pubic String 추가버튼 {
    return String "자료값";
  }
 ----------------------------------------------
 2. 
  const 기능 = () => (
    리턴없음
    ) //-> return 이 없음

  [예제]
  <p>{인사기능}</p>
  const 인사기능 = () => (
    alert ("좋은 아침입니다.");
    )

  <자바로 비유>
  public void 추가버튼 {
    System.out.println("안녕하세요")
  }
  */

  /*
  3번
  <input type='text' value={name} onChange={(e)=> setName(e.target.value)}
  <button                         onClick= {( ) => 삭제버튼(index)}>삭제하기</button>
  
  e = 특정 변하는 값이나 변화가 있는 것을 감지
  button 의 경우 버튼을 클릭하기만 하고, 특정 값이 랜덤으로 설정되는 부분이 없기 때문에
  버튼에서는 e와 같은 변수명을 생략

  input의 경우 사용자가 어떤 값을 작성할 지 컴퓨터가 모르기 때문에 
  사용자가 어떤값을 입력한다는 것을 이벤트로 받아들이고, 이벤트가 감지되면 value값을 가져옴

  */


  // filter = 배열에서 결과가 ture인 값만 반환

  const 삭제버튼 = (index) => { 
                        //user에 있는 유저목록  user=유저명 , i = users에 있는 유저가 저장된번호
    const 삭제후유저목록 = users.filter((user, i) => i !== index);
    /* 
    users.filter((  user,           i       )   =>           i        !==                 index);
    유저목록들     유저명,각 유저가 가입한 번호    => 배열에 저장된 번호  같지 않은 유저번호만 삭제하려고 누른 번호가
    유저 목록에 넣어주겠다.
    */

    /*
    4번
    filter 에서는 !==, === 에 따라 실행되는 값의 차이가 있다.

    const 삭제후유저목록 = users.filter((user, i) => i !== index);
    삭제 후 유저목록 기능은 삭제하기를 선택한 번호 한개만 삭제하기

    const 삭제후유저목록 = users.filter((user, i) => i === index);
    삭제 후 유저목록 기능은 삭제하기를 선택한 번호 이외 모든 번호 삭제하기
    */
    setUsers(삭제후유저목록); //유저목록 교체하기
  }

  return (
    <div className="App">
      <h1>유저 리스트</h1>

      <h3>유저 추가하기</h3>
      <input type='text' 
             value={name}
             onChange={(e)=> setName(e.target.value)}
              />
      <button onClick={추가버튼}>추가하기</button>
      {/* 
      onChange={(e)=> setName(e.target.value)} />
      (input에 값 입력하는 이벤트 발생)=>(이벤트가발생한.target.input에 입력된 값)
      
      onChange -> 변경해라
      e -> 마우스를 클릭하거나 키보드를 치거나 등
      value -> 클릭한 값이나 입력된 값
      setName -> 기존의 value값 {name}을 변경된 value값으로 변경
      */}

      <h3>유저 리스트 목록 보기</h3>
      {/* 
      {유저목록들.하나씩모두꺼내기( (꺼낼유저1명,고유번호) => ( 
        <li key={고유번호}>{꺼낸유저1명}</li>  
        )    )}
      */}
      <pre><li>인덱스 - 유저명</li></pre>
      {users.map( (user,index) => (
        <li key={index}>
          {index}-{user}
          <button onClick={() => 삭제버튼(index)}>삭제하기</button>
          {/*
           () => 삭제버튼(index) 
           () 안에 e 안써도 되는 이유 = value 값을 받아올게 없으니까
            유저 추가 할 때 input에는 text로 값을 받아오는 이벤트가 있지만 
            삭제할 때에는 값을 받아오는 것이 아니기 때문에
          */}
        </li>
      )    )}
    </div>
  );
}

export default UserList;
