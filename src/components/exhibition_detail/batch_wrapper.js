import React, { Component } from 'react';

class BatchWrapper extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.scaleModalImage = this.scaleModalImage.bind(this);
    }

    componentDidMount() {
        this.initBatchWrapper(this.props.data);

        const batchWrapper = document.querySelector('.batch-wrapper');
        batchWrapper.addEventListener('click', this.toggleModal);

        window.addEventListener('click', this.closeModal);
    }

    componentDidUpdate() {
        this.initBatchWrapper(this.props.data);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.closeModal);
    }

    scaleModalImage(e) {
        let isScrollUp = false;
        if (e.deltaY < 0) isScrollUp = true;

        const modal = e.target.parentNode;
        const modalImg = modal.querySelector('.modal-img');

        const transform = modalImg.style.transform;
        if(!transform) {
            if(isScrollUp) modalImg.style.transform = `scale(1.0)`;
        } else {
            let scaleSize = modalImg.style.transform.substr(6);
            scaleSize = scaleSize.slice(0, -1);
            scaleSize *= 1;

            if(scaleSize === 1.0 && !isScrollUp) return;
            if(scaleSize >= 5.0 && isScrollUp) return;

            if(isScrollUp) modalImg.style.transform = `scale(${scaleSize + 0.05})`;
            else modalImg.style.transform = `scale(${scaleSize - 0.05})`;
        }
    }

    toggleModal() {
        const modalWrapper = document.body.querySelector('#modal-wrapper');                    
        if(modalWrapper.classList.contains('out')) {
            modalWrapper.classList.remove('out');
        } else {
            modalWrapper.classList.add('six');
        }

        const modalImg = document.querySelector('#modal-wrapper .modal-img');
        modalImg.removeAttribute('style');
        
        window.addEventListener('wheel', this.scaleModalImage);
    }

    closeModal(e) {
        const target = e.target;
        const isModalBackground = target.classList.contains('modal-background');

        const modalWrapper = document.body.querySelector('#modal-wrapper');
        const isSketch = modalWrapper.classList.contains('six');

        if(isModalBackground && isSketch) {
            modalWrapper.classList.add('out');
            
            window.removeEventListener('wheel', this.scaleModalImage);
        }
    }

    render() {
        return (
            <div className="batch-wrapper">
                <img className="img" src="/sample_img/artwork1.jpg" alt="batch_img"></img>
            </div>
        );
    }

    initBatchWrapper(data) {
        const batchWrapper = document.querySelector('.batch-wrapper');
        batchWrapper.innerHTML = "";
        
        if(data.type === 'image') {
            const img = document.createElement('img');
            img.className = 'img';
            img.src = data.imgPath;
            img.alt = "batch_img";

            batchWrapper.appendChild(img);

        } else if(data.type === 'video') {
            const video = document.createElement('video');
            video.className = 'video';
            video.src = data.imgPath;
            video.autoplay = "autoplay";
            video.muted = "muted";
            video.loop = "loop";

            batchWrapper.appendChild(video);
        }
    }
}

export default BatchWrapper;