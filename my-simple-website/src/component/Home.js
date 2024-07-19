import React from "react";
import '../css/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>이력서 및 포트폴리오</h1>
                <p>환영합니다! 아래에서 지원 스킬과 포트폴리오를 확인하실 수 있습니다.</p>
            </header>

            {/* ******* 소개 섹션으로 part1과 part2가 존재 ****** */}

            {/* part1 : 사진을 넣지 않고 소개만 작성하는 about*/}
            <section className="home-about-one">
                <h2>소개</h2>
                <p>저는 000 입니다. KH정보교육원에서 FullStack 과정을 수료했습니다.</p>
            </section>
            

            {/* prat2 : 한 row를 두 colum 으로 나눠서 좌측은 사진 우측은 소개 작성하는 about */}
            <section className="home-about-two">
                <h2>소개</h2>
                <div className="about-row">
                    <div className="about-image">
                        <img src="hancom.jpg" alt="프로필 사진"/>
                        <div className="about-text">
                            
                            <p>이름      : </p>
                            <p>나이      : </p>
                            <p>학력/전공 : </p>
                            <p>수료과정  : </p>
                            <p>이메일    : </p>
                            <p>깃허브 주소 : <a href="https://www.github.com/sieunn">https://www.github.com/sieunn</a> </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ***** 보유 기술 섹션 ****** */}
            <section className="home-skills">
                <h2>기술</h2>
                <ul>
                    <li>HTML / CSS / JavaScript</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>SQL : Oracle, MySQL</li>
                </ul>
            </section>

            {/* ****** 프로젝트 소개 1개의 프로젝트 장 섹션 1개씩 작성 ****** */}
            <section className="home-projects">
                <h2>프로젝트</h2>
                <div className="project-itme">
                    <h3>중간과제 프로젝트</h3>
                    <p>간단한 프로젝트 설명</p>
                    {/* Link to 이용해서 프로젝트 이동 js 작성하기 */}
                </div>
                
            </section>
        </div>
    )
}
export default Home;