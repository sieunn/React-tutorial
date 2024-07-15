import './Pagination.css';
const Pagination = ({itemPerPage, totalItems, paginate, currentPage  }) =>{
    const 페이지번호들 = []; 
    const totalPages = Math.ceil(totalItems / itemPerPage); //전체 페이지수 계산하고 올림처리

    for(let i = 1; i <=     totalPages          ; i++ ){
        페이지번호들.push(i); 
    }

    //페이지 번호 새로고침 함수
    // 모든 페이지 번호를 한 번에 보여주는 것이아니라 10개씩 보여줄 것
    const renderPageNumber = () => {
        if(totalPages <= 10) {
            return 페이지번호들;
        }
        // 시작 페이지 번호
        // currentPage - 5 = 현재 페이지에서 5를 뺀 값
        // 현재 페이지를 중심으로 해서 앞쪽에 있는 5개의 페이지번호를 표시할 수 있도록 설정
        // 시작페이지 번호가 -가 나올 것을 방지 Math.max
        // Math.max(1, 현재페이지가3 -5  = -2) 시작페이지번호는 무조건 1
        // Math.max(1, 현재페이지가8 -5  =  3) 시작페이지는 무조건 3
        // Math.max(max가되는 숫자 작성 문지기처럼 이 밑으로는 max값을 못 가져오도록 설정, 숫자비교값)
        const startPage = Math.max(1, currentPage - 5); 
        //끝 페이지 번호
        //totalPages = 가장 큰 수
        // 끝 페이지 번호는 전체 페이지 수를 초과할 수 없기 때문에
        // 전체페이지 수인 totalPages가 문지기처럼 이 이상으로 값을 못 가져오도록 설정
        //Math.min(총페이지수 15   ,  현재 페이지 12   +   4  = 16 ) 15이상의 수가 들어올 수 없도록 마지노선 설정
        const endPage = Math.min(totalPages, currentPage + 4);

        //현재 페이지를 중심으로 해서 최대 10개의 페이지 번호를 전달
        // startPage = 1 
        // 배열의 인덱스는 0
        // 인덱스값을 맞추기 위해 1-1 = 0 ~ 마지막페이지
        // 예를들어 시작페이지 3 마지막 페이지가 12   => 2, 12가돼서 번호 3 ~ 12까지
        return 페이지번호들.slice(startPage - 1, endPage);
    }

    return (
        <nav>
            <ul className="pagination">
                {/* 페이지 10페이지 까지만 보여주고 */}
                {/* << 화살표 이용해서 이전으로 기능 만들기 */}
                {currentPage  > 1 && (
                <li> 
                    <a onClick={() => paginate(currentPage- 1) } href="!#" className="page-link">
                        &laquo;
                    </a>
                </li> 
                 )}  


                {/*모든 페이지 번호*/}
                {renderPageNumber().map(번호 => (
                    <li key={번호} className={`page-item ${currentPage === 번호 ? 'active'  :''}`}>
                        <a onClick={() => paginate(번호) } href="!#" className="page-link">
                            {번호}
                        </a>
                    </li>
                ))}
                {/* » 화살표 이용해서 이전으로 기능 만들기 */}
                {currentPage  < totalPages && (
                <li> 
                    <a onClick={() => paginate(currentPage + 1) } href="!#" className="page-link">
                        &raquo;
                    </a>
                </li> 
                 )}  

            </ul>

        </nav>
    )
}

export default Pagination;