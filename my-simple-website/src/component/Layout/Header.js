import React from "react";
//retrun 안에 html 을 작성하지 않으면 화면에 돌려보낼 html 코드가 없기 때문에
//화면에서 보이지 않음
// 따라서 return 꼭 써줘야함
const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>♧ SIEUN'S PROTFOLIO ♧</h1>
      </header>
    </div>
  );
};
export default Header;
