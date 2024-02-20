import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import StudentInfo from "./components/StudentInfo";
import InfoInput from "./components/InfoInput";
import InfoButtons from "./components/InfoButtons";

function App() {
  const studentObj = {
    name: "",
    age: "",
    adr: ""
  };

  const [ student, setStudent ] = useState(studentObj);
  const [ inputValues, setInputValues ] = useState(studentObj);
  
  const inputRef = {
    name: useRef(),
    age: useRef(),
    adr: useRef()
  }

  useEffect(() => {
    console.log(inputRef.name.current);
  }, [])

  {/* 상태([student])가 변하면 useEffect가 동작
      - 마운트: 렌더링 되는 순간
      - 언마운트: */}

  useEffect(() => {
    setInputValues(studentObj);
  }, [student]); 
  

  {/* js 객체 특징
  1. key 값으로 문자열 가능
  2. 변수의 문자열 값을 key 값으로 쓰고 싶을 때 []로 묶어서 참조 가능
  3. 변수 자체를 객체의 속성과 value로 한 번에 정의 가능*/}

  const handleInputChange = (e) => {
      const { name, value } = e.target;

      setInputValues ({
        ...inputValues,
        [name]: value
      });
  }
  const handleOnOk = () => {
    setStudent(inputValues);

  }

  const handleOnClean = () => {
    setStudent(studentObj);
  }
  return (
    <>
      <StudentInfo title="이름" text={student.name} />
      <StudentInfo title="나이" text={student.age} />
      <StudentInfo title="주소" text={student.adr} />
      
      <InfoInput
      name={"name"}
      onChange={handleInputChange}
      value={inputValues.name}
      placeholder='이름'
      inputRef={inputRef.name}
    />
      
      <InfoInput
      name={"age"}
      onChange={handleInputChange}
      value={inputValues.age}
      placeholder='나이'
      inputRef={inputRef.age}
    />
      
      <InfoInput
      name={"adr"}
      onChange={handleInputChange}
      value={inputValues.adr}
      placeholder='주소'
      inputRef={inputRef.adr}
    />

      <InfoButtons >
        <button onClick={handleOnOk}>확인</button>
        <button onClick={handleOnClean}>비우기</button>
      </InfoButtons>
    </>
    );
  }

export default App;
