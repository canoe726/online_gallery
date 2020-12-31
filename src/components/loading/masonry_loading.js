import React, { Component } from 'react';

const toggleMasonryLoading = () => {
    const loadingWrapper = document.querySelector('.masonry-loading-wrapper');
    loadingWrapper.classList.toggle('hidden');
}

class MasonryLoading extends Component {
    render() {
        return (
            <div className="masonry-loading-wrapper hidden">
                <img className="masonry-loading-img" src="/sample_img/masonry_loading.gif" alt="masonry_loading-img"></img>
            </div>
        );
    }
}

export default MasonryLoading;
export { toggleMasonryLoading };