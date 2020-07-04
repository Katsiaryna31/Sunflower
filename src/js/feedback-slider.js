import Swipe from 'swipejs';

window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: 0,
    speed: 400,
    auto: 3000,
    draggable: false,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function(index, elem, dir) {},
    transitionEnd: function(index, elem) {}
  });

const sliderLeft = document.querySelector('.slider-left');
sliderLeft.addEventListener('click', ()=> {
    mySwipe.prev();
})

const sliderRight = document.querySelector('.slider-right');
sliderRight.addEventListener('click', ()=> {
    mySwipe.next();
})