import logo from '../assets/images/logo-mobile.png';
import painting from '../assets/images/painting.jpg';
import paintingTiny from '../assets/images/painting-tiny.jpg';
import modeling from '../assets/images/modeling.jpg';
import modelingTiny from '../assets/images/modeling-tiny.jpg';
import design from '../assets/images/design.jpg';
import designTiny from '../assets/images/design-tiny.jpg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const paintingClass = document.querySelector('.slider-image--painting');
paintingClass.href = painting;

const paintingClassTiny = document.querySelector('.slider-painting-tiny');
paintingClassTiny.src = paintingTiny;

const modelingClass = document.querySelector('.slider-image--modeling');
modelingClass.href = modeling;

const modelingClassTiny = document.querySelector('.slider-modeling-tiny');
modelingClassTiny.src = modelingTiny;

const designClass = document.querySelector('.slider-image--design');
designClass.href = design;

const designClassTiny = document.querySelector('.slider-design-tiny');
designClassTiny.src = designTiny;

const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
      } else {
        activitiesLink.href = "index.html#activities";
    }
})