//Pagination.js

//

/*
itemPerPage : 한 페이지에 보여줄 항목 수
totalItems  : 전체 항목 수
paginate    : 페이지 번호를 업데이트 하는 함수
currentPage : 현재 보고 있는 페이지 번호

*/
import './Pagination.css';
const Pagination = ({itemPerPage, totalItems, paginate, currentPage  }) =>{
    const 페이지번호들 = []; // 변수명 페이지번호들 -> pageNumbers 변경

    // 전체 항목수와 페이지당 항목 수를 바탕으로 전체 페이지 수를 계산하고
    // 페이지번호들에 페이지 번호를 저장시킬 것
    /*
        전체 항목 수 : 53개의 글이 존재   한 페이지 당 10개 항목씩 보여줄 것
        53 / 10 = 5.3 5개 페이지네이션
        ceil = 올림    5.3 -> 6
    */
    for(let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++ ){
        console.log("페이지네이션 i 값 : " + i);
        페이지번호들.push(i); //push = 값을 추가 페이지번호들에 만들어진 번호들을 추가 
    }



    return (
        <nav>
            <ul className="pagination">
                  {/* className={`page-item ${currentPage === 번호 ? 'active'  :''}`}
                        page-item 이라는 className이 존재
                        만약에 현재페이지와 map에서 가리키는 번호가 일치하다면
                        className = "page-item active"
                        현재 페이지번호와 map에서 가리키는 번호가 다르다면
                        (현재 페이지 이외 다른 페이지 번호들)
                        className = "page-item"
                  
                  */}
                {페이지번호들.map(번호 => (
                  
                    <li key={번호} className={`page-item ${currentPage === 번호 ? 'active'  :''}`}>
                        {/* 
                        !# : 클릭 이벤트가 발생했을 때 페이지가 새로고침 되는 것을 막아줌
                        <a onClick={(e) =>  {e.preventDefault();  paginate(번호); } } href="/" >
                        */}
                        <a onClick={() => paginate(번호) } href="!#" className="page-link">
                            {번호}
                        </a>
                    </li>
                ))}

            </ul>

        </nav>
    )
}

export default Pagination;