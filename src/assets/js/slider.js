let slideIndex = 1;

class Slider{
    showSlides(index){
        let mySlides = document.getElementsByClassName('main-product-img');
        let slides = document.getElementsByClassName('product-scroller-img');
        if(index>mySlides.length){
            slideIndex = 1;
        }
        if(index<1){
            slideIndex = mySlides.length
        }
        for(let i = 0; i<mySlides.length; i++){
            mySlides[i].style.display = 'none';
        }
        for(let i = 0; i<slides.length;i++){
            slides[i].className = slides[i].className.replace(' active-product-scroller','');
        }
        mySlides[slideIndex].style.display = 'block';
        slides[slideIndex-1].className += ' active-product-scroller';
    }
    currentSlide(index){
        this.showSlides(slideIndex = index)
    }
    nextSlide(index){
        this.showSlides(slideIndex += index)  
    }
}
let slider = new Slider();
slider.showSlides(slideIndex);
