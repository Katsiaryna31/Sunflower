import logo from '../assets/images/logo-mobile.png';
import logics from '../assets/images/logics.png';
import math from '../assets/images/math.png';
import world from '../assets/images/world.png';
import nature from '../assets/images/nature.png';
import reading from '../assets/images/reading.png';
import writing from '../assets/images/writing.jpg';
import literature from '../assets/images/literature.png';
import geography from '../assets/images/geography.png';
import christian from '../assets/images/christian.jpg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const logicsClass = document.querySelector('.slider-image--logics');
logicsClass.src = logics;

const mathClass = document.querySelector('.slider-image--math');
mathClass.src = math;

const worldClass = document.querySelector('.slider-image--world');
worldClass.src = world;

const natureClass = document.querySelector('.slider-image--nature');
natureClass.src = nature;

const readingClass = document.querySelector('.slider-image--reading');
readingClass.src = reading;

const writingClass = document.querySelector('.slider-image--writing');
writingClass.src = writing;

const literatureClass = document.querySelector('.slider-image--literature');
literatureClass.src = literature;

const geographyClass = document.querySelector('.slider-image--geography');
geographyClass.src = geography;

const christianClass = document.querySelector('.slider-image--christian');
christianClass.src = christian;

const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
      } else {
        activitiesLink.href = "index.html#activities";
    }
})