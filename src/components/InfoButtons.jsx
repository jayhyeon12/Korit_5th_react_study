import React from 'react';

// children: jsx 태그 사이에 자식 요소를 생성하여 객체로 가지고 옴
function InfoButtons({ children }) {
    return (
        <div>
            { children }
        </div>
    );
}

export default InfoButtons;