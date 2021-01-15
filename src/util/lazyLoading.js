import { resizeMasonryItem } from './masonry';

function lazyLoad() {
    const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

    if("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);

                    checkUrl(lazyImage);
                }
            });
        });

        lazyImages.forEach(lazyImage => {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        console.log('not supported')
    }
}

function checkUrl(lazyImage) {                              // 특정 URL 에 따른 이미지 처리
    const urls = window.location.href.split('/');
    const masonryUrl = ['exhibition', 'author'];

    for(let idx=0; idx<masonryUrl.length; idx++) {          // masonry 가 존재하는 url 이면 위치 조정
        if(urls[3] === masonryUrl[idx]) {
            lazyImage.addEventListener('load', () => {
                resizeMasonryItem(lazyImage.parentNode);
            });
            break;
        }
    }
}

export { lazyLoad }