import Swipe from 'swipejs';

setTimeout(() => {
    window.mySwipe = new Swipe(document.querySelector('.slider'), {
        startSlide: 0,
        speed: 1000,
        auto: 3000,
        draggable: false,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        ignore: ".scroller",
        callback: function (index, elem, dir) { },
        transitionEnd: function (index, elem) { }
    });

    const sliderLeft = document.querySelector('.slider__control_left');
    sliderLeft.addEventListener('click', () => {
        mySwipe.prev();
    })

    const sliderRight = document.querySelector('.slider__control_right');
    sliderRight.addEventListener('click', () => {
        mySwipe.next();
    })

}, 100)
