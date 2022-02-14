class LoadMore{
    loadMoreCommentsEventOnclick(){
        const loadmore = document.querySelector('#loadMore');
        let currentItems = 2;
        loadmore.addEventListener('click', (e) => {
            const elementList = [...document.querySelectorAll('.user-comment')];
            for (let i = currentItems; i < currentItems + 2; i++) {
                if (elementList[i]) {
                    elementList[i].style.display = 'block';
                }
            }
            currentItems += 2;

            // скрыть кнопку после окончания списка
            if (currentItems >= elementList.length) {
                event.target.style.display = 'none';
            }
        })
    }
    addHeightAfterClick(){
        let main = document.querySelector('.main-product-cart');
        let offsetMainHeight = main.offsetHeight;
        let addHeight = offsetMainHeight+250;
        main.style.height = `${addHeight}px`;

    }
    addMarginTopForRecallBlock(){
       let element =  document.querySelector('.call-back-block');
       let callBackMarginTop = window.getComputedStyle(element,null).getPropertyValue("margin-top")
       let addMarginTop =  parseInt(callBackMarginTop);
       addMarginTop+=250;
       element.style.marginTop = `${addMarginTop}px`;
    }
}
let loadMoreComments = new LoadMore();
loadMoreComments.loadMoreCommentsEventOnclick();




/*let main = document.querySelector('.main-product-cart');
let offsetMainHeight = main.offsetHeight;*/