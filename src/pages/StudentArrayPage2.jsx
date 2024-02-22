import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage2(props) {

    const student = {
        id: 0,
        name: "",
        score: 0
    }

    const [ scoreData, setScoreData ] = useState({
        total: 0,
        avg: 0
    });

    const [ inputScore, setInputScore ] = useState(0);
    const [ scoreList, setScoreList ] = useState([]);

    const staticId = useRef(0);

    useEffect(() => {
        console.log(scoreList);
    }, [scoreList])

    const handleInputScore = (e) => {
        const { name, value } = e.target
        setInputScore({
            ...inputScore,
            [name]: value
        });
    }

    const handleUpdateScore = () => {

        const student = {
            ...scoreData,
            id: staticId.current += 1
        };

        setScoreList([...scoreList, student])
    }

    return (
        <div>
            <div>
                <input type="text" name='id' disabled={true} value={student.id} placeholder='ID'/>
                <input type="text" name='total' value={student.total} placeholder='이름'/>
                <input type="text" name='avg' value={student.avg} placeholder='점수'/>
                <button onClick={handleInputScore}>추가</button>
            </div>
            <div>
                <h1>{scoreList}</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {scoreList.map(student => {
                        return <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.score}</td>

                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}></th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StudentArrayPage2;