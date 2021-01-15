import React, { Component } from 'react';

class BackgroundImg extends Component {
    componentDidMount() {
        this.initBackgroundImg(this.props.data);
    }

    componentDidUpdate() {
        this.initBackgroundImg(this.props.data);
    }

    render() {
        return (
            <div className="background-img active"></div>
        );
    }

    initBackgroundImg(data) {       // 백그라운드 이미지 생성
        const background = document.querySelector('.background-img');
        background.innerHTML = '';
        background.removeAttribute('style');
        
        if(data.type === 'color') {
            background.style.backgroundColor = data.backgroundColor;
            background.style.opacity = data.opacity;

        } else if(data.type === 'image') {
            const backgroundImg = document.createElement('img');
            backgroundImg.className = 'img';
            backgroundImg.src = data.imgPath;

            if(data.imgBlur === 'Y') {
                backgroundImg.style.filter = 'blur(2px)';
            }

            background.appendChild(backgroundImg);

        } else if(data.type === 'video') {
            const backgroundVideo = document.createElement('video');
            backgroundVideo.className = 'video';
            backgroundVideo.src = data.imgPath;
            backgroundVideo.autoplay = "autoplay";
            backgroundVideo.muted = "muted";
            backgroundVideo.loop = "loop";

            background.appendChild(backgroundVideo);
        }
    }
}

export default BackgroundImg;