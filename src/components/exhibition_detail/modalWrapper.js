import React, { Component } from 'react';

class ModalWrapper extends Component {
    constructor(props) {
        super(props);

        this.isDown = false;
        this.prevMouseX = -1;
        this.prevMouseY = -1;

        this.whenMouseDown = this.whenMouseDown.bind(this);
        this.whenMouseUp = this.whenMouseUp.bind(this);
        this.whenMouseMove = this.whenMouseMove.bind(this);

        this.scaleModalImage = this.scaleModalImage.bind(this);
    }

    componentDidMount() {
        // click, drag 이미지 이동
        window.addEventListener('mousedown', this.whenMouseDown);
        window.addEventListener('mouseup', this.whenMouseUp);
        window.addEventListener('mousemove', this.whenMouseMove);
        

        // wheel 이미지 리사이즈
        window.addEventListener('wheel', this.scaleModalImage);
    }

    componentWillUnmount() {
        // click, drag 이미지 이동
        window.removeEventListener('mousedown', this.whenMouseDown);
        window.removeEventListener('mouseup', this.whenMouseUp);
        window.removeEventListener('mousemove', this.whenMouseMove);

        // wheel 이미지 리사이즈
        window.removeEventListener('wheel', this.scaleModalImage);
    }

    whenMouseDown(e) {
        if(e.target.classList.contains('modal-img')) {
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
        if(this.isDown && e.target.classList.contains('modal-img')) {
            const curMouseX = e.clientX;
            const curMouseY = e.clientY;

            const modalImg = e.target;
            console.log(modalImg)

            const transform = modalImg.style.transform;
            if(!transform) {
                modalImg.style.transform = `scale(1.0) translate(0px, 0px)`;
            } else {
                const transform = modalImg.style.transform.split(' ');
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

                modalImg.style.transform = `${scale} translate(${translateX}px, ${translateY}px)`;

                this.prevMouseX = curMouseX;
                this.prevMouseY = curMouseY;
            }
        }
    }

    scaleModalImage(e) {
        let isScrollUp = false;
        if (e.deltaY < 0) isScrollUp = true;

        const modal = e.target.parentNode;
        const modalImg = modal.querySelector('.modal-img');

        const transform = modalImg.style.transform;
        if(!transform) {
            modalImg.style.transform = `scale(1.0) translate(0px, 0px)`;
        } else {
            const transform = modalImg.style.transform.split(' ');
            const scale = transform[0];
            const translate = transform[1] + transform[2];

            let scaleSize = scale.substr(6);
            scaleSize = scaleSize.slice(0, -1);
            scaleSize *= 1;

            if(scaleSize <= 0.5 && !isScrollUp) return;
            if(scaleSize >= 5.0 && isScrollUp) return;

            if(isScrollUp) modalImg.style.transform = `scale(${scaleSize + 0.05}) ${translate}`;
            else modalImg.style.transform = `scale(${scaleSize - 0.05}) ${translate}`;
        }
    }

    render() {
        return (
            <div id="modal-wrapper">
                <div class="close-container">
                    <div class="leftright"></div>
                    <div class="rightleft"></div>
                </div>

                <div className="modal-background">
                    <div className="modal">
                        <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" y="0" fill="none" rx="0" ry="0" width="100%" height="100%"></rect>
                        </svg>
                        <img className="modal-img" src="/sample_img/artwork_d_2.jpg"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWrapper;