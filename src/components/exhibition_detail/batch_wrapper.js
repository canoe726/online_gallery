import React, { Component } from 'react';

class BatchWrapper extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    toggleModal(e) {
        const modalWrapper = document.body.querySelector('#modal-wrapper');                    
        if(modalWrapper.classList.contains('out')) {
            modalWrapper.classList.remove('out');

        } else {
            modalWrapper.classList.add('six');
        }
    }

    closeModal(e) {
        const target = e.target;
        const isModalBackground = target.classList.contains('modal-background');

        const modalWrapper = document.body.querySelector('#modal-wrapper');
        const isSketch = modalWrapper.classList.contains('six');

        if(isModalBackground && isSketch) {
            modalWrapper.classList.add('out');
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