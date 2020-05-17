import logo from '../assets/images/logo-mobile.png';
import painting from '../assets/images/painting.jpg';
import modeling from '../assets/images/modeling.jpg';
import design from '../assets/images/design.jpg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const paintingClass = document.querySelector('.slider-image--painting');
paintingClass.src = painting;

const modelingClass = document.querySelector('.slider-image--modeling');
modelingClass.src = modeling;

const designClass = document.querySelector('.slider-image--design');
designClass.src = design;