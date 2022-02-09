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