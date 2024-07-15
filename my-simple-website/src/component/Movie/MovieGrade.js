//영화 평점 사이트 = Movie Grade Site Movie Rating Site
import React, { useEffect, useState } from "react";
import axios from "axios";
import './MovieGrade.css';

const MovieRating = () => {
  const [영화들, set영화들] = useState([]);
  const [로딩  , set로딩 ] = useState(true);

  useEffect(() => {
    axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    .then(res => {
        // 위 url은 [] 가 아니라 {} 에서 시작하므로 {}데이터를 감싸줄
        // 임의의 변수명 res사용 res = [] .data 데이터를 가져오겠다
        // 주소값에 key 이름으로 작성된 data 에서 movie라는 키 값 안에 적힌 title과 이미지들을 가져올 것
        //         [   {  data{ movie{ 를 가져올 것
        set영화들(res.data.data.movies);//{}중괄호 들에서 data를 가지고오겠다.
        //영화 데이터 모두 가지고오면 로딩중을 false로 변경하기
        set로딩(false);
    })
    .catch(err => {
        alert(err + " 발생했습니다.");
    });


  }, []);
  //만약에 로딩중이라면 로딩 div를 보여주겠다.

  //자바스크립트에서 innerHTML을 사용했던 것처럼 react에서도 innerHTML을 사용할 수 있음
  if(로딩) return <div>로딩중입니다.</div>;
  /*
    trick = 사람의 눈을 현혹시키는 속임수
    영화 데이터에서 이미지가 있기 때문에 데이터가 느리게 가지고옴
    사용자에게 화면이 보여기지 전에 로딩중이라는 표시를 보여줌으로
    사용자는 조금 더 기다릴 수 있는 시간을 갖게됨
    처음엔 로딩 true로 설정해서 임시 화면을 띄워놓고
    데이터를 모두 가지고 오면 로딩을 false로 변경해서 기존 리턴에 작성한 html 코드를 보여줌

    if(로딩) return <div>로딩중입니다.</div>;
    위 코드와 아래코드는 동일한 기능을 작동
    if(로딩) {
        return (
            <div>로딩중입니다.</div>
        )
    } 
    */
  
  return (
    <div className="movie-container">
      <h1>평점좋은 영화들</h1>
      <div className="movie-content">
        {영화들.map(영화 => (
            <div key={영화.id} className="movie">
                <img src={영화.medium_cover_image} />
                <h2>{영화.title}</h2>
                <p>평점 : {영화.rating}</p>
                <p>개봉년도 : {영화.year}</p>
                <p>러닝타임 : {영화.runtime}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRating;