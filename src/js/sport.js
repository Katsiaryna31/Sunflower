import logo from '../assets/images/logo-mobile.png';
import horses from '../assets/images/horses.jpg';
import horsesTiny from '../assets/images/horses-tiny.png';
import tenisImage from '../assets/images/tenis.jpg';
import peImage from '../assets/images/pe.jpg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const horse = document.querySelector('.slider-image--horses');
horse.href = horses;

const horseTiny = document.querySelector('.slider-horse-tiny');
horseTiny.src = horsesTiny;

const tenis = document.querySelector('.slider-image--tenis');
tenis.src = tenisImage;

const pe = document.querySelector('.slider-image--pe');
pe.src = peImage;