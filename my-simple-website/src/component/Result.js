import React from "react";
import Result from './Result';

const 결과 = ({텍스트입력, 결과확인}) => {
    //isCorrect 는 텍스트로 입력한값과 결과확인이 일치하는지 확인
    const isCorrect = 텍스트입력 === 결과확인

    return (
        <div className="result">
            <h2>결과</h2>
            {isCorrect ? (
                <p>완벽히 작성했네요.</p>
            ) : (
                <p>틀렸어요. 다시 시도하세요.</p>
            )
        }
        </div>
    );
};

export default 결과;