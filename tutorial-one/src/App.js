
import './App.css'; /*css를 얻어와 아래 작성된 태그 옆에 className으로 적용*/
/*
기본 html 에서는 css 를 적용할 때 class라는 이름을 사용하지만
React에서 작성한 html 에는 css를 적용할 때 className이라는 이름을 my-simple-website사용

css 나 다른 js 파일을 가져올 때는 import를 사용


css를 가져올 때는
import 'css경로와 css 파일명';

js를 가져올 때는
import [여기서 사용할 이름] from 'javascript 파일경로/javascript파일명';

R01_ClassComponent.js를 가져와서 App.js에 적용
R01_ClassComponent.js R01 이라는 별칭을 사용해서 App.js에 적용
*/

import R01 from './R01_ClassComponent';
import R02 from './R02_FunctionComponent';
function App() {
  return (
    <div className="App-header">
    <R01/>
    <p>---------------------------------------------</p>
    <R02/>
    </div>
  );
}

export default App;
