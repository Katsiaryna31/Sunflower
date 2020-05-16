import logo from '../assets/images/logo-mobile.png';
import horses from '../assets/images/horses.jpg';
import tenisImage from '../assets/images/tenis.jpg';
import peImage from '../assets/images/pe.jpg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const horse = document.querySelector('.slider-image--horses');
horse.src = horses;

const tenis = document.querySelector('.slider-image--tenis');
tenis.src = tenisImage;

const pe = document.querySelector('.slider-image--pe');
pe.src = peImage;