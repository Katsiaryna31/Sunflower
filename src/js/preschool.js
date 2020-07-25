import logo from '../assets/images/logo-mobile.png';
import logics from '../assets/images/logics.png';
import logicsTiny from '../assets/images/logics-tiny.png';
import math from '../assets/images/math.png';
import mathTiny from '../assets/images/math-tiny.png';
import world from '../assets/images/world.png';
import worldTiny from '../assets/images/world-tiny.png';
import nature from '../assets/images/nature.png';
import natureTiny from '../assets/images/nature-tiny.png';
import reading from '../assets/images/reading.png';
import readingTiny from '../assets/images/reading-tiny.png';
import writing from '../assets/images/writing.jpg';
import writingTiny from '../assets/images/writing-tiny.jpg';
import literature from '../assets/images/literature.png';
import literatureTiny from '../assets/images/literature-tiny.png';
import geography from '../assets/images/geography.png';
import geographyTiny from '../assets/images/geography-tiny.png';
import christian from '../assets/images/christian.jpg';
import christianTiny from '../assets/images/christian-tiny.jpg';

const sunflower = document.querySelector('.logo-mobile');
sunflower.src = logo;

const logicsClass = document.querySelector('.slider-image--logics');
logicsClass.href = logics;

const logicsClassTiny = document.querySelector('.slider-logics-tiny');
logicsClassTiny.src = logicsTiny;

const mathClass = document.querySelector('.slider-image--math');
mathClass.href = math;

const mathClassTiny = document.querySelector('.slider-math-tiny');
mathClassTiny.src = mathTiny;

const worldClass = document.querySelector('.slider-image--world');
worldClass.href = world;

const worldClassTiny = document.querySelector('.slider-world-tiny');
worldClassTiny.src = worldTiny;

const natureClass = document.querySelector('.slider-image--nature');
natureClass.href = nature;

const natureClassTiny = document.querySelector('.slider-nature-tiny');
natureClassTiny.src = natureTiny;

const readingClass = document.querySelector('.slider-image--reading');
readingClass.href = reading;

const readingClassTiny = document.querySelector('.slider-reading-tiny');
readingClassTiny.src = readingTiny;

const writingClass = document.querySelector('.slider-image--writing');
writingClass.href = writing;

const writingClassTiny = document.querySelector('.slider-writing-tiny');
writingClassTiny.src = writingTiny;

const literatureClass = document.querySelector('.slider-image--literature');
literatureClass.href = literature;

const literatureClassTiny = document.querySelector('.slider-literature-tiny');
literatureClassTiny.src = literatureTiny;

const geographyClass = document.querySelector('.slider-image--geography');
geographyClass.href = geography;

const geographyClassTiny = document.querySelector('.slider-geography-tiny');
geographyClassTiny.src = geographyTiny;

const christianClass = document.querySelector('.slider-image--christian');
christianClass.href = christian;

const christianClassTiny = document.querySelector('.slider-christian-tiny');
christianClassTiny.src = christianTiny;

const activitiesLink = document.querySelector('.activities-link');
activitiesLink.addEventListener('click', (e) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e.preventDefault();
      } else {
        activitiesLink.href = "index.html#activities";
    }
})