import React, {useState} from "react";

const 댓글내용 = (props) => {
//id = inputComment
    const {handler} = props;

    return (
        <div className="wrapper">
            <label htmlFor="inputComment">댓글내용</label>
            <input type="text" id="inputComment" onChange={handler}/>
        </div>
    )
}

const 작성자 = ({handler}) => {
//id = inputWriter
    return (
        <div className="wrapper">
            <label htmlFor="inputWriter">작성자</label>
            <input type="text" id="inputWriter" onChange={handler}/>
        </div>
    )
}

const 댓글창 = () => {
    //상태 변수 선언
    const [comment, setComment] = useState(''); //''나 아무것도 안써도됨
    const [writer, setWriter] = useState('');

    const Comment값조종 = (e) => {
        setComment(e.target.value)
    }
    const Writer값조종 = (e) => {
        setWriter(e.target.value)
    }
    
    return (
        <>
        {/* 
        댓글 입력창과 댓글 작성자가 보여주고
        댓글과 작성자가 안적혀있으면 버튼 비활성화 
        다 적혀있으면 버튼 활성화
        */}
        <댓글내용 handler = {Comment값조종}/>
        <작성자 handler={Writer값조종}/>

        <button disabled={comment.length===0 || writer.length === 0}>
            버튼
        </button>
        </>

    )

}
export default 댓글창;