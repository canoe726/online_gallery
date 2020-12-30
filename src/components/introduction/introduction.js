import React, { Component } from 'react';

import '../../style/introduction/introduction.scss';

class Introduction extends Component {
    render() {
        return (
            <div className="introduction-wrapper">
                <div className="introduction-card">
                    <div className="left">
                        <img className="card-img" src="./sample_img/image1.jpg" alt="introduction-card-item"></img>
                    </div>
                    <div className="right">
                        <div className="title">온라인 갤러리 소개</div>
                        <div className="contents">온라인 갤러리 입니다.</div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        );
    }
}

export default Introduction;