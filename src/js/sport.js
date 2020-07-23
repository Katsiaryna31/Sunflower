import logo from '../assets/images/logo-mobile.png';
import horses from '../assets/images/horses.jpg';
import horsesTiny from '../assets/images/horses-tiny.png';
import tenisImage from '../assets/images/tenis.jpg';
import tenisImageTiny from '../assets/images/tenis-tiny.jpg';
import peImage from '../assets/images/pe.jpg';
import peImageTiny from '../assets/images/pe-tiny.jpg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const horse = document.querySelector('.slider-image--horses');
horse.href = horses;

const horseTiny = document.querySelector('.slider-horse-tiny');
horseTiny.src = horsesTiny;

const tenis = document.querySelector('.slider-image--tenis');
tenis.href = tenisImage;

const tenisTiny = document.querySelector('.slider-tenis-tiny');
tenisTiny.src = tenisImageTiny;

const pe = document.querySelector('.slider-image--pe');
pe.href = peImage;

const peTiny = document.querySelector('.slider-pe-tiny');
peTiny.src = peImageTiny;