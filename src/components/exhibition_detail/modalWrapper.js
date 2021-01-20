import React, { Component } from 'react';

import { playBackgroundMusic } from './backgroundMusic';

class ModalWrapper extends Component {
    constructor(props) {
        super(props);

        this.isDown = false;
        this.prevMouseX = -1;
        this.prevMouseY = -1;

        this.whenMouseDown = this.whenMouseDown.bind(this);
        this.whenMouseUp = this.whenMouseUp.bind(this);
        this.whenMouseMove = this.whenMouseMove.bind(this);

        this.scaleModalContent = this.scaleModalContent.bind(this);

        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        const modalWrapper = document.querySelector('#modal-wrapper');
        // click, drag 이미지 이동
        modalWrapper.addEventListener('mousedown', this.whenMouseDown);
        modalWrapper.addEventListener('mouseup', this.whenMouseUp);
        modalWrapper.addEventListener('mousemove', this.whenMouseMove);

        // wheel 이미지 리사이즈
        modalWrapper.addEventListener('wheel', this.scaleModalContent);
    }

    componentWillUnmount() {
        const modalWrapper = document.querySelector('#modal-wrapper');
        // click, drag 이미지 이동
        modalWrapper.removeEventListener('mousedown', this.whenMouseDown);
        modalWrapper.removeEventListener('mouseup', this.whenMouseUp);
        modalWrapper.removeEventListener('mousemove', this.whenMouseMove);

        // wheel 이미지 리사이즈
        modalWrapper.removeEventListener('wheel', this.scaleModalContent);
    }

    whenMouseDown(e) {
        if((e.target.classList.contains('modal-img') ||
            e.target.classList.contains('modal-video'))) {
                
            this.isDown = true;
            this.prevMouseX = e.clientX;
            this.prevMouseY = e.clientY;
        }
    }

    whenMouseUp() {
        this.isDown = false;
    }

    whenMouseMove(e) {
        e.preventDefault();
        if(this.isDown) {     // 드래그 상태에서 움직인 경우
            if(e.target.tagName === "IMG") {
                const modalImg = e.target;
                this.howToMove(modalImg, e);
            }
        }
    }

    howToMove(elem, e) {
        const curMouseX = e.clientX;
        const curMouseY = e.clientY;

        const transform = elem.style.transform;
        if(!transform) {
            elem.style.transform = `scale(1.0) translate(0px, 0px)`;
        } else {
            const transform = elem.style.transform.split(' ');
            const scale = transform[0];
            let translateX = transform[1];
            let translateY = transform[2];

            translateX = translateX.substr(10);
            translateX = translateX.slice(0, -3);
            translateX *= 1;

            translateY = translateY.slice(0, -3);
            translateY *= 1;

            const gapX = curMouseX - this.prevMouseX;
            const gapY = curMouseY - this.prevMouseY;

            translateX += gapX;
            translateY += gapY;

            elem.style.transform = `${scale} translate(${translateX}px, ${translateY}px)`;

            this.prevMouseX = curMouseX;
            this.prevMouseY = curMouseY;
        }
    }

    scaleModalContent(e) {         // 휠을 이동하면서 크기 변경
        const target = e.target;
        if(target.classList[0].includes('close')) {
            return;
        }

        const dataType = target.tagName;
        const modal = e.target.parentNode;

        let isScrollUp = false;
        if(e.deltaY < 0) isScrollUp = true;
        if(dataType === "IMG") {
            const modalImg = modal.querySelector('.modal-img');
            this.howToScale(isScrollUp, modalImg);
        }
    }

    howToScale(isScrollUp, elem) {
        const transform = elem.style.transform;
        if(!transform) {
            elem.style.transform = `scale(1.0) translate(0px, 0px)`;
        } else {
            const transform = elem.style.transform.split(' ');
            const scale = transform[0];
            const translate = transform[1] + transform[2];

            let scaleSize = scale.substr(6);
            scaleSize = scaleSize.slice(0, -1);
            scaleSize *= 1;

            if(scaleSize <= 0.5 && !isScrollUp) return;
            if(scaleSize >= 5.0 && isScrollUp) return;

            if(isScrollUp) elem.style.transform = `scale(${scaleSize + 0.05}) ${translate}`;
            else elem.style.transform = `scale(${scaleSize - 0.05}) ${translate}`;
        }
    }

    closeModal(e) {
        const target = e.target;
        const isModalBackground = target.classList.contains('modal-background');
        const modalWrapper = document.body.querySelector('#modal-wrapper');
        const isSketch = modalWrapper.classList.contains('sketch');
        const modalVideo = document.querySelector('.modal-video');

        if(isSketch) {                  // 창이 활성화 되어 있을 때
            if(isModalBackground) {     // 백그라운드 클릭
                modalWrapper.classList.add('out');

                if(modalVideo.src) {  // 비디오 초기화
                    modalVideo.currentTime = 0;
                    modalVideo.pause();
                }
                playBackgroundMusic();

            } else if(target.classList[0].includes('close')) {        // X 버튼 클릭
                modalWrapper.classList.add('out');

                if(modalVideo.src) {  // 비디오 초기화
                    modalVideo.currentTime = 0;
                    modalVideo.pause();
                }
                playBackgroundMusic();
            }
        }
    }

    render() {
        return (
            <div id="modal-wrapper" onClick={this.closeModal}>
                <div className="close-container">
                    <div className="close-leftright"></div>
                    <div className="close-rightleft"></div>
                </div>

                <div className="modal-background">
                    <div className="modal">
                        <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" y="0" fill="none" rx="0" ry="0" width="100%" height="100%"></rect>
                        </svg>
                        <img className="modal-img hidden" alt="modal-img"></img>
                        <video className="modal-video hidden"></video>
                    </div>
                </div>
            </div>
        );
    }
}

function initModalContent(target) {
    if(!target) return;
    
    const modalImg = document.querySelector('.modal-img');
    const modalVideo = document.querySelector('.modal-video');
    
    modalImg.removeAttribute('style');
    modalVideo.removeAttribute('style');

    if(target.tagName === "IMG") {
        modalImg.classList.remove('hidden');
        modalImg.src = target.src;

        modalVideo.classList.add('hidden');

    } else if(target.tagName === "VIDEO") {
        modalImg.classList.add('hidden');
        
        modalVideo.classList.remove('hidden');
        modalVideo.src = target.src;
        modalVideo.currentTime = 0;
        modalVideo.play();
    }
}

export default ModalWrapper;
export { initModalContent }