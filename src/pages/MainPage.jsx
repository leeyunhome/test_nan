import React from 'react';
import Contacts from './Contacts';


const MainPage = ({ match }) => {
    // 카테고리가 선택되지 않았으면 기본값 all로 사용
    const category = match.params.category || 'all';

    return (
        <>
            <Contacts category={category} />
        </>
    );
};

export default MainPage;