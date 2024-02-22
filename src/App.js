import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Memoization from "./pages/Memoization";
import StudentPage from "./pages/StudentPage";
import StudentArrayPage from "./pages/StudentArrayPage";
import StudentArrayPage3 from "./pages/StudentArrayPage3";
import Params from "./pages/Params";
import SearchPage from "./pages/SearchPage";
import ProductPage from "./pages/ProductPage";
import SubRoute from "./pages/SubRoute";

{/* 상태([student])가 변하면 useEffect가 동작
    - 마운트: 렌더링 되는 순간
    - 언마운트: 
js 객체 특징
1. key 값으로 문자열 가능
2. 변수의 문자열 값을 key 값으로 쓰고 싶을 때 []로 묶어서 참조 가능
3. 변수 자체를 객체의 속성과 value로 한 번에 정의 가능

렌더링: 코드가 해석되어 화면에 출력됨

부모 요소가 렌더링 되면 자식(하위) 요소도 같이 렌더링 됨
props 값이 바뀌면 렌더링 일어남

가상 돔(virtual dom): 
*/}

function App() {
  const [ value, setValue ] = useState("");
  return (
    <>
        <input type="text" onChange={(e) => setValue(e.target.value)}/>
      <ul>
        <Link to="/memoization"><li>메모이제이션</li></Link>
        <Link to="/st"><li>학생정보</li></Link>
        <Link to="/sta1"><li>학생들정보1</li></Link>
        <Link to="/sta3"><li>학생들정보3</li></Link>
        <Link to={`/p?data=${value}`}><li>파람스</li></Link>
        <Link to={`/books?bookName=${value}`}><li>도서검색</li></Link>
      </ul>
      <Routes>
        <Route path="/memoization" element={ <Memoization /> }/>
        <Route path="/st" element={ <StudentPage /> }/>
        <Route path="/sta1" element={ <StudentArrayPage /> }/>
        <Route path="/sta3" element={ <StudentArrayPage3 /> }/>
        <Route path="/p" element={ <Params /> }/>
        <Route path="/books" element={ <SearchPage /> }/>
        <Route path="/product/:productId" element={ <ProductPage/> }/>
        <Route path="/sub/*" element={ <SubRoute/> }/>
      </Routes>
    </>
  );
}

export default App;
