const setFullPage = () => {
    let idx = 0;
    var debouncer;

    window.addEventListener('wheel', e => {
        const section = document.querySelectorAll('.hero-slider-item');
        const heroSlider = document.querySelector('#hero-slider');
        const direction = e.deltaY > 0 ? 'next' : 'prev';

        if(debouncer) clearTimeout(debouncer);

        debouncer = setTimeout(() => {
            if(direction === 'next') {
                heroSlider.classList.add('load-next');
                heroSlider.classList.remove('load-prev');

                let before = idx - 1;
                if(before < 0) before = section.length - 1;
        
                let next = idx + 1;
                if(next > section.length - 1) next = 0;
                
        
                section[before].classList.remove('prev');
                section[before].classList.remove('active');
        
                section[idx].classList.add('prev');
                section[idx].classList.remove('active');
        
                section[next].classList.add('active');
                section[next].classList.remove('prev');
                
                idx += 1;
                if(idx > section.length - 1) idx = 0;
        
            } else {
                heroSlider.classList.add('load-prev');
                heroSlider.classList.remove('load-next');

                let before = idx - 1;
                if(before < 0) before = section.length - 1;

                let next = idx + 1;
                if(next > section.length - 1) next = 0;

                section[before].classList.add('active');
                section[before].classList.remove('prev');
        
                section[idx].classList.add('prev');
                section[idx].classList.remove('active');
        
                section[next].classList.remove('prev');
                section[next].classList.remove('active');
        
                idx -= 1;
                if(idx < 0) idx = section.length - 1;
            }
        }, 400);
    });
}

export { setFullPage }