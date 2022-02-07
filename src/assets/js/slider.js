let slideIndex = 1;

class Slider{
    showSlides(index){
        let slides = document.getElementsByClassName('product-scroller-img');
        for(let i = 0; i<slides.length;i++){
            slides[i].className = slides[i].className.replace(' active-product-scroller','');
        }
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
