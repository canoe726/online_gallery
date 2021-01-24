import * as React from 'react';

import '../../style/error/notFound.scss';

const NotFound = (props) => {
    const backgroundImgPath = '/sample_img/artwork_d_6.jpg';

    return (
        <div className="not-found-page" style={{backgroundImage: `url(${backgroundImgPath})`}}>
            <div className="not-found-page-wrapper">
                <div className="error-name-big">404</div>
                <div className="error-name-small">Not Found</div>
                <div className="error-message">유효하지 않은 페이지 입니다.</div>
                <div className="link" onClick={goIndex}>홈으로 이동</div>
            </div>
        </div>
    );

    function goIndex() {
        props.history.replace('/');
    }
}

export default NotFound;