import React, { useState, useEffect, useRef } from 'react';

function StudentArrayPage(props) {
    const [ studentList, setStudentList ] = useState([]);
    const [ inputValue, setInputValue ] = useState({
        id: "",
        name: "",
        age: "",
        adr: ""
    });

    const [ updateId, setUpdateId ] = useState(0); 

    const staticId = useRef(0);
    {/* staticId.current 값이 변해도 렌더링X
    렌더링이 다시 일어나도 초기화되지 않음 */}

    useEffect(() => {
        console.log(studentList);
    }, [studentList])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    }

    const handleAddClick = () => {

        const student = {
            ...inputValue,
            id: staticId.current += 1
        };

        setStudentList([ ...studentList, student])
    }

    const handleDeleteClick = (id) => {
        setStudentList(...studentList.filter(student => student.id !== id));
    }

    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0]);
    }

    const handleUpdateSubmitClick = () => {
        // useState의 상태 변수는 set을 통해서만 바뀌도록 하기
        const findIndex = 
            studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);
        const updateStudentList = [...studentList];
        
        updateStudentList[findIndex] = inputValue;

        setStudentList(updateStudentList);
        handleCancelClick();
    }

    const handleCancelClick = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            age: "",
            adr: ""
        });
    }

    return (
        <div>
            <div>
                <input type="text" name='id' 
                disabled={true}
                value={inputValue.id}
                placeholder='ID'
                />
                <input type="text"
                name='name'
                onChange={handleInputChange}
                value={inputValue.name}
                placeholder='이름'
                />
                <input type="text"
                name='age'
                onChange={handleInputChange}
                value={inputValue.age}
                placeholder='나이'
                />
                <input type="text"
                name='adr'
                onChange={handleInputChange}
                value={inputValue.adr}
                placeholder='주소'
                />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>이름</th>
                        <th>주소</th>
                        <th>나이</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map(student => {
                        return <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.adr}</td>
                            <td>
                                {
                                    updateId !== student.id
                                    ? <button onClick={() => {handleUpdateClick(student.id);}}>수정</button>
                                    : <button onClick={handleUpdateSubmitClick}>확인</button>
                                }
                            </td>
                            <td>
                                {
                                    updateId !== student.id
                                    ? <button onClick={() => {handleDeleteClick(student.id);}}>삭제</button>
                                    : <button onClick={handleCancelClick}>취소</button>
                                }
                            </td>
                        </tr>
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default StudentArrayPage;