function resizeMasonryItem(item) {
    /* Get the grid object, its row-gap, and the size of its implicit rows */
    const grid = document.querySelector('.masonry');
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

    /*
     * Spanning for any brick = S
     * Grid's row-gap = G
     * Size of grid's implicitly create row-track = R
     * Height of item content = H
     * Net height of the item = H1 = H + G
     * Net height of the implicit row-track = T = G + R
     * S = H1 / T
     */
    const itemImg = item.querySelector('.item-img');
    const rowSpan = Math.ceil((itemImg.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

    /* Set the spanning as calculated above (S) */
    item.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeAllMasonryItems() {          // 모든 masonry-item 에 대해서 크기 조정
    const allItems = document.querySelectorAll('.masonry-item');
    allItems.forEach(item => {
      resizeMasonryItem(item);
    });
}

export { resizeMasonryItem, resizeAllMasonryItems }