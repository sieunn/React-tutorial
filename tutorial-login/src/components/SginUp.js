import React, {useState} from "react";

const Signup = () => {
    const [id,setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwcheck, setPWCheck] = useState('');
    const [name, setName] = useState('');

    const [result, setResult] = useState('');
    
    //아이디 중복검사 중복검사 
    const [idValidation, setIdValidation] = useState(false);
    //false = 사용불가 true = 사용가능

    //아이디 중복검사 이벤트 핸들러 
    const 아이디중복검사 = (eventId) => {
        //eventID : 현재 입력하는 이벤트가 발생한 id
        setId(eventId);

        //4글자 미만이면 중복검사 x
        //입력받은 아이디 앞뒤 공백 제거(trim)하고 4글자 미만(.length < 4)
        if(eventId.trim().length < 4){ 
            setIdValidation(false); 
            return;
        }
        //DB에 중복되는 아이디가 있는지 비동기로 아이디 중복검사 수행
        //axios나 fetch를 사용할 수 있음
        fetch("/idCheck?id=" + eventId) //SpringBoot Controller와 연결할 Mapping url
        .then(resoponse => resoponse.text())
        .then(result => {
            //중복 아닐때 true, 중복이면 false
            //(Number(result) === 0) 나중에 SpringBoot에서 
            //아이디가 중복되지 않았으면 0을 전달, 아이디가 중복이면 0이외 값을 전달
            //if(Number(result) === "중복아님"){
            //결과전달을 0으로 하지않고 "중복아님"이라는 글자 전달 가능 but 한글은 깨질 위험이 큼
            if(Number(result) === 0){
                setIdValidation(true);
            }else{
                setIdValidation(false);
            }
        })
    }

    //회원가입 버튼
    const 회원가입버튼 = () => {
        //아이디 유효하지 않으면 가입 x
        if(!idValidation){
            alert('아이디가 유효하지 않습니다.');
            return;
        }
        //비밀번호, 비밀번호 확인이 일치하지 않으면 가입x

        //회원가입 비동기 요청
        const input값들 = {}; //처음엔 들어온 값이 없으니 빈공간으로 설정
        input값들.id = id; //id값이 들어오면 input값들에 id값을 작성해달라 설정
        input값들.pw = pw; //pw값이 들어오면 input값들에 pw값을 작성해달라 설정
        input값들.name = name;
        //만약 input에 id값으로 khT를 작성하고, pw값으로 khT1234를 작성하면
        /* 
        const input값들 = {            };에서 아래와 같이 변경됨
              input값들 = {khT, ktT1234}
        */
       fetch("/signUp", {
        method : "POST", //springboot Container에 PostMapping("/singUp")에 전달하겠다는 표시
        
        //header : 메일로 치면 메일주소, 메일 제목처름 초기에 어떤것을 보내는지 설정
        headers : {"Content-Type" : "application/json"} ,
        //form태그에는 "Content-Type" : "application/json" 이것이 기본으로 생략되서 작성되어있음
        //Content-Type은 왜 작성해야하는가?
        //데이터를 전달할 때 이미지파일인지 동영상파일인지, 다중이미지파일인지 글자만있는지 정보전달해줌
        //application/json : application=코딩하는폴더 자체를 의미, 폴더1개= 어플리케이션1개
        //            json : 사용자나 개발자가 작성한 여러값을 key-value형태로 데이터를 1개이상 주고받을 수 있는 형태

        //body : 내용 본문 작성
        body : JSON.stringify(input값들)//사용자가 작성한 모든 값을 보내기
       })
       //결과 응답받아서 저장해놓고
       .then(response => response.text())
       .then(result => {
        if(Number(result) > 0){ //결과가 0보다 크다면, 결과가 ==1이면 회원가입 완료 처리
            setResult('회원가입 성공!');
            //input 값들 모두 초기화
            setId('');
            setPw('');
        }else {
            setResult('회원가입 실패!');
        }
       })
       
       if(pw != pwcheck){
        alert('비밀번호가 일치하지 않습니다.');
        return;
       }

    }

    return (
        <div className="signup-container">
            {/* 
            <label for="input에 작성된 id값과 일치하는 값을 작성"></label>
            label 태그 안에 for 값을 작성하고 싶지않다면 
            <label> <input> </label> 이렇게 작성해주면 for를 작성한 것과 동일하게 설정
            
            <label for="abc"></label> <input id="abc"/>  
            === 똑같음
            <label> <input> </label>
            */}
            <label>
                ID : 
                <input type="text"
                    onChange={e => 아이디중복검사(e.target.value)}
                    value={id}
                    className={idValidation ? '' : 'id-err'}
                    />
            </label>

            <label>
                PW : 
                <input type="password"
                    onChange={e => {setPw(e.target.value)}}
                    value={pw}
                />
            </label>

            <label>
                PWChECK : 
                <input type="password"
                    onChange={e => {setPWCheck(e.target.value)}}
                    value={pwcheck}
                />
            </label>

            <label>
                NAME : 
                <input type="text"
                    onChange={e => {setName(e.target.value)}}
                    value={name}
                />
            </label>



            <button onClick={회원가입버튼}>가입하기</button>
            <hr/>
            {/* 회원가입이 무사히 완료됐는지 결과 표시 */}
            <h3>{result}</h3>

        </div>
    )
}
export default Signup;